import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  retrieveList as retrieveListActions,
  editRecord,
  editMultiRecord,
} from '../../../redux/rest/actions';
import { search } from '../../../redux/restFilter/actions';
import AddReferenceForm from '../../../components/RestLayout/AddReferenceForm';
import { getRecordData } from '../../../helpers/Tools';

class RefOneToMany extends Component {
  componentDidMount() {
    const { record, source, mappedBy } = this.props;
    this.props.retrieveList({
      where: {
        [mappedBy]: { $in: [getRecordData(record, source)] },
      },
    });
  }

  onSearch = text => {
    const { searchProp } = this.props;
    this.props.search({
      where: {
        [searchProp]: {
          $text: {
            $search: {
              $term: text,
            },
          },
        },
      },
    });
  };

  addReference = data => {
    const { record, source, mappedBy } = this.props;
    const convertData = data.map(item => {
      return {
        ...item,
        [mappedBy]: getRecordData(record, source),
      };
    });
    this.props.updateReference(convertData);
  };

  render() {
    const {
      resourceData,
      retrieveList,
      children,
      gotoShowPage,
      deleteItem,
      gotoEditPage,
      filterResourceData,
      searchProp,
      record,
      source,
      showAddReferenceForm,
    } = this.props;

    return (
      <div>
        {showAddReferenceForm && (
          <AddReferenceForm
            filterProp={searchProp}
            resourceData={filterResourceData}
            onSearch={this.onSearch}
            addReference={this.addReference}
          />
        )}
        {React.cloneElement(children, {
          record,
          source,
          resourceData: {
            list: resourceData,
            count: resourceData.length,
          },
          retrieveList,
          gotoShowPage,
          gotoEditPage,
          deleteItem,
        })}
      </div>
    );
  }
}

RefOneToMany.propTypes = {
  resourceData: PropTypes.array,
  record: PropTypes.object,
  retrieveList: PropTypes.func,
  children: PropTypes.node,
  source: PropTypes.string,
  updateReference: PropTypes.func,
  gotoShowPage: PropTypes.func,
  mappedBy: PropTypes.string,
  deleteItem: PropTypes.func,
  gotoEditPage: PropTypes.func,
  filterResourceData: PropTypes.any,
  searchProp: PropTypes.any,
  showAddReferenceForm: PropTypes.func,
  search: PropTypes.func,
};

const mapStateToProps = (state, props) => {
  return {
    filterResourceData: state.rest[props.reference]
      ? state.rest[props.reference].list.filter(
          data => String(data[props.mappedBy]).search(props.record[props.source]) === -1,
        )
      : [],
    resourceData: state.rest[props.reference]
      ? state.rest[props.reference].list.filter(
          data => String(data[props.mappedBy]).search(props.record[props.source]) > -1,
        )
      : [],
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    search: (filter, isRefresh) => dispatch(search(props.reference, filter, isRefresh)),
    retrieveList: (filter, isRefresh) =>
      dispatch(retrieveListActions(props.reference, filter, isRefresh)),
    gotoShowPage: id => props.history.push(`/auth/${props.reference}/${id}/show`),
    updateReference: data => dispatch(editMultiRecord(props.reference, data)),
    gotoEditPage: id => props.history.push(`/auth/${props.reference}/${id}/edit`),
    deleteItem: id => {
      // remove reference
      dispatch(editRecord(props.reference, id, { [props.mappedBy]: null }));
    },
  };
};

const RefOneToManyConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RefOneToMany);

RefOneToManyConnected.defaultProps = {
  showAddReferenceForm: true,
};

export default RefOneToManyConnected;
