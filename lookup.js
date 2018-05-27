const get = require('got')
const URL = require('url')
const cheerio = require('cheerio')

async function lookup (query) {
	query = encodeURIComponent(query)
	const url = URL.format({
		protocol: 'https',
		hostname: 'zh.wikisource.org',
		pathname: `/zh/${query}`
	})

	let body
	try {
		const res = await get(url)
		body = res.body
	} catch (err) {
		console.log(`Error ${err}`)
		return null;
	}

	const $ = cheerio.load(body)
	const title =  $('#firstHeading').text()
	let content = $('.poem').text()

	let isDisambiguation = false

	if (content == '') {
		isDisambiguation = true
		const as = $('div.mw-parser-output li a')
		
		let i = 0
		content = []
		for (; i < as.length; i++) {
			content.push(as[i].children[0].data)
		}
	}

	return {query, title, content, isDisambiguation}
}

module.exports = lookup

