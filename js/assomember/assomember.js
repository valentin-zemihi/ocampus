var BDDASSO = [] ;
var detailMode ;

function initializeBDDASSO() {
	var temp ;
	var tempImg ;

	for (var i = 1; i < 11; i++) {
		if (i==3) {tempImg = "img/Logo_asso_map.svg" ;}
		else {tempImg = null ;}
		temp = new Association("Asso"+i, tempImg, i, "Lorem ipsum Asso"+i, null) ;
		BDDASSO[i-1] = temp ;
	}
}

function initializeAssoHomePage() {
	for (var i = 0; i < BDDASSO.length; i++) {
		creaddBasicElement("div", "logo"+BDDASSO[i].name, "btn btnAsso", null, BDDASSO[i].logo, "zoneHomeAsso") ;
	}
}

function initializePage() {
	var elementAddEvent ;

	detailMode = false ;

	cleanLogoTxtArea() ;

	document.getElementById("zoneAssoLogoTxt").className = "allCenter" ;

	for (var i = 0; i < BDDASSO.length; i++) {
		creaddButtonLogoAsso("logo"+BDDASSO[i].name, "btn btnAsso", "../"+BDDASSO[i].logo, BDDASSO[i].name, "zoneAssoLogoTxt") ;
	}
}

function detailAsso(idLogoAsso) {
	var temp ;

	if (!detailMode) {
		detailMode = true ;
		cleanLogoTxtArea() ;

		document.getElementById("zoneAssoLogoTxt").className = "row" ;

		creaddBasicElement("div", "zoneAssoLogo", "col-2 allCenter", null, null, "zoneAssoLogoTxt") ;
			for (var i = 0; i < BDDASSO.length; i++) {
				creaddButtonLogoAsso("logo"+BDDASSO[i].name, "btn btnAsso btnListe", "../"+BDDASSO[i].logo, BDDASSO[i].name, "zoneAssoLogo") ;
				if(idLogoAsso == "logo"+BDDASSO[i].name) {temp = i} ;
			}

		creaddBasicElement("div", "zoneAssoTxt", BDDASSO[temp].name+"Txt txtAsso col-10", null, null, "zoneAssoLogoTxt") ;
	}
	else {
		for (var i = 0; i < BDDASSO.length; i++) {
			if(idLogoAsso == "logo"+BDDASSO[i].name) {temp = i} ;
		}
		document.getElementById("zoneAssoTxt").innerHTML = "" ;
		document.getElementById("zoneAssoTxt").className = BDDASSO[temp].name+"Txt txtAsso col-10" ;
	}

		creaddBasicElement("h2", "assoName", "assoName", BDDASSO[temp].name, null, "zoneAssoTxt");
		creaddBasicElement("p", "assoPres", null, BDDASSO[temp].presentation, null, "zoneAssoTxt") ;

	creaddBasicElement("div", "zoneBtnClose", "allCenterFlex", null, null, "zoneAssoTxt") ;

	temp = document.createElement("button") ;
	temp.className = "btn-close" ;
	temp.addEventListener('click', initializePage, false) ;
	document.getElementById("zoneBtnClose").appendChild(temp) ;
}

function cleanLogoTxtArea() {
	document.getElementById("zoneAssoLogoTxt").innerHTML = "" ;
}