function sendMessageToUWP() {
	if (window.chrome && window.chrome.webview) {
		if (window.top !== window) {
			// iframe içindeyiz
			window.top.postMessage({ fromGame: true, payload: "VungleRewarded" }, "*");
		} else if (window.chrome && window.chrome.webview) {
			// doğrudan WebView2 içindeyiz
			chrome.webview.postMessage("VungleRewarded");
		}
	} else {
		console.log("WebView2 ortamında değiliz, mesaj gönderilmedi.");
	}
}