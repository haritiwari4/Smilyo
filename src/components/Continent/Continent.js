import React from "react";
import "./Continent.css";

export default class Continent extends React.Component {
  render() {
    return (
      <div className="each__continent" onClick={this.props.click}>
        <div className="each__continent--code">
          <span>{this.props.continentCode}</span>
        </div>
        <div className="each__continet--name">
          <span>{this.props.continentName}</span>
        </div>
      </div>
    );
  }
}
