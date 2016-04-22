/**
 * Created by bitcanny on 4/1/16.
 */

var expect = require('chai').expect;

var LICclient = require('../licClient.js');


describe('LIC Client class test', function(){

    describe('constructor Test',function(){


        it('it should have a default name and age',function(){
            var lc = new LICclient();
            expect(lc.name).to.equal("Anney Max");
            expect(lc.age).to.equal(56);
        });

        it('it should have a new name and age',function(){
            var lc1 = new LICclient("Mohit",33);
            expect(lc1.name).to.equal("Mohit");
            expect(lc1.age).to.equal(33);

        });

    })

    describe('Class Fuction test',function(){

        it('it should report policy set error',function(){
            var lc3 = new LICclient();
            expect(lc3.setPolicy.bind(lc3, '')).to.throw('missing policy params');

        });

        it('it shoud  set polivy properly',function(){
            var lc4 = new LICclient();
            var exp = expect(lc4.setPolicy.bind(lc4,{name:'jevan seva',type:4})()).to.equal('set');
            var x = exp;
        });

    });

});




