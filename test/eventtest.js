/**
 * Created by bitcanny on 4/6/16.
 */

var Devices = require('../eventstub/devices.js');

var ZWC = require('.././zwc.js');

var zwc = new ZWC();



var expect = require('chai').expect;

var sinon = require('sinon');

var PassThrough = require('stream').PassThrough;

describe('Event mocking using sinon...', function () {

    var expected = { hello: 'world' };

    var response = new PassThrough();

    var devices,
        eventEmitterStub,
        eventOnStub,
        callbackSpy,
        clock;

    before(function () {
        devices = new  Devices(zwc, 9);
        //clock = sinon.useFakeTimers();
        eventEmitterStub = sinon.stub(devices, 'emit');
        eventOnStub = sinon.stub(devices, 'on');
        callbackSpy = sinon.spy();
    });

    it('should catch the event return and show value ', function () {

        //response.write(JSON.stringify(expected));
        //response.end();

        zwc.emit("unsolicited|9",{test : 'this is dummy test'});
        //devices.iotServiece();

        //expect(callbackSpy.called).equal(true);

        expect(eventEmitterStub.calledWithExactly('event_new', {test : 'this is dummy test'})).equal(true);

    });





     it('create event check return and show value ', function () {

     //response.write(JSON.stringify(expected));
     //response.end();

     //amziot.iotServiece();

     //amziot.zwc({node : 9, data : test});



     //expect(eventEmitterStub.calledWithExactly('event_new', {vanode : 9, data : test})).equal(true);



     });



    /*
     it('should emit an some_event', function(done){
        var errTimeout = setTimeout(function () {
            assert(false, 'Event never fired'); //or assert.fail, or whatever.
            done(); //I don't remember whether or not you still supposed to call done()
        }, 1000); //timeout with an error in one second

        myObj.on('some_event',function(){
            clearTimeout(errTimeout); //cancel error timeout
            assert(true);
            done();
        });
    });

     */




});






