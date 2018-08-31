import moment from 'moment';

export const upperFirstChar = text => {
  return text.replace(/\w\S*/g, txt => {
    return txt.charAt(0).toUpperCase() + txt.substr(1);
  });
};
export const lowerFirstChar = text => {
  return text.charAt(0).toLowerCase() + text.substr(1);
};
export const replaceAll = (text, search, replacement) => {
  return text.replace(new RegExp(search, 'g'), replacement);
};

export const makeActionName = text => {
  return lowerFirstChar(
    replaceAll(upperFirstChar(replaceAll(text, '_', ' ').toLowerCase()), ' ', ''),
  );
};

export const formatDateTime = text => {
  return moment(text).format('DD/MM/YYY hh:mm A');
};

export const encodeJsonToURI = params => {
  return Object.keys(params)
    .map(key => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
    })
    .join('&');
};
