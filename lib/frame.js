module.exports = class Frame {
  constructor() {
    this.rolls = [];
  }

  addRoll(roll) {
    if (this.rolls.length === 2) {
      return {error: "You cannot make three rolls"}
    }
    const sum =
      this.rolls.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
      ) + roll;
    if (sum > 10) {
      return { error: "You can only knock over ten pins" };
    }
    this.rolls.push(roll);
    return this.rolls;
  }
};
