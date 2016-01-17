var isBrowser = (typeof window !== 'undefined');
var clipboardText = null;

if (isBrowser) {
	document.addEventListener('copy', ev => {
		ev.preventDefault();
		ev.clipboardData.setData('text/plain', clipboardText);
		clipboardText = null;
	});
}

export function write(text) {
	if (isBrowser) {
		clipboardText = text;
		var success = document.execCommand('copy');
		if (!success) {
			console.warn('[clipboard-tool] Could not copy because the browser does not allow it.');
		}
	} else {
		console.warn('[clipboard-tool] Could not copy because this is running on the server.');
	}
}