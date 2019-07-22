const promisify = require("util").promisify;
const request = promisify(require("request"));

try {
  request.get(
    {
      url: "https://restcountries.eu/rest/v2/all?fields=name",
      headers: {
        "content-type": "application/json"
      }
    },
    (error, response, body) => {
      const data = JSON.parse(body);
      console.log(data);
      if (error) {
        console.log("error: ", error);
      }
      if (response) {
        // console.log("response: ", response);
      }
    }
  );
} catch (error) {
  console.error(error);
}
