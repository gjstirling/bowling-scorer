const Scorecard = require("../lib/scorecard");
const Frame = require('../lib/frame');

describe("addFrame Method", function () {
    
    test('Can store a frame', () => {
        var scorecard = new Scorecard()
        scorecard.addFrame("mock frame")
        expect(scorecard.addFrame("mock frame")).toEqual("mock frame");
    });
})

describe("score Method", function () {

    test('Returns the total score of one frame', () => {
        var scorecard = new Scorecard()
        scorecard.addFrame({rolls: [6,3]})
        expect(scorecard.score()).toEqual(9);
    });

})

describe("Bonus Method", function () {

    test('Adds bonus score when current frame is a spare', () => {
        var scorecard = new Scorecard()
        scorecard.addFrame({rolls: [6,4]})
        scorecard.addFrame({rolls: [6,0]})
        expect(scorecard.bonus(0)).toEqual(6);
    });

    test('Returns zero if no bonus for frame', () => {
        var scorecard = new Scorecard()
        scorecard.addFrame({rolls: [6,3]})
        expect(scorecard.bonus(0)).toEqual(0);
    });

})

