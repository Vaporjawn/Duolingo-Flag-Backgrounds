chrome.browserAction.onClicked.addListener(function(tab){
	console.log("Duolingo Flag Backgrounds")
	chrome.tabs.executeScript(null, {
		file: "Userscript- Flag Background.js"
	});
});