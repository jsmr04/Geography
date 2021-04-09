
const GET_COUNTRIES_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries?offset=0&limit=10&namePrefix=c';
const GET_GEOAPI_URL = 'https://freegeoip.app/json/';

const CONTENT = 'application/json';
const API_KEY = '9dd11934d1mshbd8787e076e30dep155ed9jsn93a39e3b55e0'; 
const HOST = 'wft-geo-db.p.rapidapi.com';

const headers = {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": HOST,
    "Content-Type": CONTENT
  };

const getData = async (url, headers) => {
  try {
    let response = await fetch(url, {headers});

    if (response) {
        let json = await response.json();
        return json.data
    }
  } catch (e) {}
};

export const fetchCountries = async () => {
    return await getData(GET_COUNTRIES_URL, headers);
};

export const fetchRegions = async ({ country }) => {
    console.log("country ", country)
    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${country}/regions?limit=10&offset=0`
    return await getData(url, headers);
};

export const fetchCities = async ({country, region}) => {
    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${country}/regions/${region}/cities?limit=10&offset=0`;
    return await getData(url, headers);
};

export const fetchGeoIP = async () => {
    let response = await fetch("https://freegeoip.app/json/", { method:"GET" });
    if (response) {
        let json = await response.json();
        return json
    }
};