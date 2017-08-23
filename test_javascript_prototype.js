console.log("javascript_prototype");

function Client(name){
this.name =name;
this.direBonjour = methDireBonjour;
this.showInternal = methShowInternal;
}

Client.prototype.address="1, rue elle"; //as static default address
Client.prototype.country="France"; //as static default country
//Client.prototype.liveIn = function(otherContry) { Client.prototype.country = otherContry; } //change static default property
Client.prototype.liveIn = function(otherContry) { this.country = otherContry; } //change property

function methDireBonjour(){
    console.log("Bonjour, mon nom est "+this.name);
	console.log("my address is "+this.address);
	console.log("my country is "+this.country);
};

function methShowInternal(){
console.log("this.constructor.toString()=" + this.constructor.toString());
console.log("this.constructor.prototype.address=" + this.constructor.prototype.address);
console.log("this.constructor.prototype.country=" + this.constructor.prototype.country);
};

var c1 = new Client("c1");
//c1.direBonjour();
c1.liveIn("USA");
//c1.country="United State of america";


var c2 = new Client("c2");
//c2.direBonjour();
c2.liveIn("UK");



c1.direBonjour();
c2.direBonjour();
/*
console.log(c1.constructor.toString());
console.log(c1.constructor.prototype.address);
console.log(c1.constructor.prototype.country);
*/
c1.showInternal();
