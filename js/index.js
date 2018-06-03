var domtoimage = require('dom-to-image')
var createComponent = require('./component')

const toImageButton = document.getElementById('to-image')
const resultImgDiv = document.getElementById('result-image-div')
const poemText = document.getElementById('poem-text')
const poemTitle = document.getElementById('poem-title')
const toolbar = document.getElementById('toolbar')
const poemWrapper = document.getElementById('poem-wrapper')

let domToImageStyle = {
	color: '#060c08',
	fontFamily: 'Noto Sans TC',
	fontSize: '14px',
	padding: '5px 15px 5px 15px',
	borderRadius: '5px'
}

function toImage() {
	var options = {
		/*
        	quality: 0.95,
		bgcolor: '#efeed9',
		style: domToImageStyle
		*/
    	}

    	domtoimage.toPng(poemWrapper, options).then(function (dataUrl) {
		var img = new Image()
		img.src = dataUrl
		var anchor = createComponent('a')
		anchor.download = (poemTitle.innerHTML + '.png')
		anchor.href = dataUrl
		anchor.appendChild(img)

		resultImgDiv.appendChild(anchor)
    	}).catch(err => {
		console.log(err)
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
		text: poemText.innerText,
		title: poemTitle.innerText
	}))
	xhr.onreadystatechange = result
}

function result() {
	if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
		const response = JSON.parse(xhr.responseText)
		isTraditional = response.isT
		poemText.innerText = response.text
		poemTitle.innerText = response.title
	}
}



function createToolbar() {
	function fontSize(increase) {
		let size = 14
		if (poemText.style.fontSize != '') {
			size = +poemText.style.fontSize.substring(0, poemText.style.fontSize.indexOf('px'))
		}
		if (increase) {
			size += 2
		} else {
			size -= 2
			if (size < 8) {
				size = 8
			}
		}
		poemText.style.fontSize = size + 'px'
		domToImageStyle['fontSize'] = poemText.style.fontSize
	}
		
	const fontSizeIncreaseBtn = createComponent('button', '字体▲', () => {fontSize(true)})
	const fontSizeDecreaseBtn = createComponent('button', '字体▼', () => {fontSize(false)})
	toolbar.appendChild(fontSizeIncreaseBtn)
	toolbar.appendChild(fontSizeDecreaseBtn)
}
createToolbar()
