const axios = require ("axios");

function get (ulke) {
    axios.get("https://restcountries.eu/rest/v2/name/"+ulke)
.then (res => {
const ulke = res.data[0];
const baskent = ulke.capital;
const nufus = ulke.population;

console.log (`nufusu: ${nufus} başkent: ${baskent}`);

})
}

module.exports = get;