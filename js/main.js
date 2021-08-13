var wowOpen = true ;
var isHomePage ;
var isContactPage = false;

window.onload = function() {
	if (document.title == "Accueil - ÔCampus")
	{
		isHomePage = true ;

		initializeBDDASSO() ;
		initializeBDDNEWS() ;

		initializeFiveBigNews() ;
		initializeAssoHomePage() ;
	}

	if (document.title == "Assos de la fédé - ÔCampus")
	{
		initializeBDDASSO() ;
		initializePage() ;
	}

	if (document.title =="Actualités - ÔCampus")
	{
		initializeBDDNEWS() ;

		initializeFiveBigNews() ;
		initializeNews() ;
	}

	if (document.title == "Contact - ÔCampus") {isContactPage = true}

	initializeFooter() ;
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

function initializeFooter() {
	var notHomeLink = "../" ;
	var tempLink ;

	//creaddBasicElement(type, id, cla, txt, img, idLocation)
	creaddBasicElement("div", "divFooter", null, null, null, "footerPage") ;
		creaddBasicElement("div", "divPlanContact", "row allCenterFlex", null, null, "divFooter") ;
			//creaddAElement (id, cla, link, txt, idLocation)
			creaddAElement(null, "footerLink internal white", "#", "Plan du site ", "divPlanContact") ;
			creaddBasicElement("div", null, "vertTextSeparator", null, null, "divPlanContact") ;
			//creaddTextNode(" | ", "divPlanContact") ;
			tempLink = "contact.html" ;
			console.log(isContactPage) ;
			if (!isHomePage && !isContactPage) {tempLink = notHomeLink+tempLink ;}
			creaddAElement(null, "footerLink internal white", tempLink, " Contact", "divPlanContact") ;
		creaddBasicElement("div", null, "row allCenterFlex", "©2021 ÔCampus Tous Droits réservés.", null, "divFooter") ;
		creaddBasicElement("div", null, "row allCenterFlex", "Informations légales | Mentions légales | Cookies", null, "divFooter") ;
}