import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RestEdit from '../../rest/Edit';
import { getIconCategories } from '../../../redux/config/actions';
import EmergencyTypeForm from '../components/EmergencyTypeForm';

class EditActivityType extends React.PureComponent {
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
      <RestEdit {...this.props} resource="EmergencyType">
        <EmergencyTypeForm iconCategories={iconCategories} />
      </RestEdit>
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
)(EditActivityType);
