// find the website data 

const request= require("request");
console.log ("before");
request('https://indianexpress.com/section/india/',cb);

console.log ("afte");
function cb ( error, response, html) {
    console.error('error:'.error);
    console.log('statuscode:',Response&&response.statuscode);
    console.log('html:',html);
}
