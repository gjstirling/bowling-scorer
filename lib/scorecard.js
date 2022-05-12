module.exports = class Scorecard {
  constructor() {
    this.frames = [];
    this.lastFrame = false;
  }

  addFrame(frame) {
    this.frames.push(frame);
    if (this.frames.length > 9) {
      this.lastFrame = true;
      return this.lastFrame;
    }
    else { 
      return frame;
    }
  }

  score() {
    var total = 0;
    this.frames.forEach((frame, i) => {
      var sum = this.#sumOfFrame(frame);
      var bonus = this.bonus(i);
      total += sum + bonus;
    });
    return total;
  }

  bonus(frameNumber) {
    if (this.frames[frameNumber + 1] === undefined) {
      return 0;
    }
    if (this.frames[frameNumber].strike && this.frames[frameNumber + 1].strike)
      return 20;
    if (this.frames[frameNumber].strike)
      return this.#sumOfFrame(this.frames[frameNumber + 1]);
    if (this.frames[frameNumber].spare)
      return this.frames[frameNumber + 1].rolls[0];
    return 0;
  }

  #sumOfFrame(frame) {
    return frame.rolls.reduce((a, b) => a + b, 0);
  }
};
