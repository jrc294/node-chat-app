var moment = require('moment');

var createdAt = 1234;
var date = moment(createdAt);
date = moment().valueOf();
// date.add(1, 'years');
// console.log(date.format('h:mm a'));
console.log(date);