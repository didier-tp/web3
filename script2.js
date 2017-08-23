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