const Frame = require("./index");

describe("Roll Method", function () {

  test('returns a new frame when given a number (roll)', () => {
    var frame = new Frame
    expect(frame.addRoll(6)).toEqual([6,0]);
    expect(true).toEqual(true)
  });

});
