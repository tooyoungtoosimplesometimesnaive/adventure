function createComponent(componentName, text, onClickCallback) {
	var c = document.createElement(componentName)
	if (text) {
		c.innerHTML = text
	}
	c.onclick = onClickCallback
	return c
}
module.exports = createComponent
