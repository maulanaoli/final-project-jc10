import React, { Component } from "react";
import pic1 from "./gmni.png";
import pic2 from "./hmi.png";
import pic3 from "./gmki.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { imgClick } from "../../redux/1.actions/userActions";
import "./Home.css";
var a = "red";
var b = "green";
var c = "blue";
class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="text-atas">Organsasi</h1>
        <div className="logo-organ">
          <Link to="/auth">
            <img
              src={pic2}
              className="pichmi"
              onClick={() => this.props.imgClick(b)}
            />
          </Link>
          <Link to="/auth">
            <img
              src={pic1}
              className="picgmni"
              onClick={() => this.props.imgClick(a)}
            />
          </Link>
          <Link to="/auth">
            <img
              src={pic3}
              className="picgmki"
              onClick={() => this.props.imgClick(c)}
            />
          </Link>
        </div>
        <h1 className="text-bawah">Linta Indonesia</h1>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isLoading: state.user.loading,
    message: state.user.msg,
    username: state.user.username
  };
};

export default connect(
  mapStateToProps,
  { imgClick }
)(Home);
