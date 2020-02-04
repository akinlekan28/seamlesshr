import React, { Component } from "react";
import grid from "./icons/grid.png";
import profile from "./icons/profileicon.png";
import google from "./icons/google.png";
import TextInputField from "./common/TextInputField";
import {data} from './mock-data'

class Homepage extends Component {

  onSubmit(e){
      e.preventDefault();
  }
  tee(e){
       console.log(this.props);
  }
  render() {
    return (
      <div>
        <div className="header">
          <ul>
            <li>
              <a
                href="https://gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gmail
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com.ng/imghp?hl=en&tab=wi&authuser=0&ogbl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Images
              </a>
            </li>
            <li>
              <span>
                <img src={grid} alt="grid.png" className="grid-img" />
              </span>
            </li>
            <li>
              <span>
                <img src={profile} alt="profile.png" className="profile-img" />
              </span>
            </li>
          </ul>
        </div>

        <div className="search-container">
          <div className="form-wrap">
            <img src={google} alt="google.png" className="google-img" />
            <form onSubmit={this.onSubmit.bind(this)}>
              <TextInputField
                suggestions={data}
                navigation={this.props}
              />
              <div className="form-group">
                <button type="submit" className="btn btn-secondary">
                  Google Search
                </button>
                <button type="submit" className="btn btn-secondary ml-2">
                  I'm Feeling Lucky
                </button>
              </div>
            </form>
            <div className="form-group">
              <p>
                Google offered in: <span className="lang-text">Hausa</span>
                <span className="lang-text">igbo</span>
                <span className="lang-text">Ede Yoruba</span>
                <span className="lang-text">Nigerian Pidgin</span>
              </p>
            </div>
          </div>
        </div>

        <div className="footer">
          <div style={{ fontSize: "16px" }}>Nigeria</div>
          <div>
            <span>Advertising</span>
            <span className="ml-2">Business</span>
            <span className="ml-2">About</span>
            <span className="ml-2">How Search Works</span>
            <span className="ml-overide">Settings</span>
            <span className="ml-overide1">Terms</span>
            <span className="ml-overide2">Privacy</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
