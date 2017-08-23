function operationAB(typeOp){
	var sa = document.getElementById("a").value;
	var sb = document.getElementById("b").value;
	var res = 0;
	if(typeOp=="addition"){
		res= Number(sa) + Number(sb);
	}else if(typeOp=="multiplication"){
		res= Number(sa) * Number(sb);
	}
	document.getElementById("idRes")
	        .innerHTML=res;
}


function afficherTexte(texte){
      //alert(texte);
	  console.log(texte);
	  document.getElementById("idMsg")
	          .innerHTML=texte;
	  //f2();
   }
//test temporaire:
function f2(){
	var v1="abc"; console.log("v1="+v1);
	v1=15; console.log("v1="+v1);
	v1=true; console.log("v1="+v1);
	v1="12";
	var v2="3.3";
	//var v3 = v1 +v2; //concatenation
	var v3 = Number(v1) + Number(v2); //+
	console.log("v3="+v3);
	
	console.log("a="+
	  document.getElementById("a").value);
}