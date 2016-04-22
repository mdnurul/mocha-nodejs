/**
 * Created by bitcanny on 4/1/16.
 */

var Client = function(name, age, MF){

    this.name = name || 'Anney Max';
    this.age = age || 56;
    this.gender = MF || 'Male';


}

Client.prototype.setPolicy = function(setPolicy){


    var policy= {
        name:'Jivan Anand',
        type: 2,
        falg: 'none'
    };

    if(!setPolicy){
        throw new Error("missing policy params");
    }else{
        policy.name = setPolicy.name;
        policy.type = setPolicy.type;
        policy.flag = 'set';
    }
    return policy.flag;

}

module.exports = Client;
