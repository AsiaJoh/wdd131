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

	// Function to change that special string into legitimate code for the html
})

function toString(article) {
	const id = article["id"];
	const title = article["title"]
	const date = article["date"];
	const description = article["description"];
	const imgSrc = article["imgSrc"];
	const imgAlt = article["imgAlt"];
	const ages = article["ages"];
	const genre = article["genre"];
	const stars = article["stars"];

	return `<article id="article1">
            <section class="book-data">
                <h4 class="date-published">July 5 2022</h4>
                <p class="age-range">10-14</p>
                <p class="genre">Fantasy</p>
                <p class="rating">****</p>
            </section>
            <section class="book-showcase">
                <h2>Septimus Heap Book One: Magyk</h2>
                <img src="https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg" alt="Book cover for Septimus Heap 1">
                <p class="summary">If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.</p>
            </section>
        </article>`
}