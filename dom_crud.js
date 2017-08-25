//variables globales:
var inputNom;
var inputId;
var inputPrix;
var inputCouleur;
var idProdSelected;
var tabProduits;
var prod; //objet js "produit courant"
          //(à ajouter ou sélectionné)
		  
var listeProd =new Array(); //liste des produits (vide ou pas)		  



function init(){
 inputNom = document.getElementById("nom");
 inputId = document.getElementById("idProd");
 inputPrix = document.getElementById("prix");
 inputCouleur = document.getElementById("couleur");
 tabProduits = 
   document.getElementById("tabProduits");
   
	var btnAdd = 
	  //document.getElementById("btnAdd"); 
	  document.querySelector("#btnAdd");
    btnAdd.style.fontWeight="bold";

  btnAdd.addEventListener("click",ajouter);
    
  var btnDelete = 
	  document.getElementById("btnDelete");
   btnDelete.addEventListener("click",supprimer);	  
}
function supprimer(event){
	var trASuppr = 
	  document.getElementById("tr"+prod.id);
	 trASuppr.parentNode.removeChild(trASuppr);
}

function lireValeursSaisies(){
	/*if(!prod){
		prod = { id : 0 ,  nom : "?",
				 prix : 0 ,	 couleur : "black"};
	}*/
	prod.id = inputId.value;
	prod.nom = inputNom.value;
	prod.prix = inputPrix.value;
	prod.couleur = inputCouleur.value;
}

function testNoDuplicatedId(newId){
	var res=true;
	for(i in listeProd){
		if( listeProd[i].id == newId){
			res=false;
		}
	}
	return res;
}

function refreshImputFromCurrentProd(){
	for(i in listeProd){
		if( listeProd[i].id == idProdSelected){
			prod = listeProd[i];
		}
	}
	logObject(prod);
	inputId.value = prod.id ;
	inputNom.value = prod.nom;
	inputPrix.value = prod.prix ;
	inputCouleur.value = prod.couleur;
}

function logObject(obj){
	console.log(JSON.stringify(obj));
	/*for( indexPropriete in obj){
		console.log(obj[indexPropriete]);
	}*/
}

function Produit(){
	this.id=0;
	this.nom="?";
	this.prix=0;
	this.couleur="black";
}

function ajouter(event){
 //alert("click sur " + event.target.value);
 prod = new Produit();
 lireValeursSaisies();
 if(testNoDuplicatedId(prod.id)){
	listeProd.push(prod);//ajout dans liste en mémoire
	logObject(prod);
	ajouterLigneDansTableau();//ajout dans tab html
 }else {
	 alert("duplicated id !!!");
	 inputId.focus();
 }
}

function ajouterLigneDansTableau(){
//var newTr = document.createElement("tr");
//tabProduits.appendChild(newTr);
var newTr = tabProduits.insertRow(-1);
newTr.setAttribute("id","tr"+prod.id);
//var newTd1 = document.createElement("td");
//newTr.appendChild(newTd1);
var newTd1 = newTr.insertCell(0);
newTd1.innerHTML=prod.id;
newTd1.addEventListener("click",
    selectProdFromCurrentLine);
var newTd2 = newTr.insertCell(1);
newTd2.innerHTML=prod.nom;
var newTd3 = newTr.insertCell(2);
newTd3.innerHTML=prod.prix;
var newTd4 = newTr.insertCell(2);
newTd4.innerHTML=prod.couleur;
}

function selectProdFromCurrentLine(event){
	var trNodeList = tabProduits
	        .getElementsByTagName("tr");
	var nbLines = trNodeList.length;
	for(i=1;i<nbLines;i++){
		var tr = trNodeList.item(i);
		tr.querySelector("td").style.backgroundColor="white";
	}
	
	var currentTdForIdProd = event.target;
	idProdSelected=currentTdForIdProd.innerHTML;
	console.log("idProdSelected:"+idProdSelected);
	refreshImputFromCurrentProd();
	currentTdForIdProd.style.backgroundColor="lightblue";
}