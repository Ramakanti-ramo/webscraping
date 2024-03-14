 const url = "https://www.espncricinfo.com/series/women-s-premier-league-2023-24-1411373/mumbai-indians-women-vs-royal-challengers-bangalore-women-19th-match-1417734/live-cricket-score";
const request = require ("request");
const cheerio = require ("cheerio");
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
    let $ = cheerio.load(html);
    let elementArr = $(".ds-text-compact-xxs");
    let text = $(elementArr[0]).text();   // fetch data in any element
    console.log("text data", text);
   
    let elementAr = $(".ci-nav-item.ci-nav-text"); 
    let text1 = $(elementAr[1]).text();
    let text2 = $(elementAr[2]).text();
   
    console.log("text html data", text1);
    console.log("text html1 data", text2);

// Ramakanti
    ////.ds-flex
    let elementA = $(".ds-flex.ds-space-x-5");  //Mumbai vs Vidarbha
    // let textmumbai = $(elementA[0]).text();    // fetch text data 
    let htmlmumbai = $(elementA[0]).html();     // fetch html data
    // console.log("Mumbai vs Vidarbha", textmumbai);
    console.log("html data ", htmlmumbai);
   
}

