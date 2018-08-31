import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form } from 'antd';
import Input from '../../components/uielements/input';
import Checkbox from '../../components/uielements/checkbox';
import Button from '../../components/uielements/button';
import { login as loginAction } from '../../redux/login/actions';
import IntlMessages from '../../components/utility/intlMessages';
import SignInStyleWrapper from './style';

const FormItem = Form.Item;

class SignIn extends Component {
  constructor(props) {
    const { isAuthenticated } = props;
    super(props);
    this.state = {
      redirectToReferrer: isAuthenticated,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { isAuthenticated } = this.props;
    if (isAuthenticated !== nextProps.isAuthenticated && nextProps.isAuthenticated === true) {
      this.setState({ redirectToReferrer: true });
    }
  }

  handleLogin = e => {
    e.preventDefault();
    const { form, login } = this.props;
    form.validateFields((err, values) => {
      if (!err && values) {
        const { username, password } = values;
        login(username, password);
      }
    });
  };

  render() {
    const from = { pathname: '/dashboard' };
    const { redirectToReferrer } = this.state;
    const { form } = this.props;
    const { getFieldDecorator } = form;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }
    return (
      <SignInStyleWrapper className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="isoLogoWrapper">
              <Link to="/dashboard">
                <IntlMessages id="page.signInTitle" />
              </Link>
            </div>

            <div className="isoSignInForm">
              <Form onSubmit={this.handleLogin}>
                <div className="isoInputWrapper">
                  <FormItem>
                    {getFieldDecorator('username', {
                      rules: [{ required: true, message: 'Please input your username!' }],
                    })(<Input placeholder="Username" />)}
                  </FormItem>
                </div>

                <div className="isoInputWrapper">
                  <FormItem>
                    {getFieldDecorator('password', {
                      rules: [{ required: true, message: 'Please input your password!' }],
                    })(<Input type="password" placeholder="Password" />)}
                  </FormItem>
                </div>

                <div className="isoInputWrapper isoLeftRightComponent">
                  <Checkbox>
                    <IntlMessages id="page.signInRememberMe" />
                  </Checkbox>
                  <Button type="primary" htmlType="submit" onClick={this.handleLogin}>
                    <IntlMessages id="page.signInButton" />
                  </Button>
                </div>
              </Form>
              <p className="isoHelperText">
                <IntlMessages id="page.signInPreview" />
              </p>
              <div className="isoCenterComponent isoHelperWrapper">
                <Link to="/forgotpassword" className="isoForgotPass">
                  <IntlMessages id="page.signInForgotPass" />
                </Link>
                <Link to="/signup">
                  <IntlMessages id="page.signInCreateAccount" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SignInStyleWrapper>
    );
  }
}

SignIn.propTypes = {
  isAuthenticated: PropTypes.bool,
  login: PropTypes.func,
  form: PropTypes.object,
};

const WrappedSignInForm = Form.create()(SignIn);

export default connect(
  state => ({
    isAuthenticated: state.login.isAuthenticated,
  }),
  dispatch => ({
    login: (username, password) => {
      dispatch(loginAction(username, password));
    },
  }),
)(WrappedSignInForm);
