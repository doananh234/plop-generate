import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactFlagsSelect from 'react-flags-select';
import { i18nActions } from 'redux-react-i18n';
import _ from 'lodash';
import 'react-flags-select/css/react-flags-select.css';

class i18nDropdown extends Component {
  componentDidMount() {}

  render() {
    return (
      <ReactFlagsSelect
        countries={this.props.countries}
        defaultCountry={this.props.defaultCountry}
        showOptionLabel={false}
        showSelectedLabel={false}
        onSelect={code => this.props.changeLocale(code)}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    defaultCountry: state.i18n.currentLanguage,
    countries: getCountriesAvailable(state.i18n.languages),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeLocale: code => {
      return dispatch(i18nActions.setCurrentLanguage(code));
    },
  };
}

const getCountriesAvailable = languages => {
  return _.map(languages, language => {
    return language.code;
  });
};

i18nDropdown.propTypes = {
  defaultCountry: PropTypes.string,
  countries: PropTypes.array,
  changeLocale: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(i18nDropdown);
