(function () {
	var domtoimage = require('dom-to-image')
	var toImageButton = document.getElementById('to-image')
	var resultImgDiv = document.getElementById('result-image-div')
	var poemText = document.getElementById('poem-text')

	function toImage() {
    		var options = {
        		quality: 0.95 
    		}

		var node = document.getElementById('poem-wrapper')
    		domtoimage.toPng(node, options).then(function (dataUrl) {
			var img = new Image()
			img.src = dataUrl
			resultImgDiv.appendChild(img)
    		}).catch(err => {
			console.log(error)
		})

	}


	toImageButton.onclick = toImage

	var sttsBtn = document.getElementById('stts')

	var isTraditional = true
	var xhr

	sttsBtn.onclick = makeRequest
	function makeRequest() {
		xhr = new XMLHttpRequest()
		xhr.open('POST', '/users/transform')
		xhr.setRequestHeader("Content-Type", "application/json")
		xhr.send(JSON.stringify({
			isT: isTraditional,
			text: poemText.innerText
		}))
		xhr.onreadystatechange = result
	}
	function result() {
		if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
			const response = JSON.parse(xhr.responseText)
			isTraditional = response.isT
			poemText.innerText = response.text
		}
	}
			
})()
