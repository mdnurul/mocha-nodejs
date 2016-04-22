/**
 * Created by bitcanny on 1/29/16.
 */

const eventEmitter = require('events').EventEmitter;
const util = require('util');

var self;


var Devices = function(zwcient, node){

    self = this;
    var selfInternal = this;
    //eventEmitter.call(this);
    //
    this.zwc = zwcient;
    this.node = node;

    this.zwc.on("unsolicited|9",function(unSolicitedMsg){
        test(selfInternal, unSolicitedMsg);
    })
};

util.inherits(Devices, eventEmitter);


Devices.prototype.iotServiece = function(){

    //console.log('IOT service has been called !');
    this.emit('event',{value: 'hello there'});
};

//setTimeout(function(){this.emit('event',{value: 'hello there'});},5000);

function test( self, data){

    self.emit('event_new',data);

    console.log("event_new data:",data);

};

Devices.prototype.changeStatus = function(){

    //console.log('IOT service has been called !');
    this.emit('event',{value: 'hello there'});
};


module.exports = Devices;
