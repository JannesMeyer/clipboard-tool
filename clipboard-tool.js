var textToCopy;

document.addEventListener('copy', ev => {
	ev.preventDefault();
	ev.clipboardData.setData('text/plain', textToCopy);
	textToCopy = undefined;
});

export function write(text) {
	textToCopy = text;
	document.execCommand('copy');
}