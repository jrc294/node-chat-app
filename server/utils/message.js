var generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: new Date().getTime()
  }
};

var generateLocationMessage = (from, latitude, longitide) => {
  return {
    from,
    url: `https://www.google.com/maps?q=${latitude},${longitide}`,
    createdAt: new Date().getTime()
  }
};

module.exports = {generateMessage, generateLocationMessage};