import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import IntlMessages from '../../utility/intlMessages';

class RestTableLayout extends Component {
  state = {
    current: currentPage(this.props.resourceData),
  };

  onChangePagination = e => {
    const { resourceData } = this.props;
    this.setState({ current: e.current });
    this.props.retrieveList({
      skip: (e.current - 1) * e.pageSize,
      limit: e.pageSize,
      filter: resourceData.filter,
    });
  };

  onChangeRecord(record, item) {
    switch (item.props.type) {
      case 'switch':
        return this.props.updateRecord(
          record.id,
          {
            [item.props.source]: !record[item.props.source],
          },
          true,
        );

      default:
        return null;
    }
  }

  render() {
    const { resourceData, children, gotoEditPage, loading } = this.props;
    const { current } = this.state;

    const columns = children.map((item, index) => {
      return {
        title: item.props.title ? <IntlMessages id={item.props.title} /> : null,
        dataIndex: item.props.source,
        width: item.props.width,
        align: item.props.align,
        key: `col${index}`,
        render:
          item.props.render ||
          ((obj, record) => {
            const RecordComponent = React.cloneElement(item, {
              table: true,
              record,
              onChange: () => this.onChangeRecord(record, item),
              ...getAction(this.props, item),
            });
            return RecordComponent;
          }),
      };
    });

    return (
      <Table
        onRow={record => {
          return {
            onDoubleClick: () => {
              gotoEditPage(record.id);
            },
          };
        }}
        onChange={this.onChangePagination}
        pagination={{
          position: 'both',
          total: resourceData.count,
          current,
          showTotal,
          showQuickJumper: true,
          showSizeChanger: true,
        }}
        columns={columns}
        loading={loading}
        dataSource={(resourceData && resourceData.list) || []}
        rowKey="id"
      />
    );
  }
}

const currentPage = resourceData => {
  return Number(resourceData.skip) / Number(resourceData.limit) + 1;
};

const showTotal = (total, range) => {
  return (
    <div>
      {` ${range.join(' -> ')} / ${total} `}{' '}
      <IntlMessages id={total > 1 ? 'text.records' : 'text.record'} />
    </div>
  );
};
const getAction = (props, item) => {
  switch (item.props.source) {
    case 'edit':
      return { gotoEditPage: props.gotoEditPage };
    case 'delete':
      return { deleteItem: props.deleteItem };
    case 'show':
      return { gotoShowPage: props.gotoShowPage };
    case 'group':
      return {
        gotoShowPage: props.gotoShowPage,
        deleteItem: props.deleteItem,
        gotoEditPage: props.gotoEditPage,
      };

    default:
      return {};
  }
};

RestTableLayout.propTypes = {
  children: PropTypes.node,
  retrieveList: PropTypes.func,
  gotoEditPage: PropTypes.func,
  resourceData: PropTypes.object,
  loading: PropTypes.bool,
  updateRecord: PropTypes.func,
};

export default RestTableLayout;
