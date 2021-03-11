import React from "react";
import RestCountry from "../../util/RestCountry";
import "./CountryDetail.scss";
import { BrowserRouter as Route, Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CountryDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null,
    };
  }

  componentDidMount() {
    const name = this.props.match.params.name;
    RestCountry.searchCountry(name).then((returnObject) => {
      this.setState({
        country: returnObject,
      });
    });
  }

  render() {
    if (!this.state.country) {
      return <h1>Loading</h1>;
    }
    const result = this.state.country[0];
    return (
      <div className={this.props.darkMode ? "CountryDetail" : "CountryDetail lm"}>
        <Link to="/" className="btn back-btn">
          <FontAwesomeIcon icon="arrow-left" />
          Back
        </Link>
        <div className="country__container">
        <div className="image__container">
          <img src={result.flag} alt="country-flag" />
        </div>
        <div className="country__stats__container">
          <h1>{result.name}</h1>
          <div className="country__stats">
            <div className="left-column">
              <p>
                <strong>Native Name: </strong>
                {result.nativeName}
              </p>
              <p>
                <strong>Population: </strong>
                {result.population}
              </p>
              <p>
                <strong>Region: </strong>
                {result.region}
              </p>
              <p>
                <strong>Sub Region: </strong>
                {result.subRegion}
              </p>
              <p>
                <strong>Capital: </strong>
                {result.capital}
              </p>
            </div>
            <div className="right-column">
              <p>
                <strong>Top Level Domain: </strong>
                {result.topLevelDomain}
              </p>
              <p>
                <strong>Currencies: </strong>
                {result.currencies}
              </p>
              <p>
                <strong>Languages: </strong>
                {result.languages}
              </p>
            </div>
          </div>
          <p>
            <strong>Border Countries: </strong>
            {result.border}
          </p>
        </div>
        </div>
      </div>
    );
  }
}

export default CountryDetail;
