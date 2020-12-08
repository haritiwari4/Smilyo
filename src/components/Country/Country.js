import React from "react";
import "./Country.css";

export default class Country extends React.Component {
  render() {
    return (
      <div className="each__country">
        <div className="each__country--name">
          Name: <span>{this.props.name}</span>
        </div>
        <div className="each__country--phone">
          Phone: <span>{this.props.phone}</span>
        </div>
        <div className="each__country--native">
          Native: <span>{this.props.native}</span>
        </div>
        <div className="each__country--capital">
          Capital: <span>{this.props.capital}</span>
        </div>
        <div className="each__country--currency">
          Currency: <span>{this.props.currency}</span>
        </div>
      </div>
    );
  }
}
