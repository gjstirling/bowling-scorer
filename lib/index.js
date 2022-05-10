module.exports = class Frame {

  constructor(){
    this.rolls = [];
  }


  addRoll(roll) {
   
    this.rolls.push(roll)
    if (this.rolls.length == 1) {
      this.rolls.push(0)
    }
    return this.rolls
  }

};
