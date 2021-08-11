var wowOpen = true ;

window.onload = function() {
	initializeBDDASSO() ;
	initializeBDDNEWS() ;

	intializeFiveBigNews() ;
	initializeAssoHomePage() ;
}

function modifyTxtBtnWow() {
	var tempTxt ;
	if (wowOpen) {
		tempTxt = "Ouvrir Intro" ;
		wowOpen = false ;
	}
	else {
		tempTxt = "Fermer Intro" ;
		wowOpen = true ;
	}
	$("#btnWow").empty() ;
	$("#btnWow").append(tempTxt) ;
}