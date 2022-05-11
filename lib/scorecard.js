module.exports = class Frame {
  constructor() {
    this.frames = [];
  }

  addFrame(frame) {
    this.frames.push(frame);
    return frame;
  }

  score() {
    var total = 0;
    this.frames.forEach((frame, i) => {
      total += frame.rolls.reduce((a, b) => a + b, 0);
    });
    return total;
  }
};
