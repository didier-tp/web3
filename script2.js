//methode à rattacher à "Personne"
function affPers(){
	var ch= "nom="   +this.nom 
	         + " prenom=" +this.prenom
			 + " age=" +this.age;
	console.log(ch);
	document.write(ch + "<br/>");
}

//fonction constructeur de "Personne":
function Personne(nom,prenom,age){
	this.nom=nom;
	this.prenom=prenom;
	this.age=age;
	this.afficher=affPers;
	this.incrAge= function (){
		//this.age = this.age + 1;
		this.age++;
	}
}


var resultatSimuAjax; //variable globale 

function simulerAppelAjax(requete,callback){
	console.log("requete:"+requete);
	if(requete=="jourDeLaSemaine"){
		window.setTimeout(
		"resultatSimuAjax='mercredi'",2900);
	}
	window.setTimeout(callback,3000);//3000ms=3s
}

function addInArray(tab,elt){
	//tab[tab.length]=elt;
	tab.push(elt);
}