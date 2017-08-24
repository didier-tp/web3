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
		//prod = new Product();//si fonction constructeur
		// { id: 0 , nom : "?"} est
		//une expression littérale d'objet javascript
		//avec des valeurs par défaut
		//(très proche du format JSON)
		prod = { id : 0 ,
		         nom : "?",
				 prix : 0 ,
				 couleur : "black"};
	}
	prod.id = inputId.value;
	prod.nom = inputNom.value;
	//...
}

function logObject(obj){
	//console.log(obj.toString());
	for( indexPropriete in obj){
		console.log(obj[indexPropriete]);
	}
}

function ajouter(event){
 //alert("click sur " + event.target.value);
 lireValeursSaisies();
 logObject(prod);
}