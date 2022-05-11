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
      total += this.#sumOfArray(frame);
    });
    return total;
  }

  bonus(frameNumber) {
    var frame = this.frames[frameNumber];
    var nextFrame = this.frames[frameNumber + 1]
    if (frame.strike) {
      return this.#sumOfArray(nextFrame)
    }
    if (frame.spare) {
      return this.frames[frameNumber + 1].rolls[0];
    }
    return 0;
  }

  #sumOfArray(frame) {
    return frame.rolls.reduce((a, b) => a + b, 0);
  }
};
