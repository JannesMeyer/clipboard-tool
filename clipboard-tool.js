var isBrowser = (typeof window !== 'undefined');
var clipboardText;

if (isBrowser) {
	document.addEventListener('copy', ev => {
		ev.preventDefault();
		ev.clipboardData.setData('text/plain', clipboardText);
		clipboardText = undefined;
	});
}

export function write(text) {
	if (!isBrowser) {
		return;
	}
	clipboardText = text;
	document.execCommand('copy');
}