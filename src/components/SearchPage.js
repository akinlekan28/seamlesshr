import React, { Component } from "react";
import logo from "./icons/google-sm.png";
import profile from "./icons/profileicon.png";
import grid from "./icons/grid.png";
import { Link } from "react-router-dom";
import { data } from "./mock-data";

export default class SearchPage extends Component {
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        <div className="search-header">
          <ul>
            <li>
              <Link to="/">
                <img src={logo} alt="logo.png" className="search-logo" />
              </Link>
            </li>
            <li>
              <input
                type="text"
                className="input-form1"
                name="term"
                value={this.props.match.params.term}
                onChange={this.onChange.bind(this)}
              />
              <span className="search1">
                <i className="fa fa-search"></i>
              </span>
              <span className="microphone1">
                <i className="fa fa-microphone"></i>
              </span>
            </li>
            <li className="grid-item">
              <span>
                <img src={grid} alt="grid.png" className="grid-img" />
              </span>
            </li>
            <li className="profile-item">
              <span>
                <img src={profile} alt="profile.png" className="profile-img" />
              </span>
            </li>
          </ul>
        </div>

        <div className="search-result">
          <h5 className="result-count">About 219,000 results (0.40 seconds)</h5>

          {data.map((link, index) => (
            <div className="result-pane" key={index}>
              <p className="breadcrumb">
                <a href={link.breadcrumb}>{link.breadcrumb}</a>
              </p>
              <p className="link">
                <a href={link.title}>{link.title}</a>
              </p>
              <p className="info">
                <span className="date">{link.date}</span> -{" "}
                <span className="text">{link.text}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
