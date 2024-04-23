const moment = require('moment');
let time2

function printHi() {
    console.log("HI");
    time2 = moment().unix();
    console.log(time2);
}

const time1 = moment().unix();
console.log(time1);
setTimeout(printHi, 3000);



//  console.log(time2 - time1);