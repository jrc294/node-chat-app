var expect = require('expect');
var {generateMessage} = require('./message');

describe("generateMessage", () => {
  it('should generate correct message object', () => {
    var res = generateMessage('Steve', 'Hello world');
    expect(res.from).toBe('Steve');
    expect(res.text).toBe('Hello world');
    expect(typeof res.createdAt).toBe('number');
  });
});