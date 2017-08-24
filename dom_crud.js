//variables globales:
var inputNom;
var inputId;
var idProdSelected;
var tabProduits;
var prod; //objet js "produit courant"
          //(à ajouter ou sélectionné)
		  
var listeProd =new Array(); //liste des produits (vide ou pas)		  

function init(){
 inputNom = document.getElementById("nom");
 inputId = document.getElementById("idProd");
 //...
 tabProduits = 
   document.getElementById("tabProduits");
   
	var btnAdd = 
	  //document.getElementById("btnAdd"); 
	  document.querySelector("#btnAdd");
    btnAdd.style.fontWeight="bold";

  btnAdd.addEventListener("click",ajouter);
    	 
}

function lireValeursSaisies(){
	if(!prod){
		prod = { id : 0 ,  nom : "?",
				 prix : 0 ,	 couleur : "black"};
	}
	prod.id = inputId.value;
	prod.nom = inputNom.value;	//...
}
function logObject(obj){
	for( indexPropriete in obj){
		console.log(obj[indexPropriete]);
	}
}
function ajouter(event){
 //alert("click sur " + event.target.value);
 lireValeursSaisies();
 listeProd.push(prod);//ajout dans liste en mémoire
 logObject(prod);
 ajouterLigneDansTableau();//ajout dans tab html
}

function ajouterLigneDansTableau(){
var newTr = document.createElement("tr");
tabProduits.appendChild(newTr);
var newTd1 = document.createElement("td");
newTr.appendChild(newTd1);
newTd1.innerHTML=prod.id;
newTd1.addEventListener("click",
    selectProdFromCurrentLine);
//etc , etc
var newTd2 = document.createElement("td");
newTr.appendChild(newTd2);
newTd2.innerHTML=prod.nom;


}

function selectProdFromCurrentLine(event){
	var trNodeList = tabProduits
	        .getElementsByTagName("tr");
	var nbLines = trNodeList.length;
	for(i=0;i<nbLines;i++){
		var tr = trNodeList.item(i);
		tr.firstChild.style.backgroundColor="white";
	}
	var currentTdForIdProd = event.target;
	idProdSelected=currentTdForIdProd.innerHTML;
	console.log("idProdSelected:"+idProdSelected);
	currentTdForIdProd.style.backgroundColor="blue";
}