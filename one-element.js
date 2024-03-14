const url = "https://www.espncricinfo.com/series/women-s-premier-league-2023-24-1411373/mumbai-indians-women-vs-royal-challengers-bangalore-women-19th-match-1417734/live-cricket-score";
const request = require("request");
const cheerio = require("cheerio");
console.log("before");

request(url, cb);

function cb(error, response, html) {
    if (error) {
        console.error('error:', error);
    } else {
        extractHTML(html);
    }
}

function extractHTML(html) {
    let $ = cheerio.load(html); // Define $ by loading the HTML content into Cheerio

    // Now you can use $ to find elements
    let elementA = $(".ds-flex.ds-items-center.ds-min-w-0.ds-mr-1");  // Example selector
    // let htmlmumbai = $(elementA[0]).html();
    // console.log("html data", htmlmumbai);

    let textmumbai = $(elementA[0]).text();   // Fetch HTML data of the first element matching the selector
    console.log("Mumbai vs Vidarbha", textmumbai);



// wining teams 
// searching in full page : $
/// searching in element : find()
// Ramakanti
let teamtsArr = $(".match-info.match-info-MATCH .team");
for (let i = 0; i < teamtsArr.length; i++) {
    let hasClass = $(teamtsArr[i]).hasClass("team-gray");
    if (!hasClass) {
        let teamNameElem = $(teamtsArr[i]).find(".name");
        console.log(teamNameElem.text());
    }
}




}
