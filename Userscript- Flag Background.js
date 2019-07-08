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

//HACKY HACK USE AS REFERENCE TO FIX ORIGINAL

/*
var uiLanguage = duo.uiLanguage;
var fromLanguage = userINFO.fromLanguage;
//var toLanguage = userINFO.toLanguage; y u no exist‽
//var languagestring = duo.user.get("learning_language");
//var loc = window.location.pathname;
*/
var languagestring = JSON.parse(localStorage.getItem('duo.state')).user.learningLanguage || JSON.parse(GM.getValue('duo.state')).user.learningLanguage || window.location.pathname.split("/").slice( 2, 3 ).join("/");

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
        case "ar":
            // Palestinian flag
            backgroundurl = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2bf3899e-48a5-412e-95c6-fe219464eb57/d1tf8um-7b09252c-3e17-4fb5-b1ce-42df4746bd34.jpg/v1/fill/w_900,h_598,q_75,strp/palestine_grungy_flag_by_think0_d1tf8um-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTk4IiwicGF0aCI6IlwvZlwvMmJmMzg5OWUtNDhhNS00MTJlLTk1YzYtZmUyMTk0NjRlYjU3XC9kMXRmOHVtLTdiMDkyNTJjLTNlMTctNGZiNS1iMWNlLTQyZGY0NzQ2YmQzNC5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.aKffWoBBoA82u3XGhq1CRo8-s2He0DRiXyxiJnskFNY";
            // Saudia Arabia
            backgroundurl = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2bf3899e-48a5-412e-95c6-fe219464eb57/d1tnilc-70340cf2-af27-45e3-a511-65230d6b770c.jpg/v1/fill/w_1095,h_730,q_70,strp/saudi_arabia_grungy_flag_by_think0_d1tnilc-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA2NyIsInBhdGgiOiJcL2ZcLzJiZjM4OTllLTQ4YTUtNDEyZS05NWM2LWZlMjE5NDY0ZWI1N1wvZDF0bmlsYy03MDM0MGNmMi1hZjI3LTQ1ZTMtYTUxMS02NTIzMGQ2Yjc3MGMuanBnIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.aDPFeNNYJPbwnKWN2eBhU2iw9T4nia0r5q7L4NZviBA";
			break;
        case "zh":
            // Chinese flag
            backgroundurl = "https://img13.deviantart.net/0a53/i/2009/026/e/2/people__s_republic_of_china_gf_by_think0.jpg";
			break;
        case "ko":
            // Korean flag
            backgroundurl = "https://pre00.deviantart.net/d168/th/pre/i/2009/041/d/b/south_korea_grunge_flag_by_think0.jpg";
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
GM_addStyle(".nav-footer{text-shadow:1px 1px 0 #FFF, -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF");
//GM_addStyle(".nav-footer a{color:white");
    //$("#app").css("background", "url('http://i.imgur.com/W6psVNL.png') no-repeat bottom center fixed");
    //
//write this in english
GM_addStyle("._1Zqmf{text-shadow:1px 1px 0 #FFF, -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF");
GM_addStyle("._38VWB{text-shadow:1px 1px 0 #FFF, -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF");
//beginner card
GM_addStyle(".a-Y8L{text-shadow:1px 1px 0 #FFF, -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF");
//footer
//GM_addStyle("._3GXmV, ._1sntG{background:none");
GM_addStyle("._3GXmV{background:none"); //_3uFh7 _3BtZs _1sntG
//mark all correct answers
GM_addStyle(".maOx8, ._2hYEZ{text-shadow:1px 1px 0 #FFF, -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF");

//nvm on this one, short flags don't fill to bottom
//home page underfooter with wide window: <div data-reactroot="">
GM_addStyle("body div div("+backgroundurl+");background-size:100%;background-repeat:no-repeat;background-attachment:fixed}")
//multiple select the word question text
GM_addStyle(".oR3Zt{text-shadow:1px 1px 0 #FFF, -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF");
//lesson complete ._26pCf / XP earned ._3jPAB / combo bonus _26pCf / XP _3jPAB
GM_addStyle("._1iUq9{text-shadow:1px 1px 0 #FFF, -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF");
