import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { OverlayWrapper, IconWrapper } from './styles';

class OverlayCollapse extends PureComponent {
  constructor(props) {
    super(props);
    this.toggle = React.createRef();
  }

  onClose = () => {
    this.toggle.checked = false;
  };

  onOpen = () => {
    this.toggle.checked = true;
  };

  onToggle = () => {
    this.toggle.checked = !this.toggle.checked;
  };

  render() {
    const { expand, extra, title } = this.props;
    return (
      <OverlayWrapper
        bordered={false}
        ref={ref => {
          this.main = ref;
        }}
        title={title}
        extra={extra}
      >
        <input
          ref={ref => {
            this.toggle = ref;
          }}
          id="toggle"
          type="checkbox"
        />
        <label htmlFor="toggle">{/* <HeaderCollapse /> */}</label>
        <label htmlFor="toggle" className="overlay" />
        <div
          ref={ref => {
            this.divContentRef = ref;
          }}
          id="expand"
        >
          {expand}
          <label htmlFor="toggle" className="btnClose">
            <IconWrapper type="close" />
          </label>
        </div>
        {this.props.children}
      </OverlayWrapper>
    );
  }
}

OverlayCollapse.propTypes = {
  children: PropTypes.node,
  expand: PropTypes.node,
  extra: PropTypes.node,
  title: PropTypes.string,
};
export default OverlayCollapse;
