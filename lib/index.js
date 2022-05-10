module.exports = class Frame {

  constructor(){
    this.rolls = [];
  }


  addRoll(roll) {
    this.rolls.push(roll)
    return this.rolls
  }

};
