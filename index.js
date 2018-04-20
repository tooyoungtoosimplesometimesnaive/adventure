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

	console.log(url)

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
	const content = $('mw-content-text').text()

	return {query, title, content}
}

module.exports = lookup

