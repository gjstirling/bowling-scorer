const Frame = require("../lib/index");

describe("Roll Method", function () {

  test('returns a new frame when given a number (roll)', () => {
    var frame = new Frame
    expect(frame.addRoll(6)).toEqual([6,0]);
    expect(true).toEqual(true)
  });

  test('returns a frame with next roll added (roll)', () => {
    var frame = new Frame
    frame.addRoll(6)
    frame.addRoll(3)
    expect(frame.addRoll(6)).toEqual([6,3]);
  });



});
