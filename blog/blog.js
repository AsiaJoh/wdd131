const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}
]

articles.forEach((article) => {
	// Call a bunch of functions needed to create the blog

	// Function to transform/put the data into that special string
	let htmlString = toString(article);

	// Function to change that special string into legitimate code for the html
	stringToHTML(htmlString)


})

function toString(article) {
	let id = article["id"];
	const title = article["title"]
	const date = article["date"];
	const description = article["description"];
	const imgSrc = article["imgSrc"];
	const imgAlt = article["imgAlt"];
	const ages = article["ages"];
	const genre = article["genre"];
	const stars = article["stars"];

	id = "article" + id;

	return `<article id="${id}">
				<section class="book-data">
					<h4 class="date-published">${date}</h4>
					<p class="age-range">${ages}</p>
					<p class="genre">${genre}</p>
					<p class="rating">${stars}</p>
				</section>
				<section class="book-showcase">
					<h2>${title}</h2>
					<img src=${imgSrc} alt=${imgAlt}>
					<p class="summary">${description}</p>
				</section>
        	</article>`
}

function stringToHTML(htmlString) {
	// Take the received html (in the form of a string), and convert it to html within the document
	document.querySelector(main).innerHTML = htmlString
}