var isBrowser = (typeof window !== 'undefined');
var clipboardText: string | undefined;

if (isBrowser) {
	document.addEventListener('copy', ev => {
		if (clipboardText == null || ev.clipboardData == null) {
			clipboardText = undefined;
			return;
		}
		ev.preventDefault();
		ev.clipboardData.setData('text/plain', clipboardText);
		clipboardText = undefined;
	});
}

export function write(text: string): void {
	if (!isBrowser) {
		console.warn('[clipboard-tool] Could not copy because this is running on the server.');
	}
	clipboardText = text;
	var success = document.execCommand('copy');
	if (!success) {
		console.warn('[clipboard-tool] Could not copy because the browser does not allow it.');
	}
}