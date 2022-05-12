const Scorecard = require("../lib/scorecard");

describe("addFrame Method", function () {
    
    test('Can store a frame', () => {
        var scorecard = new Scorecard()
        scorecard.addFrame("mock frame")
        expect(scorecard.addFrame("mock frame")).toEqual("mock frame");
    });

    test('Returns true when on last frame', () => {
        var scorecard = new Scorecard()
        for (let i = 0; i < 10; i++) {
            scorecard.addFrame("mock frame")
        }
        expect(scorecard.addFrame("mock frame")).toEqual(true);
    });
})

describe("score Method", function () {

    test('Returns the total score of one frame', () => {
        var scorecard = new Scorecard()
        scorecard.addFrame({rolls: [6,3]})
        expect(scorecard.score()).toEqual(9);
    });

    test('Returns the total score of frames with spare', () => {
        var scorecard = new Scorecard()
        scorecard.addFrame({rolls: [6,4], spare: true})
        scorecard.addFrame({rolls: [6,3], spare: false})
        expect(scorecard.score()).toEqual(25);
    })

    test('Returns the total score of frames with a strike', () => {
        var scorecard = new Scorecard()
        scorecard.addFrame({rolls: [10,0], spare: false, strike: true})
        scorecard.addFrame({rolls: [6,3], spare: false, strike: false})
        expect(scorecard.score()).toEqual(28);
    }) 

    test('Can calculate the perfect game', () => {
        var scorecard = new Scorecard()
        for (let i = 0; i < 9; i++) {
            scorecard.addFrame({rolls: [10,0], spare: false, strike: true})
        }
        scorecard.addFrame({rolls: [10,10,10], spare: false, strike: true})
        expect(scorecard.score()).toEqual(300);
    }) 

})

describe("Bonus Method", function () {

    test('Adds bonus score when current frame is a spare', () => {
        var scorecard = new Scorecard()
        scorecard.addFrame({rolls: [6,4], spare: true})
        scorecard.addFrame({rolls: [6,0], spare: false})
        expect(scorecard.bonus(0)).toEqual(6);
    });

    test('Returns zero if no bonus for frame', () => {
        var scorecard = new Scorecard()
        scorecard.addFrame({rolls: [6,3], spare: false})
        expect(scorecard.bonus(0)).toEqual(0);
    });

    test('Returns bonus when a strike is scored', () => {
        var scorecard = new Scorecard()
        scorecard.addFrame({rolls: [10,0], spare: true, strike: true})
        scorecard.addFrame({rolls: [6,3], spare: false, strike: false})
        expect(scorecard.bonus(0)).toEqual(9)
    })

    test('Returns bonus when a double is scored', () => {
        var scorecard = new Scorecard()
        scorecard.addFrame({rolls: [10,0], spare: false, strike: true})
        scorecard.addFrame({rolls: [10,0], spare: false, strike: true})
        scorecard.addFrame({rolls: [6,3], spare: false, strike: false})
        expect(scorecard.bonus(0)).toEqual(20)
    })

})

