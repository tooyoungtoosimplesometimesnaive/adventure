function createButton(text, onClickCallback) {
	var button = document.createElement('button')
	button.innerHTML = text
	button.onclick = onClickCallback
	return button
}
module.exports = createButton
