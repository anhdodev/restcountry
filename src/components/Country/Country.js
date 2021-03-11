import React from 'react';
import './Country.scss';
import {Link} from 'react-router-dom';

class Country extends React.Component {
  render() {
    return (
      <Link to={`/${this.props.country.name}`} >
      <div className={this.props.darkMode ? "Country" : "Country lm"}>
        <div className="country-container">
        <img src={this.props.country.flag} alt="country-flag"/>
          <div className="stats-container">
            <h4>{this.props.country.name}</h4>
            <p><strong>Population</strong>: {this.props.country.population.toLocaleString()}</p>
            <p><strong>Region</strong>: {this.props.country.region}</p>
            <p><strong>Capital</strong>: {this.props.country.capital}</p>
          </div>
        </div>
      </div>
      </Link>
    )
  }
}

export default Country;