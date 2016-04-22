/**
 * Created by bitcanny on 4/6/16.
 */



var self;

var EventEmitter = require("events").EventEmitter;

//var eventEmitter = new EventEmitter();

var ZWController = function (){
    self = this;
};

ZWController.prototype.__proto__ = EventEmitter.prototype;

module.exports = ZWController;
