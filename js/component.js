function createComponent(componentName, text, onClickCallback) {
	var c = document.createElement(componentName)
	c.innerHTML = text
	c.onclick = onClickCallback
	return c
}
module.exports = createComponent
