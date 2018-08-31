import React, { PureComponent } from 'react';
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import './index.css';

class LoadingComponent extends PureComponent {
  constructor(props) {
    super(props);
    Nprogress.start();
  }
  componentWillUnmount() {
    Nprogress.done();
  }
  // async componentDidMount() {
  //   this.mounted = true;
  //   const { default: Component } = await importComponent();
  //   Nprogress.done();
  //   if (this.mounted) {
  //     this.setState({
  //       component: <Component {...this.props} />
  //     });
  //   }
  // }
  render() {
    return <span />;
  }
}

export default LoadingComponent;
