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
      var spare = this.frames[frameNumber].spare;
        if (spare) {
            return 6;
        }
      return 0;
  }

  #sumOfArray(frame) {
    return frame.rolls.reduce((a, b) => a + b, 0);
  }
};
