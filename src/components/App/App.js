import logo from "../../logo.svg";
import "./App.scss";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import CountryList from "../CountryList/CountryList";
import RestCountry from "../../util/RestCountry";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import CountryDetail from "../CountryDetail/CountryDetail";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab, faArrowLeft, faMoon, faSun);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      isDark: true
    };
    this.setDarkMode = this.setDarkMode.bind(this);
    this.searchCountryByName = this.searchCountryByName.bind(this);
    this.searchCountryByRegion = this.searchCountryByRegion.bind(this);
  }

  setDarkMode () {
    this.setState({
      isDark: !this.state.isDark
    })
  }

  componentDidMount () {
    RestCountry.search().then((returnObject) => {
      this.setState({
        countries: returnObject
      });
    });
  }

  searchCountryByName (name) {
    RestCountry.searchCountry(name).then((country) => {
      this.setState({
        countries: country
      });
    });
  }

  searchCountryByRegion (region) {
    RestCountry.searchRegion(region).then((country) => {
      this.setState({
        countries: country
      });
    });
  };
  
  render () {
    return (
      <Router>
        <div className={this.state.isDark ? "App" : "App lm"}>
          <header className="header">
            <h2>Where in the world?</h2>
            <a href="#" className="dark-mode-switcher" onClick={this.setDarkMode}>
              {this.state.isDark ? <FontAwesomeIcon icon="moon" /> : <FontAwesomeIcon icon="sun" />} Dark Mode
            </a>
          </header>
          <Route path="/" exact>
            <SearchBar searchCountryByName={this.searchCountryByName} searchCountryByRegion={this.searchCountryByRegion} darkMode={this.state.isDark}/>
            <CountryList countries={this.state.countries} darkMode={this.state.isDark}/>
          </Route>
          <Route path="/:name" render={(props) => <CountryDetail {...props} darkMode={this.state.isDark}/>}>
          </Route>
        </div>
      </Router>
    )
  }
}

export default App;
