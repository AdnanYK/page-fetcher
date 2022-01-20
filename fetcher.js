const URL = process.argv[2];
const Path = process.argv[3];

// URL = 'http://www.example.edu/'
// PAth = './index.html'


const request = require('request');
const fs = require('fs')

request(URL, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  

  fs.writeFile(Path, body, err => {
    if (err) {
      console.error(err)
      return
    }
  //file written successfully
    fs.stat(Path, (err, stats) => {
      if (err) {
          console.log(`File doesn't exist.`);
      } else {
          // console.log(stats.size);
          console.log(`Downloaded and saved ${stats.size} bytes to ${Path}`);
      }
    });
  })
});



