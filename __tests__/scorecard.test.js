const Scorecard = require("../lib/scorecard");
const Frame = require('../lib/frame');

describe("addFrame Method", function () {

    test('Can store a frame', () => {
        var scorecard = new Scorecard()
        var frame = new Frame 
        frame.addRoll(6);
        frame.addRoll(3);
        scorecard.addFrame(frame)
        expect(scorecard.addFrame(frame)).toEqual(frame);
    });
})

describe("score Method", function () {

    test('Returns the total score of one frame', () => {
        var scorecard = new Scorecard()
        var frame = new Frame 
        frame.addRoll(6);
        frame.addRoll(3);
        scorecard.addFrame(frame)
        expect(scorecard.score()).toEqual(9);
    });
})