var moment = require('moment');

var generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: moment().valueOf()
  }
};

var generateLocationMessage = (from, latitude, longitide) => {
  return {
    from,
    url: `https://www.google.com/maps?q=${latitude},${longitide}`,
    createdAt: moment().valueOf()
  }
};

module.exports = {generateMessage, generateLocationMessage};