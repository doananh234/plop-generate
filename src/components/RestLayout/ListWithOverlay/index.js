import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Overlay from '../../common/Overlay';
import CustomBreadcrumb from '../../common/Breadcrumb';
import CreateButton from '../../RestActions/CreateButton';
import { CreateFormWrapper } from './styles';

class ListWithOverlay extends Component {
  constructor(props) {
    super(props);
    this.overlay = React.createRef();
  }

  toggleOverlay = () => {
    this.overlay.onToggle();
  };

  render() {
    const {
 resource, title, createView, children,
} = this.props;
    const BREADCRUMB_LIST = [
      {
        title,
        path: `/auth/${resource}`,
      },
    ];
    const actions = <CreateButton gotoCreatePage={this.toggleOverlay} />;
    return (
      <Overlay
        {...this.props}
        ref={ref => {
          this.overlay = ref;
        }}
        title={<CustomBreadcrumb data={BREADCRUMB_LIST} />}
        expand={(
          <CreateFormWrapper>
            {React.cloneElement(createView, {
              onSuccessSubmit: this.toggleOverlay,
            })}
          </CreateFormWrapper>
)}
        extra={actions}
      >
        {children}
      </Overlay>
    );
  }
}

ListWithOverlay.propTypes = {
  createView: PropTypes.element,
  title: PropTypes.string,
  resource: PropTypes.string,
  children: PropTypes.node,
};

export default ListWithOverlay;
