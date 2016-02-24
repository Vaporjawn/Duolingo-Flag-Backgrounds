// ==UserScript==
// @name         Duolingo Flag background
// @namespace   a34c0ac7aca179b6312214a6e1697b5a
// @description  Adds more duo to the website, so that it doesn't seem as boring when you're trying to maintain your streak!
// @author       Victor Williams
// @match        *://www.duolingo.com/*
// @grant        none
// @copyright    2016, Victor Williams
// @updateURL   https://monkeyguts.com/828.meta.js?c
// @downloadURL https://monkeyguts.com/828.user.js?c
//FEEL FREE TO ADD TO THIS IF YOU WANT 
//DUOLINGO NEEDS TO BE FUN
// ==/UserScript==
function doFlag(){
    var languagestring = duo.user.get("learning_language");
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
            // British Flag
            backgroundurl = "http://i.imgur.com/PhbibAE.jpg";
      break;
        case "ca":
            //Catalan Flag
            backgroundurl = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Catalonia.svg/2000px-Flag_of_Catalonia.svg.png";
      break;
        
            //Egyptian Flag
            backgroundurl = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/2000px-Flag_of_Egypt.svg.png";
      break;
        case "ro"
            //Romanian Flag
            backgroundurl = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/2000px-Flag_of_Romania.svg.png";
      break;
        case "vi"
            //Vietnamese Flag
            backgroundurl = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2000px-Flag_of_Vietnam.svg.png";
      break;
        case "zs"
            //Chinese Flag
            backgroundurl = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People's_Republic_of_China.svg/2000px-Flag_of_the_People's_Republic_of_China.svg.png";
      break;
        case "ko"
            //Korean Flag
            backgroundurl = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/2000px-Flag_of_South_Korea.svg.png";
      break;
        case "cs"
            //Czech Flag
            backgroundurl = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/2000px-Flag_of_the_Czech_Republic.svg.png";
      break; 
        case "hi"
            //Indian Flag
            backgroundurl = "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1350px-Flag_of_India.svg.png";
      break;
        case "th"
            //Thai Flag
            backgroundurl = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/2000px-Flag_of_Thailand.svg.png";
      break;
        case "tr"
            //Turkish Flag
            backgroundurl = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/2000px-Flag_of_Turkey.svg.png";
      break;
        case "id"
            //Indonesian Flag
            backgroundurl = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/2000px-Flag_of_Indonesia.svg.png";
      break;
        case "all"
            //All of the world flags
            backgroundurl = "http://imagesci.com/img/2013/23/world-flags-11854-hd-wallpapers.png";
      default:
      backgroundurl = "http://imagesci.com/img/2013/23/world-flags-11854-hd-wallpapers.png";
            break;
    }
    $("body").css("background", "url("+backgroundurl+")");
    $("body").css("background-size", "100%");
    $("body").css("background-repeat", "no-repeat");
    $("body").css("background-attachment", "fixed");
    $(".nav-footer").css("text-shadow", "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000");
    $(".nav-footer a").css("color", "white");
    //$("#app").css("background", "url('http://i.imgur.com/W6psVNL.png') no-repeat bottom center fixed");
}

function inject(f) { //Inject the script into the document
    var script;
    script = document.createElement('script');
    script.type = 'text/javascript';
    script.textContent = f.toString();
    document.head.appendChild(script);
}
console.log('Userscript loaded: Duolingo Flag Background');
function inject(f) { //Inject the script into the document
    var script;
    script = document.createElement('script');
    script.type = 'text/javascript';
    script.textContent = f.toString();
    document.head.appendChild(script);
}
inject(doFlag);
$(document).ready(function() {
 doFlag();
});
//Meh...
window.setInterval(function(){
       doFlag();
}, 1000);
