const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
  it ('should reject non-string values', (done) => {
    var ret = isRealString(1);
    expect(ret).toBe(false);
    done();
  });
  it ('should reject struing with only spaces', (done) => {
    var ret = isRealString('     ');
    expect(ret).toBe(false);
    done();
  });
  it ('should allow string with non-space characters', (done) => {
    var ret = isRealString('  abc123  ');
    expect(ret).toBe(true);
    done();
  });
})