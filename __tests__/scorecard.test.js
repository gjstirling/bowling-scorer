const Scorecard = require("../lib/scorecard");
const Frame = require('../lib/frame');
// jest.mock('./frame');

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

    test('cCan return score with Spare bonus', () => {
        var scorecard = new Scorecard()
        var frame = new Frame 
        frame.addRoll(6);
        frame.addRoll(4);
        var frame2 = new Frame
        frame.addRoll(6);
        frame.addRoll(0);
        scorecard.addFrame(frame)
        scorecard.addFrame(frame2)
        console.log(scorecard.frames)

    })

})