import React, { Component } from "react";
import "./Auth.css";
import { connect } from "react-redux";

import pic2 from "../Home/hmi.png";

class Auth extends Component {
  state = {
    page: "REGISTER",
    registerUsername: "",
    registerPassword: "",
    repeatPassword: "",
    registerEmail: "",
    loginUsername: "",
    loginPassword: "",
    isSame: true,
    color: ""
  };
  componentDidMount() {
    this.setState({ color: this.props.logoClicked });
  }

  passwordChecker = () => {
    if (!this.state.isSame) {
      return <div className="alert alert-danger">Password belom sama</div>;
    }
  };
  render() {
    console.log(this.props.logoClicked);
    return (
      <div
        className="container auth"
        style={{
          background: `-webkit-linear-gradient(left, ${this.state.color}, #313131, ${this.state.color}, #313131)`
        }}
      >
        <div className="row">
          <div className="col-3 text-center auth-left">
            <h3>Welcom</h3>
            <p>Komunikasi antar organisasi dengan mudah</p>
            <br />
            <br />
            <div className="tab-auth">
              <div
                className={
                  "d-inline-block m-1 text-center " +
                  (this.state.page == "LOGIN" ? "active-auth" : "")
                }
                onClick={() => this.setState({ page: "LOGIN" })}
              >
                Login
              </div>
              <div
                className={
                  "d-inline-block m-1 text-center " +
                  (this.state.page == "REGISTER" ? "active-auth" : "")
                }
                onClick={() => this.setState({ page: "REGISTER" })}
              >
                Register
              </div>
            </div>
          </div>
          <div className="col-9 auth-right text-center pb-5">
            {this.state.page == "REGISTER" ? (
              <div className="container-fluid">
                <h3
                  className="pb-3"
                  style={{ color: "#495057", marginTop: "8%" }}
                >
                  Register Now!
                </h3>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <input
                        type="text"
                        ref="registerUsername"
                        onChange={e =>
                          this.setState({ registerUsername: e.target.value })
                        }
                        className="form-control"
                        placeholder="Username"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <input
                        type="text"
                        ref="registerEmail"
                        onChange={e =>
                          this.setState({ registerEmail: e.target.value })
                        }
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <input
                        type="password"
                        ref="registerPassword"
                        onChange={e =>
                          this.setState({ registerPassword: e.target.value })
                        }
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <input
                        type="password"
                        ref="repeatPassword"
                        onChange={e =>
                          this.setState({ repeatPassword: e.target.value })
                        }
                        className="form-control"
                        placeholder="Repeat Password"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">{this.passwordChecker()}</div>
                  <div className="col-4">
                    {!this.props.isLoading ? (
                      <input
                        type="button"
                        onClick={this.onRegisterBtnHandler}
                        ref="btnLogin"
                        className="btn float-right btn-register"
                        value="Register"
                      />
                    ) : (
                      <div className="spinner-border text-primary">
                        <span className="sr-only">Loading...</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="container-fluid">
                <h3
                  className="pb-3"
                  style={{ color: "#495057", marginTop: "8%" }}
                >
                  Login Now!
                </h3>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        onChange={e =>
                          this.setState({ loginUsername: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        onKeyDown={this.onBtnEnter}
                        onChange={e =>
                          this.setState({ loginPassword: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <input
                      type="button"
                      className="btn float-right btn-register"
                      value="Login"
                      ref="loginBtn"
                      onClick={this.onLoginBtnHandler}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    logoClicked: state.user.logoImg
  };
};

export default connect(mapStateToProps)(Auth);
