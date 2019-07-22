const axios = require("axios");

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.error(error);
  }

  return Promise.reject(error);
});

function getGov(id) {
  return axios.get("https://restcountries.eu/rest/v2/all?fields=name");
}

async function getGovAndPrint() {
  const res = await getGov("1");
  const countries = res.data;
  console.log(countries);
  return countries;
}

getGovAndPrint();
