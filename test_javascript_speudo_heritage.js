console.log("*************  PSEUDO HERITAGE (assez fragile) entre Dog et Animal ***************");

//Methode générique pour définir un "pseudo héritage" entre 2 "speudo classes" :
var extendClass = function(child, parent) {
    var Surrogate = function() {};    //surrogate est un mot anglais qui signifie "substitut" , "de substitution"
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate();
};

function Animal(){
	//this.constructor.prototype.color="black"; //not working (too early for accessing this.constructor ?)
}
Animal.prototype.name="no name";
Animal.prototype.color="black";

function Dog(type){
	this.type=type;
}
extendClass(Dog,Animal);
Dog.prototype.height="40"; // Après HERITAGE !!!



var d1 = new Dog("berger allemand");
console.log("d1.type=" + d1.type);
console.log("d1.name=" + d1.name);
console.log("d1.height=" + d1.height);
console.log("d1.color=" + d1.color);
if(d1 instanceof Dog)
	console.log("d1 is a Dog");
if(d1 instanceof Animal)
	console.log("d1 is a Animal");
