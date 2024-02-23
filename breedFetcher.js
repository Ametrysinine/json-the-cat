const request = require("request");
const args = process.argv.slice(2);
const catBreed = args[0];
const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + catBreed;

const fetch = function(url) {

  request(url, (error, response, body) => {
    setTimeout(() => {
      const textObj = JSON.parse(body);
      if (textObj.length === 0) { // If no results are returned
        console.log("Invalid breed name");
        return;
      }
      console.log(textObj[0].description);
    }, 1);
  });
};

fetch(url);