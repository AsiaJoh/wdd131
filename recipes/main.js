import recipes from "./recipes.mjs";

let randomNumber = randomNum();
let chosenRecipeObject = randomRecipe(randomNumber);
let recipeString = recipeTemplate(chosenRecipeObject);
stringToHTML(recipeString);

function randomNum () {
    // "Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).
    // We multiply to scale
    let num = Math.floor(Math.random() * 8);
    return num;
};

function randomRecipe(num) {
    // Use the imported recipes, and the random function from above to return a random recipe.
    let recipeObject = recipes[num];
    return recipeObject;
}

function recipeTemplate(recipe) {
    const author = recipe["author"];
	const url = recipe["url"];
    const isBasedOn = recipe["isBasedOn"];
    const cookTime = recipe["cookTime"];
    const datePublished = recipe["datePublished"];
    const tags = recipe["tags"]; // <-- Deal with this later
    const description = recipe["description"];
    const image = recipe["image"];
    const name = recipe["name"];
    const prepTime = recipe["prepTime"];
    const recipeInstructions = recipe["recipeInstructions"];
    const recipeYield = recipe["recipeYield"];
    const rating = recipe["rating"]; // <-- Deal with this later

	return `<section class="recipes">
                <img class="image" src="${image}" alt="Image of the corresponding meal">
                <div class="recipe-data">
                    <ul class="tags">
                        ${tagsTemplate()}
                    </ul>
                    <h2 class="name">${name}</h2>
                    <span
                    class="rating"
                    role="img"
                    aria-label="Rating: ${rating}"
                    >
                        ${ratingTemplate(rating)}
                    <p class="description">${description}</p>
                </div>
            </section>`;
}

function stringToHTML(htmlString) {
	// Take the received html, and insert it into the document

	const hrRef = document.querySelector("hr");

	hrRef.insertAdjacentHTML("afterEnd", htmlString);
};

function tagsTemplate(tags) {
    // loop through the tags list and transform the strings to HTML

    tags.forEach((tag) => {
        // Give the tag a string variation
        let tagString = `<li class="tag">${tag}</li>`;

        // Give the html to the string that'll be sent to the document
        return tagString;
    });

	return html;
};

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
    >`;
    // our ratings are always out of 5, so create a for loop from 1 to 5
    for(let i = 1; i<=5; i++) {
        // check to see if the current index of the loop is less than our rating
		if (i < rating) {
            // if so then output a filled star
            html + `<span aria-hidden="true" class="icon-star">⭐</span>`;
        }else {
            // else output an empty star
            html + `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    };
	// after the loop, add the closing tag to our string
	html += `</span>`;
	// return the html string
	return html;
};