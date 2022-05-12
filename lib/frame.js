module.exports = class Frame {
  constructor(finalFrame) {
    this.rolls = [];
    this.spare = false;
    this.strike = false;
  }

  addRoll(roll) {
    this.rolls.push(roll);
    this.isStrike(roll);
    return this.rolls;
  }

  isStrike(roll) {
    if (roll === 10) {
      return true;
    }
    this.isSpare();
  }

  isSpare() {
    const sum = this.rolls.reduce((a, b) => a + b, 0);
    this.spare = (sum === 10);
    return this.spare;
  }
};

// if (this.rolls.length === 2) {
    //   return { error: "You cannot make three rolls" };
    // }
    // const sum = this.rolls.reduce((a, b) => a + b, 0) + roll;
    // if (sum > 10) {
    //   return { error: "You can only knock over ten pins" };
    // }
