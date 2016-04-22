/**
 * Created by bitcanny on 4/5/16.
 */

var expect = require('chai').expect;

sinon = require('sinon');

var Calculator = require('../calculator');

describe('When adding one and two using the calculator', function () {
    var calculator;

    before(function () {
        calculator = new Calculator();
    });

    it('should result in three using the return style approach', function () {
        var result = calculator.add(1, 2);
        expect(result).equal(3);
    });

    it('should result in minus two the callback approach', function (done) {
        calculator.substract(6, 8, function(result) {
            expect(result).equal(-2);
            done();
        });
    });

    describe('When multiplying nine and three using the calculator', function () {

        var calculator,
            eventEmitterStub,
            callbackSpy,
            clock;

        before(function () {
            calculator = new Calculator();
            clock = sinon.useFakeTimers();
            eventEmitterStub = sinon.stub(calculator, 'emit');
            callbackSpy = sinon.spy();
        });

        it('should emit the event before the callback', function (done) {
            calculator.multiply(9, 3, callbackSpy);
            clock.tick(1000);
            expect(callbackSpy.called).equal(true);
            //assert.equal(callbackSpy.called, true);
            expect(eventEmitterStub.calledWithExactly('result', 27)).equal(true);
            //assert.equal(eventEmitterStub.calledWithExactly('result', 27), true);
            expect(eventEmitterStub.calledBefore(callbackSpy)).equal(true);
            //assert.equal(eventEmitterStub.calledBefore(callbackSpy), true);
            done();
        });

        after(function () {
            clock.restore();
        });

    });



});
