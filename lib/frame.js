module.exports = class Frame {
  constructor() {
    this.rolls = [];
    this.spare = false;
    this.strike = false;
  }

  addRoll(roll) {
    if (this.rolls.length === 2) {
      return { error: "You cannot make three rolls" };
    }
    const sum = this.rolls.reduce((a, b) => a + b, 0) + roll;
    if (sum > 10) {
      return { error: "You can only knock over ten pins" };
    }
    this.rolls.push(roll);
    return this.rolls;
  }

  isSpare() {
    const sum = this.rolls.reduce((a, b) => a + b, 0);
    this.spare = sum === 10;
    return this.spare;
  }

  isStrike() {
    this.strike = this.rolls[0] === 10;
    return this.strike;
  }

};
