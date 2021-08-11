var BDDNEWS = [] ;
var bigFive = [] ;
/*
Article (title, author, date, thumbnail, banner,  leadParagraph, text)
Date(year, month, day, hours, minutes, seconds, milliseconds)
*/

/***Danger : Attention au classement des articles dans la base de donnée***/

function initializeBDDNEWS() {
	var temp ;

	temp = new Article(
		"Offres d'emploi",
		"Rédacteur ÔCampus",
		new Date(2021, 5, 28),
		null,
		null,
		"Aujourd’hui, nous vous présentons de nouveau différentes offres d’emploi de job étudiants à pourvoir pour cet été ou la rentrée. 👌",
		"Bonjour à tous et à toutes 👋 Aujourd’hui, nous vous présentons de nouveau différentes offres d’emploi de job étudiants à pourvoir pour cet été ou la rentrée. 👌 Merci à Orléans Métropole qui récolte ces offres et nous fait confiance pour les relayer auprès des étudiants d’Orléans 😊 Pour toutes questions, contactez Anais, notre Vice-Présidente en charge de l’insertion professionnelle : ocampus.insertionpro@gmail.com Passez une bonne fin de journée, Votre équipe ÔCampus 💙",
		["Important"]) ;
	BDDNEWS[BDDNEWS.length] = temp ;
	temp = new Article(
		"Premier pas sur la Lune",
		"Valentin Z.",
		new Date(1969, 6, 21),
		null,
		null,
		"A une époque sans smartphone ni internet, trois hommes, guidé par les plus brillant esprit américain, soutnenu par cette puissante nation, vont repoussé les limites de l'humanité et marcher sur la Lune.",
		"Le 21 juillet 1969, Niel A. Armstrong fait un petit pas et touche le sol lunaire. Le 21 juillet 1969, l'humanité fait un grand pas avec deux représentant, Niel A. Armstrong et Buzz Aldrin, marchant sur la Lune.",
		["Faux"]) ;
	BDDNEWS[BDDNEWS.length] = temp ;
	temp = new Article (
		"Enquête étudiante vis-à-vis du Crous",
		"Rédacteur ÔCampus",
		new Date(2021, 5, 29),
		null,
		null,
		"Suite à cette année particulière, et tout comme l’année prochaine risque de l’être, nous souhaiterions avoir votre ressenti par rapport au 1er acteur de la vie étudiante : Le CROUS",
		"Bonjour à tous et à toutes 👋 Suite à cette année particulière, et tout comme l’année prochaine risque de l’être, nous souhaiterions avoir votre ressenti par rapport au 1er acteur de la vie étudiante : Le CROUS. Grâce aux sept thèmes (logement, restauration etc…) de cette enquête correspondant aux missions du CROUS, vos réponses permettront de mettre l'accent sur des points positifs ainsi que sur de possibles améliorations à mettre en place. Merci à tous de nous faire vos retours les plus sincères : https://forms.gle/ZAtpFvCtVZs6b3Cx5 Si vous souhaitez nous faire part de vos interrogations ou de vos remarques, n’hésitez pas à nous contacter sur nos réseaux, ou envoyer un mail à ocampus.defensedroitsetudiants@gmail.com  Passez une bonne fin de journée, Votre équipe ÔCampus 💙",
		["Important"]) ;
	BDDNEWS[BDDNEWS.length] = temp ;
	temp = new Article (
		"Intervention AGATE-ÔCampus sur FR3 CVdL",
		"Rédacteur ÔCampus",
		new Date(2021, 5, 30),
		null,
		null,
		"Lundi soir, un représentant des fédérations ÔCampus et AGATE - Association Générale des Assos Tourangelles Étudiantes a pu rencontrer François Bonneau (Président de la région CVL réélu) sur le plateau de France 3 CVL, émission spéciale élections 🗳 ",
		"Bonjour à tous et à toutes 👋 Lundi soir, un représentant des fédérations ÔCampus et AGATE - Association Générale des Assos Tourangelles Étudiantes a pu rencontrer François Bonneau (Président de la région CVL réélu) sur le plateau de France 3 CVL, émission spéciale élections 🗳 Il a été question de l’inclusion des jeunes dans les questions et le monde politique, en réaction notamment au taux d’abstention des jeunes lors de cette élection, concernant presque 85 % des jeunes. Vous pouvez retrouver la séquence plus en détail (a partir de 26:35) : ➡️ https://france3-regions.francetvinfo.fr/.../jt-1920-centre . Nous continuerons comme nous le faisons déjà depuis plusieurs mois, à travailler et communiquer avec la Région sur certains projets. Une contribution étudiante sera transmise dans les prochaines semaines pour faire part des évolutions qui pourraient être mises en place au sein de notre région. Passez une bonne soirée, Votre équipe ÔCampus 💙",
		["Important"]) ;
	BDDNEWS[BDDNEWS.length] = temp
	temp = new Article (
		"Newsletter de juin 2021",
		"Rédacteur ÔCampus",
		new Date(2021, 6, 6),
		null,
		null,
		"Voici la newsletter du mois de juin ! 🗞",
		"Bonjour à tous et à toutes 👋 Voici la newsletter du mois de juin ! 🗞 Vous trouverez tout ce qui s’est passé ce mois-ci et tous les projets en cours ! 🤩 Passez une bonne soirée, Votre équipe ÔCampus 💙",
		["Important", "Newsletter"]) ;
	BDDNEWS[BDDNEWS.length] = temp ;
	temp = new Article(
		"Informations estivales",
		"Rédacteur ÔCampus",
		new Date(2021, 6, 9),
		null,
		null,
		"Voici des informations concernant le CROUS et les bibliothèques universitaires orléanaises.",
		"Bonjour à tous et à toutes 👋 Voici des informations concernant le CROUS et les bibliothèques universitaires orléanaises. Passez une bonne soirée. Votre équipe ÔCampus 💙",
		["Important"]) ;
	BDDNEWS[BDDNEWS.length] = temp ;

	console.log(BDDNEWS) ;
}

function intializeFiveBigNews() {
	var selectedBigFive = 0 ;
	var stopLoopBigFive = false ;
	var iteLoopBigFive = BDDNEWS.length-1 ;
	var isImportant ;

	var tempTag ;
	var tempDate ;

	while (!stopLoopBigFive && selectedBigFive < 5 && iteLoopBigFive >= 0) {
		isImportant = false ;

		tempTag = BDDNEWS[iteLoopBigFive].tag

		for (var i = 0; i < tempTag.length; i++) {
			if(tempTag[i] == "Important"){isImportant = true ;}
		}

		if (isImportant) {
			bigFive[selectedBigFive] = BDDNEWS[iteLoopBigFive] ;
			++selectedBigFive ;
		}

		iteLoopBigFive-- ;
	}

	for (var i = 0; i < bigFive.length; i++) {
		//creaddBasicElement(type, id, cla, txt, img, idLocation) ;
		creaddBasicElement("div", "zoneNews"+i, "row bigNews", null, null, "bigNews"+i) ;
			creaddBasicElement("div", "zoneThumbnail"+i, "col-2 tCThumbnail", null, null, "zoneNews"+i) ;
			creaddBasicElement("div", "zoneTxt"+i, "col-10 bigNewsTxt", null, null, "zoneNews"+i)
				/*Row titre*/
				creaddBasicElement("div", "zoneNewsTitle"+i, "row", null, null, "zoneTxt"+i) ;
					/*Titre*/
					creaddBasicElement("div", "newsTitle"+i, "bigNewsTitle", bigFive[i].title, null, "zoneNewsTitle"+i) ;
				/*Row auteur & date*/
				creaddBasicElement("div", "zoneAuthorDate"+i, "row", null, null, "zoneTxt"+i) ;
					/*Auteur & date*/
					tempDate = dateToStringFR(bigFive[i].date) ;
					creaddBasicElement("div", "authorDate"+i, "newsAuthorDate", "Par "+bigFive[i].author+", publié le "+tempDate, null, "zoneAuthorDate"+i) ;
				/*Row leadParagraph*/
				creaddBasicElement("div", "zoneLeadPara"+i, "row", null, null, "zoneTxt"+i) ;
					/*leadParagraph*/
					creaddBasicElement("div", "leadPara"+i, "newsLeadPara", bigFive[i].leadParagraph, null, "zoneLeadPara"+i)
	}
}