import React from "react";
import Country from "../../components/Country/Country.js";
import "./Countries.css";

export default class Countries extends React.Component {
  state = {
    countries: [],
    continentName: "",
    code: "",
  };

  componentDidMount() {
    let countryCode = null;
    countryCode = this.props.history.location.pathname.slice(1);
    try {
      fetch("https://countries.trevorblades.com/", {
        method: "POST",
        body: JSON.stringify({
          query: `
            query {
                continent(code: "${countryCode}") {
                  name
                  code
                  countries {
                    code
                    name
                    phone
                    native
                    capital
                    currency
                  }
                }
              }
            `,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result.data);
          this.setState({
            continentName: result.data.continent.name,
            countries: result.data.continent.countries,
            code: result.data.continent.code,
          });
          console.log(this.state);
        });
    } catch (err) {
      console.log("Some Error Occured");
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="continent__card">
          <div className="continent__card--code">
            Continent Code: <span>{this.state.code}</span>
          </div>
          <div className="continent__card--name">
            Continent Name: <span>{this.state.continentName}</span>
          </div>
        </div>
        <div className="country__list">
          {this.state.countries.map((each) => (
            <Country
              name={each.name}
              phone={each.phone}
              native={each.native}
              capital={each.capital}
              currency={each.currency}
              key={each.code}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}
