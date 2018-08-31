import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Searchbar from './Searchbar';
import TopbarSearchModal from './topbarSearchModal.style';

class TopbarSearch extends Component {
  constructor(props) {
    super(props);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.showModal = this.showModal.bind(this);
    this.state = {
      visiblity: false,
    };
  }

  handleOk() {
    this.setState({
      visible: false,
    });
  }

  handleCancel() {
    this.setState({
      visible: false,
    });
  }

  showModal() {
    this.setState({
      visible: true,
    });
  }

  render() {
    const { customizedTheme } = this.props;
    const { visible } = this.state;
    return (
      <div>
        {/* <Button type="primary" onClick={this.showModal}>Open</Button> */}
        <div onClick={this.showModal} role="presentation">
          <i className="ion-ios-search-strong" style={{ color: customizedTheme.textColor }} />
        </div>
        <TopbarSearchModal
          title="Basic Modal"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          wrapClassName="isoSearchModal"
          width="60%"
          footer={null}
        >
          <div className="isoSearchContainer">{visible ? <Searchbar /> : ''}</div>
        </TopbarSearchModal>
      </div>
    );
  }
}

TopbarSearch.propTypes = {
  customizedTheme: PropTypes.object,
};

export default TopbarSearch;
