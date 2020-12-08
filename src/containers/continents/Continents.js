import React from "react";
import Continent from "../../components/Continent/Continent";
import "./Continents.css";

class Continents extends React.Component {
  state = {
    continents: [],
  };

  componentDidMount() {
    fetch("https://countries.trevorblades.com/", {
      method: "POST",
      body: JSON.stringify({
        query: `
        query {
            continents {
              code
              name
            }
          }
        `,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => this.setState({ continents: result.data.continents }));
  }

  render() {
    return (
      <React.Fragment>
        <div className="continents">Continents</div>
        <div className="continents__container">
          {this.state.continents.map((each) => (
            <Continent
              continentCode={each.code}
              continentName={each.name}
              key={each.code}
              click={() => this.props.history.push("/" + each.code)}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Continents;
