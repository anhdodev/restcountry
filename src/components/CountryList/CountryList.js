import React from 'react';
import './CountryList.scss';
import Country from '../Country/Country';

class CountryList extends React.Component {
  render() {
    return(
      <div className="CountryList">
        {this.props.countries.map((country) => {
          return <Country key={country.id} country={country} darkMode={this.props.darkMode}/>
        })}
      </div>
    )
  }
}

export default CountryList;