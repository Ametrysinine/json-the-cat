const request = require("request");

const fetchBreedDescription = function(catBreed, callback) {
  const urlStart = 'https://api.thecatapi.com/v1/breeds/search?q=';
  const url = urlStart + catBreed;

  request(url, (error, response, body) => {
    setTimeout(() => {
      const textObj = JSON.parse(body);
      let description = "Error: Invalid query";
      if (error) {
        return callback(error, description);
      }
      if (textObj.length !== 0) {
        description = textObj[0].description;
      }

      return callback(error, description);
    }, 1);
  });
};

module.exports = { fetchBreedDescription };