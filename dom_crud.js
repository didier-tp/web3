//variables globales:
var inputNom;
var inputId;
//...
var tabProduits;
var prod; //objet js "produit courant"
          //(à ajouter ou sélectionné)

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
 logObject(prod);
 ajouterLigneDansTableau();
}

function ajouterLigneDansTableau(){
var newTr = document.createElement("tr");
tabProduits.appendChild(newTr);
var newTd1 = document.createElement("td");
newTr.appendChild(newTd1);
newTd1.innerHTML=prod.id;
//etc , etc
}