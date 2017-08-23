console.log("javascript_heritage (es5)");

function Personne(nom,age=0){
this.nom = nom;
this.age = age;
this.direBonjour = function (){
    console.log("Bonjour, mon nom est "+this.nom + " et mon age est " + age);
    };
}


var c1 = new Personne("personne1",30);
c1.direBonjour();
var c2 = new Personne("personne2");
c2.direBonjour();


function Employe(nom,age=0) { 
	    Personne.call(this, nom, age); //Heritage 
	    this.salaire = 0; 
		this.augmenter = function(enPlus){
		    this.salaire += enPlus;
		}
	}
	
Employe.prototype = Object.create(Personne.prototype, {
	constructor: { value: Employe, 
	               enumerable: false, 
				   writable: true, 
				   configurable: true } 
	});
	
var emp1 = new Employe("employe1", 35);
emp1.direBonjour();
emp1.salaire=2000;
emp1.augmenter(200);
console.log("salaire de emp1: " + emp1.salaire);

if(emp1 instanceof Personne)
	console.log("emp1 is a Personne");
if(emp1 instanceof Employe)
	console.log("emp1 is a Employe");
