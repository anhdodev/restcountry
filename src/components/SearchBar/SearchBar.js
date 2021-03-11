import React from "react";
import './SearchBar.scss';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      region: ""
    };
    this.regions = {
      "Africa" : "africa",
      "Asia" : "asia",
      "Europe": "europe",
      "America": "americas",
      "Oceania": "oceania"
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  };

  handleOptionChange (event) {
    this.setState({
      region: event.target.value
    }, () => {
      this.props.searchCountryByRegion(this.state.region);
    })
  };

  handleTermChange (event) {
    if (event.key == 'Enter') {
      this.setState({
        country: event.target.value
      }, () => {
        this.props.searchCountryByName(this.state.country);
      });
    }
  };

  render() {
    return (
      <div className={this.props.darkMode ? "SearchBar" : "SearchBar lm"}>
        <input type="text" placeholder="Search for a country" onKeyPress={this.handleTermChange}/>
        <select value={this.state.region} onChange={this.handleOptionChange}>
          <option value="">Filter by Region</option>
          {this.renderSortByRegion()}
        </select>
      </div>
    );
  };

  renderSortByRegion () {
    return Object.keys(this.regions).map((region) => {
      let regionValue = this.regions[region];
      return <option key={regionValue} value={regionValue}>{region}</option>
    });
  };
}

export default SearchBar;
