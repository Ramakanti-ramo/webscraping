const axios = require("axios");
const cheerio = require("cheerio");

const url = "https://www.imdb.com/list/ls000870148/";
/// get the all movie title and rating 
axios.get(url)
  .then(response => {
    const $ = cheerio.load(response.data);
    $(".lister-item-content").each(function() {
      const title = $(this).find(".lister-item-header a").text().trim();
      const rating = $(this).find(".ipl-rating-star__rating").text().trim();
      console.log(`Title: ${title}, Rating: ${rating}`);
    });
  })
  .catch(error => {
    console.log("Error fetching or parsing data:", error);
  });



// let movies =[];
// axios.get(url)
//   .then(response => {
//     let $ = cheerio.load(response.data);
//     $('.lister-list tr').each(function(el , ) {
//       let url = $(this).find('.lister-item-header a').attr('href');
//       let title = $(this).find('.lister-item-header a').text();
//       let rating = $(this).find('.ipl-rating-star__rating').text();
//       movies.push({ url: url, title: title, rating: rating });
//     });
//     console.log(movies);
//   })
//   .catch(error => {
//     console.log("Error fetching data:", error);
//   });
