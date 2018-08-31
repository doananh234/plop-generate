import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RestCreate from '../../rest/Create';
import { getIconCategories } from '../../../redux/config/actions';
import EmergencyTypeForm from '../components/EmergencyTypeForm';

class CreateActivityType extends React.PureComponent {
  static propTypes = {
    iconCategories: PropTypes.array,
    getIconCategories: PropTypes.func,
  };

  componentDidMount() {
    this.props.getIconCategories();
  }

  render() {
    const { iconCategories } = this.props;
    return (
      <RestCreate {...this.props} resource="EmergencyType">
        <EmergencyTypeForm iconCategories={iconCategories} />
      </RestCreate>
    );
  }
}

function mapStateToProps(state) {
  return {
    iconCategories: state.config.iconCategories,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getIconCategories: () => dispatch(getIconCategories()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { withRef: true },
)(CreateActivityType);
