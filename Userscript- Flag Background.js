// ==UserScript==
// @name New Script
// @namespace Violentmonkey Scripts
// @match        *://www.duolingo.com/*
// @match        https://www.duolingo.com/*
// @match        http://www.duolingo.com/*
// @match        https://www.duolingo.cn/*
// @match        http://www.duolingo.cn/*
// @grant        GM_addStyle
// ==/UserScript==
// 
;var loc = window.location.pathname;
var languagestring = window.location.pathname.split("/").slice( 2, 3 ).join("/");
//GM_addStyle("._3giip, ._3PBCS{background:url(http://i.imgur.com/RqTOULB.jpg);background-size:100%;background-repeat:no-repeat;background-attachment:fixed}")
	var backgroundurl = "notset";
    switch(languagestring){
        case "da":
            // Danish flag
            backgroundurl = "http://i.imgur.com/MVKImbX.jpg";
			break;
        case "sv":
            // Swedish flag
            backgroundurl = "http://i.imgur.com/VN547Ku.jpg";
			break;
        case "nb":
            // Norwegian flag
            backgroundurl = "http://i.imgur.com/GZSVizM.jpg";
			break;
        case "eo":
            // Esperanto flag
            backgroundurl = "http://i.imgur.com/RqTOULB.jpg";
			break;
        case "vi":
            // Vietnam flag
            backgroundurl = "http://i.imgur.com/8fF8Qz3.jpg";
			break;
        case "hu":
            // Hungarian flag
            backgroundurl = "http://i.imgur.com/AHl1KqM.jpg";
			break;
        case "tr":
            // Turkish flag
            backgroundurl = "http://i.imgur.com/diItxKa.jpg";
			break;
        case "ga":
            // Irish flag
            backgroundurl = "http://i.imgur.com/Dbi7nPR.jpg";
			break;
        case "fr":
            // French flag
            backgroundurl = "http://i.imgur.com/AUxfmNS.jpg";
			break;
        case "it":
            // Italian flag
            backgroundurl = "http://i.imgur.com/qOjj10n.jpg";
			break;
        case "de":
            // German flag
            backgroundurl = "http://i.imgur.com/KjM0RNL.jpg";
			break;
        case "dn":
            // Dutch flag
            backgroundurl = "http://i.imgur.com/ibQ5R2y.jpg";
			break;
        case "es":
            // Spanish flag
            backgroundurl = "http://i.imgur.com/Xdensoa.jpg";
			break;
        case "pt":
            // Brazil flag
            backgroundurl = "http://i.imgur.com/vGHMaiK.jpg";
			break;
        case "uk":
            // Ukraine flag
            backgroundurl = "http://i.imgur.com/NZQtpAa.jpg";
			break;
        case "pl":
            // Polish flag
            backgroundurl = "http://i.imgur.com/gJ0aMso.jpg";
			break;
        case "ru":
            // Russian flag
            backgroundurl = "hhttp://i.imgur.com/shKQqnR.jpg";
			break;
        case "el":
            // Greek flag
            backgroundurl = "http://i.imgur.com/QdWgibY.jpg";
			break;
        case "is":
            // Icelandic flag
            backgroundurl = "http://i.imgur.com/o8kcT4L.jpg";
			break;
        case "en":
            // American flag
            backgroundurl = "http://i.imgur.com/3KI66sY.jpg";
			break;
        default:
			backgroundurl = "http://i.imgur.com/3KI66sY.jpg";
            break;
    }
  GM_addStyle(".gr__duolingo_com, body, body:first-child, ._3MLiB, ._3giip, ._3PBCS{background:url("+backgroundurl+");background-size:100%;background-repeat:no-repeat;background-attachment:fixed}")
//GM_addStyle("._3giip, ._3PBCS{background:url(http://i.imgur.com/RqTOULB.jpg);background-size:100%;background-repeat:no-repeat;background-attachment:fixed}")
//
GM_addStyle(".nav-footer{text-shadow:1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000");
GM_addStyle(".nav-footer a{color:white");
    //$("#app").css("background", "url('http://i.imgur.com/W6psVNL.png') no-repeat bottom center fixed");
    //
//write this in english
GM_addStyle("._1Zqmf{text-shadow:1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000");
GM_addStyle("._38VWB{text-shadow:1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000");
//beginner card
GM_addStyle(".a-Y8L{text-shadow:1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000");
//footer
GM_addStyle("._3GXmV, ._1sntG{background:none");
//mark all correct answers
GM_addStyle(".maOx8, ._2hYEZ{text-shadow:1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000");
