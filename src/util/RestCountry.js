const url = "https://restcountries.eu/rest/v2/";
const generateRandIndex = (num) => {
  const arr = [];
  while (arr.length < 8) {
    let randNum = Math.floor(Math.random() * num);
    if (arr.indexOf(randNum) === -1) arr.push(randNum);
  }
  return arr;
};
const RestCountry = {
  async search () {
    try {
      const response = await fetch(`${url}all`);
      const jsonResponse = await response.json();
      if (jsonResponse) {
        const responseObj = jsonResponse.map((country) => ({
          id: country.alpha3Code,
          flag: country.flag,
          name: country.name,
          population: country.population,
          region: country.region,
          capital: country.capital,
        }));
        // const returnObj = [];
        // const indexArr = generateRandIndex(responseObj.length);
        // for (let i = 0; i < 8; i++) {
        //   returnObj.push(responseObj[indexArr[i]]);
        // }
        return responseObj;
      }
    } catch (error) {
      console.log(error);
    }
  },
  async searchCountry (name) {
    try {
      const response = await fetch(`${url}name/${name}`);
      const jsonResponse = await response.json();
      if (jsonResponse) {
        const responseObj = jsonResponse.map((country) => ({
          id: country.alpha3Code,
          flag: country.flag,
          name: country.name,
          population: country.population,
          region: country.region,
          capital: country.capital,
          nativeName: country.nativeName,
          topLevelDomain: country.topLevelDomain,
          currencies: country.currencies[0].name,
          languages: country.languages[0].name,
          subRegion: country.subregion,
          border: country.borders,
        }));
        // const returnObj = [];
        // for (let i = 0; i < Math.min(8, responseObj.length); i++) {
        //   returnObj.push(responseObj[i]);
        // }
        return responseObj;
      }
    } catch (error) {
      console.log(error);
    }
  },
  async searchRegion (region) {
    try {
      const response = await fetch(`${url}region/${region}`);
      const jsonResponse = await response.json();
      if (jsonResponse) {
        const responseObj = jsonResponse.map((country) => ({
          id: country.alpha3Code,
          flag: country.flag,
          name: country.name,
          population: country.population,
          region: country.region,
          capital: country.capital,
        }));
        // const returnObj = [];
        // const indexArr = generateRandIndex(responseObj.length);
        // for (let i = 0; i < 8; i++) {
        //   returnObj.push(responseObj[indexArr[i]]);
        // }
        return responseObj;
      }
    } catch (error) {
      console.log(error);
    }
  }
};
export default RestCountry;
