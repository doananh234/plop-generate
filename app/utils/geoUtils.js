'use strict';

const rp = require('request-promise-native');
const { each, intersection } = require('lodash');

const GOOGLE_API_KEY =
  process.env.GOOGLE_API_KEY || 'AIzaSyCKpOs6rlvRoe8TxZn1ZASCt6O5sIvmxQQ';

function reverseGeoByAddress(address) {
  const addressComponents = address.split(', ');
  return {
    formatted_address: address,
    administrative_area_level_3: addressComponents[1],
    administrative_area_level_2: addressComponents[2],
    administrative_area_level_1: addressComponents[3]
  };
}

async function reverseGeo(location, language) {
  const options = {
    uri: 'https://maps.google.com/maps/api/geocode/json',
    qs: {
      latlng: location.latitude + ',' + location.longitude,
      language: language || 'vi',
      key: GOOGLE_API_KEY
    },
    json: true
  };
  const httpResponse = await rp(options);
  const addressResult = httpResponse.results[0];
  return parsingAddress(addressResult, language);
}

function parsingAddress(result, language) {
  if (!result || !result.address_components) {
    return;
  }
  const components = {};
  const lastIndex = result.formatted_address.lastIndexOf(',');
  const formatted_address =
    lastIndex > -1
      ? result.formatted_address.substring(0, lastIndex)
      : result.formatted_address;
  if (language === 'vi') {
    components.formatted_address =
      formatted_address &&
      formatted_address.replace('Unnamed Road', 'Đường chưa đặt tên');
  } else {
    components.formatted_address = formatted_address;
  }
  each(result.address_components, (component) => {
    if (intersection(component.types, ['administrative_area_level_1']).length) {
      components.administrative_area_level_1 = component.short_name;
    }

    if (intersection(component.types, ['administrative_area_level_2']).length) {
      components.administrative_area_level_2 = component.short_name.replace(
        /(q. )|(Q. )|(Tx. )/g,
        ''
      );
    }

    if (intersection(component.types, ['administrative_area_level_3']).length) {
      components.administrative_area_level_3 = component.short_name.replace(
        /(TT. )|(tt. )/g,
        ''
      );
    }

    if (intersection(component.types, ['country']).length) {
      components.country = component.long_name || component.short_name;
    }

    if (intersection(component.types, ['locality']).length) {
      components.locality = component.long_name.replace(
        /(tp. )|(tt. )|(h. )|(Tx. )|(tx. )/g,
        ''
      );
    }

    if (intersection(component.types, ['sublocality_level_1']).length) {
      components.sublocality_level_1 = component.long_name.replace(
        /(tp. )|(tt. )|(h. )/g,
        ''
      );
    }

    if (intersection(component.types, ['postal_code']).length) {
      components.postcode = parseInt(component.long_name);
    }
  });
  if (components.postcode) {
    components.formatted_address = components.formatted_address.replace(
      components.postcode,
      ''
    );
  }
  //TODO: Google api do not support administrative_area_level_3 response. Use
  //temporary hack using formatted address to get administrative_area_level_3
  if (!components.administrative_area_level_3) {
    components.administrative_area_level_3 = components.formatted_address.split(
      ', '
    )[1];
  }
  return components;
}

module.exports = {
  reverseGeo,
  reverseGeoByAddress
};
