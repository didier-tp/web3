function init(){
	var btnAdd = 
	  //document.getElementById("btnAdd"); 
	  document.querySelector("#btnAdd");
    btnAdd.style.fontWeight="bold";

    btnAdd.addEventListener("click",
	                        ajouter);
    	 
}

function ajouter(event){
	alert("click sur " + 
	       event.target.value);
}