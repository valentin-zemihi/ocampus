var BDDASSO = [] ;
var detailMode ;

window.onload = function() {
	var temp ;
	var tempImg ;

	for (var i = 1; i < 11; i++) {
		if (i==3) {tempImg = "../img/Logo_asso_map.svg" ;}
		else {tempImg = null ;}
		temp = new Association("Asso"+i, tempImg, i, "Lorem ipsum Asso"+i, null) ;
		BDDASSO[i-1] = temp ;
	}

	initializePage() ;
}

function initializePage() {
	var elementAddEvent ;

	detailMode = false ;

	cleanLogoTxtArea() ;

	document.getElementById("zoneAssoLogoTxt").className = "allCenter" ;

	for (var i = 0; i < BDDASSO.length; i++) {
		creaddButtonLogoAsso("logo"+BDDASSO[i].name, "btn btnAsso", BDDASSO[i].logo, BDDASSO[i].name, "zoneAssoLogoTxt") ;
	}
}

function detailAsso(idLogoAsso) {
	var temp ;

	if (!detailMode) {
		detailMode = true ;
		cleanLogoTxtArea() ;

		document.getElementById("zoneAssoLogoTxt").className = "row" ;

		creaddBasicElement("div", "zoneAssoLogo", "col-2 allCenter", null, "zoneAssoLogoTxt") ;
			for (var i = 0; i < BDDASSO.length; i++) {
				creaddButtonLogoAsso("logo"+BDDASSO[i].name, "btn btnAsso btnListe", BDDASSO[i].logo, BDDASSO[i].name, "zoneAssoLogo") ;
				if(idLogoAsso == "logo"+BDDASSO[i].name) {temp = i} ;
			}

		creaddBasicElement("div", "zoneAssoTxt", BDDASSO[temp].name+"Txt txtAsso col-10", null, "zoneAssoLogoTxt") ;
	}
	else {
		for (var i = 0; i < BDDASSO.length; i++) {
			if(idLogoAsso == "logo"+BDDASSO[i].name) {temp = i} ;
		}
		document.getElementById("zoneAssoTxt").innerHTML = "" ;
		document.getElementById("zoneAssoTxt").className = BDDASSO[temp].name+"Txt txtAsso col-10" ;
	}

		creaddBasicElement("h2", "assoName", "assoTitle", BDDASSO[temp].name, "zoneAssoTxt");
		creaddBasicElement("p", "assoPres", null, BDDASSO[temp].presentation, "zoneAssoTxt") ;

	creaddBasicElement("div", "zoneBtnClose", "allCenterFlex", null, "zoneAssoTxt") ;

	temp = document.createElement("button") ;
	temp.className = "btn-close" ;
	temp.addEventListener('click', initializePage, false) ;
	document.getElementById("zoneBtnClose").appendChild(temp) ;
}

function cleanLogoTxtArea() {
	document.getElementById("zoneAssoLogoTxt").innerHTML = "" ;
}

/*---Tools---*/

/**createAddHTMLBasicElement : crée et ajoute une élément html
* type : type d'élément HTML à créer
* id : id de l'élément HTML créé
* cla : class de l'élément HTML créé
* idLocation : id de l'élément HTML où ajouter le nouvelle élément HTML
*/
function creaddBasicElement(type, id, cla, txt, idLocation) {
	var tempTxt ;

	var element = document.createElement(type) ;

	if(id != null) {element.id = id ;}
	if(cla != null) {element.className = cla ;}
	if(txt != null) {
		tempTxt = document.createTextNode(txt) ;
		element.appendChild(tempTxt) ;
	}

	document.getElementById(idLocation).appendChild(element) ;
}

function creaddButtonLogoAsso(id, cla, img, txt, idLocation) {
	var tempTxt ;
	var tempImg ;
	var element = document.createElement("button") ;

	element.id = id ;
	element.className = cla ;
	if (img == null) {
		tempTxt = document.createTextNode(txt) ;
		element.appendChild(tempTxt) ;
	}
	else {
		tempImg = document.createElement("img") ;
		tempImg.src = img ;
		if (detailMode) {tempImg.className = "btnLogoAsso" ;}
		element.appendChild(tempImg) ;
	}
	element.addEventListener('click', function() {detailAsso(this.id) ;}, false) ;

	document.getElementById(idLocation).appendChild(element) ;
}