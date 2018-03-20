var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe("generateMessage", () => {
  it('should generate correct message object', () => {
    var res = generateMessage('Steve', 'Hello world');
    expect(res.from).toBe('Steve');
    expect(res.text).toBe('Hello world');
    expect(typeof res.createdAt).toBe('number');
  });
});

describe("generateLocationMessage", () => {
  it('should generate correct location object', () => {
    var from = 'Admin';
    var long = 1;
    var lat = 1;
    var url = `https://www.google.com/maps?q=${long},${lat}`;
    var res = generateLocationMessage(from, long, lat);
    expect(res.from).toBe(from);
    expect(res.url).toBe(url);
    expect(res.createdAt).toBeA('number');
  });
})