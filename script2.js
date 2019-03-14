var annee_saisie=window.prompt("veiller entre une annee");


function isannebixeltille (annee){

	verBex=annee%4;
	if (verBex==0) {
		 return document.write (annee+" est une année bissextile");
	}
	else{
		return document.write (annee+" n'est pas  une anne bissextile");
	}

}


isannebixeltille(annee_saisie);

