const Frame = require("../lib/frame");

describe("Roll Method", function () {
  test("returns a new frame when given a number (roll)", () => {
    var frame = new Frame();
    expect(frame.addRoll(6)).toEqual([6]);
  });

  test("Adds second roll to a frame", () => {
    var frame = new Frame();
    frame.addRoll(6);
    expect(frame.addRoll(3)).toEqual([6, 3]);
  });

  // these tests need to be extracted into a game class

  // test('Raises error when users enters a frame total > 10', () => {
  //   var frame = new Frame()
  //   frame.addRoll(6)
  //   expect(frame.addRoll(5)).toEqual({error: "You can only knock over ten pins"});
  // });

  // test('Raises error when users rolls for a third time', () => {
  //   var frame = new Frame()
  //   frame.addRoll(6)
  //   frame.addRoll(2)
  //   expect(frame.addRoll(1)).toEqual({error: "You cannot make three rolls"});
  // });

});

describe("Spare Method", function () {
  test("returns true when frame is a spare", () => {
    var frame = new Frame();
    frame.addRoll(6);
    frame.addRoll(4);
    expect(frame.isSpare()).toEqual(true);
  });
});

describe("Strike Method", function () {
  test("returns true when frame is a strike", () => {
    var frame = new Frame();
    frame.addRoll(10);
    expect(frame.isStrike(10)).toEqual(true);
  });
});
