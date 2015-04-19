var isBrowser = (typeof window !== 'undefined');
var prefix = "[clipboard-tool] ";
var clipboardText;

if (isBrowser) {
	document.addEventListener('copy', ev => {
		ev.preventDefault();
		ev.clipboardData.setData('text/plain', clipboardText);
		clipboardText = undefined;
	});
}

export function write(text) {
	if (isBrowser) {
		clipboardText = text;
		var success = document.execCommand('copy');
		if (!success) {
			console.warn(prefix + "Couldn't copy because the browser doesn't allow it.");
		}
	} else {
		console.warn(prefix + "Couldn't copy because this is running on the server.");
	}
}