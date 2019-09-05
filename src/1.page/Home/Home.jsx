import React, { Component } from "react";
import pic1 from "./gmni.png";
import pic2 from "./hmi.png";
import pic3 from "./gmki.png";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="text-atas">Organsasi</h1>
        <div className="logo-organ">
          <Link to="/auth">
            <img src={pic2} className="pichmi" />
            <img src={pic1} className="picgmni" />
            <img src={pic3} className="picgmki" />
          </Link>
        </div>
        <h1 className="text-bawah">Linta Indonesia</h1>
      </div>
    );
  }
}

export default Home;
