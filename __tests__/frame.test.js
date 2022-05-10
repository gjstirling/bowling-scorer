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

  test('Raises error when users enters a frame total > 10', () => {
    var frame = new Frame()
    frame.addRoll(6)
    expect(frame.addRoll(5)).toEqual({error: "You can only knock over ten pins"});
  });

  test('Raises error when users rolls for a third time', () => {
    var frame = new Frame()
    frame.addRoll(6)
    frame.addRoll(2)
    expect(frame.addRoll(1)).toEqual({error: "You cannot make three rolls"});
  });






});
