const Frame = require("../lib/index");

describe("Roll Method", function () {

  test('returns a new frame when given a number (roll)', () => {
    var frame = new Frame()
    expect(frame.addRoll(6)).toEqual([6]);
  });

  test('Adds second roll to a frame', () => {
    var frame = new Frame()
    frame.addRoll(6)
    expect(frame.addRoll(3)).toEqual([6,3]);
  });



});
