(function () {
	var domtoimage = require('dom-to-image')
	var toImageButton = document.getElementById('to-image')
	var resultImgDiv = document.getElementById('result-image-div')

	function toImage() {
    		var options = {
        		quality: 0.95 
    		}

		var node = document.getElementById('result-content')
    		domtoimage.toPng(node, options).then(function (dataUrl) {
			var img = new Image()
			img.src = dataUrl
			resultImgDiv.appendChild(img)
    		})

	}


	toImageButton.onclick = toImage
})()
