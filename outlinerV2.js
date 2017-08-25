function init(){
	//ajouter le bouton "+/-" dans chaque outliner
	var listeOutlinerNode = document.querySelectorAll(".outliner");
	var nbOutliner = listeOutlinerNode.length;
	//console.log("nbOutliner:" + nbOutliner);
	for(i=0;i<listeOutlinerNode.length;i++){
		outliner = listeOutlinerNode.item(i);
		var nouveauBouton = document.createElement("input");
		nouveauBouton.setAttribute("type","button");
		nouveauBouton.setAttribute("value","-");
		var titre = outliner.querySelector(".titre");
		outliner.insertBefore(nouveauBouton,titre);
	    //enregistrer comportementEvenementiel:	
		nouveauBouton.addEventListener("click",developperContracterEnRelatif)
	}
	
}

function developperContracterEnRelatif(event){
	var btnPlusMoins = event.target;
	  document.getElementById("btnPlusMoins");  
    var divDetails = btnPlusMoins.parentNode.querySelector(".details");
	  
    if(btnPlusMoins.value=="+"){
		btnPlusMoins.value="-";
		divDetails.style.display="block";
	}else {
	   btnPlusMoins.value="+";
	   divDetails.style.display="none";
	}	 
}