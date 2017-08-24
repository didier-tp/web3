function developperContracter(){
	var btnPlusMoins = 
	  document.getElementById("btnPlusMoins");  
    var divDetails = 
	   document.getElementById("divDetails");
	  
    if(btnPlusMoins.value=="+"){
		btnPlusMoins.value="-";
		divDetails.style.display="block";
	}else {
	   btnPlusMoins.value="+";
	   divDetails.style.display="none";
	}	 
}