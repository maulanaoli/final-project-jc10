import React, { Component } from "react";
import "./Auth.css";
import { connect } from "react-redux";
import { onLogin, onRegister } from "./../../redux/1.actions";
import pic2 from "../Home/hmi.png";
import swal from "sweetalert";

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
    color: this.props.logoClicked,
    nickName: this.props.nickname,
    clickLog: false
  };

  passwordChecker = () => {
    if (!this.state.isSame) {
      return <div className="alert alert-danger">Password belom sama</div>;
    }
  };
  onLoginBtnHandler = () => {
    // let loginObj = {
    //     username : this.state.loginUsername,
    //     password : this.state.loginPassword
    // }
    // this.props.onLogout()
    this.props.onLogin({
      asalNama: this.state.loginUsername,
      asalKunci: this.state.loginPassword
    });
  };

  onRegisterBtnHandler = () => {
    if (
      this.state.repeatPassword !== this.state.registerPassword ||
      (this.state.repeatPassword == "" && this.state.registerPassword == "")
    ) {
      this.setState({ isSame: false });
    }
    if (!this.state.registerEmail) {
      this.refs.registerEmail.className += " invalid-input";
    }
    if (!this.state.registerUsername) {
      this.refs.registerUsername.className += " invalid-input";
    }
    if (!this.state.repeatPassword) {
      this.refs.repeatPassword.className += " invalid-input";
    }
    if (!this.state.registerPassword) {
      this.refs.registerPassword.className += " invalid-input";
    }
    if (
      this.state.registerEmail &&
      this.state.registerPassword &&
      this.state.repeatPassword &&
      this.state.registerUsername
    ) {
      let registerObj = {
        username: this.state.registerUsername,
        password: this.state.registerPassword,
        email: this.state.registerEmail
      };

      this.props.onRegister(registerObj);
    } else {
      swal("input");
    }
  };

  render() {
    console.log(this.props.logoClicked);
    return (
      <div class="bodyy">
        <div
          class={
            "container" + (this.state.clickLog ? " right-panel-active" : "")
          }
          id="container"
        >
          <div class="form-container sign-up-container">
            <form action="#">
              <h1>Create Account</h1>
              <div class="social-container">
                <a href="#" class="social">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social">
                  <i class="fab fa-google-plus-g"></i>
                </a>
                <a href="#" class="social">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign Up</button>
            </form>
          </div>
          <div class="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <div class="social-container">
                <a href="#" class="social">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social">
                  <i class="fab fa-google-plus-g"></i>
                </a>
                <a href="#" class="social">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use your account</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forgot your password?</a>
              <button>Sign In</button>
            </form>
          </div>
          <div class="overlay-container">
            <div
              class="overlay"
              style={{
                background: `-webkit-linear-gradient(left,${this.state.color},${this.state.color}, #3618a1,${this.state.color},${this.state.color} )`
              }}
            >
              <div class="overlay-panel overlay-left">
                <h1>Welcome Back! {this.state.nickName}</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button
                  class="ghost"
                  id="signIn"
                  onClick={() => this.setState({ clickLog: false })}
                >
                  Sign In
                </button>
              </div>
              <div class="overlay-panel overlay-right">
                <h1>Hello, </h1>
                <br />
                <h1>{this.state.nickName}</h1>
                <p>Enter your personal details and start journey with us</p>
                <button
                  class="ghost"
                  id="signUp"
                  onClick={() => this.setState({ clickLog: true })}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <p>
            Created with <i class="fa fa-heart"></i> by
            <a target="_blank" href="https://florin-pop.com">
              Florin Pop
            </a>
            - Read how I created this and how you can join the challenge
            <a
              target="_blank"
              href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/"
            >
              here
            </a>
            .
          </p>
        </footer>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    logoClicked: state.user.logoImg,
    nickname: state.user.nickName
  };
};

export default connect(
  mapStateToProps,
  { onLogin, onRegister }
)(Auth);
