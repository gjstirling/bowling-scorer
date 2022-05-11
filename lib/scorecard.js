module.exports = class Scorecard {
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
      var sum = this.#sumOfArray(frame);
      var bonus = this.bonus(i);
      total += (sum + bonus);
    });
    return total;
  }

  bonus(frameNumber) {
    if (this.frames[frameNumber].strike) return this.#sumOfArray(this.frames[frameNumber + 1]);
    if (this.frames[frameNumber].spare) return this.frames[frameNumber + 1].rolls[0];
    return 0;
  }

  #sumOfArray(frame) {
    return frame.rolls.reduce((a, b) => a + b, 0);
  }
};
