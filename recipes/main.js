import recipes from "./recipes.mjs";


init();


function GetRandomRecipe() {
    // "Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).
    // We multiply to scale
    let num = Math.floor(Math.random() * 8);

    // Use the imported recipes, and the random function from above to return a random recipe.
    let recipeObject = recipes[num];
    return recipeObject;
}

function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    const recipeContainer = document.querySelector(".recipes");

    let htmlStrings = ``;

	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    recipeList.forEach((recipe) => {
        // For each recipe object in the list...
        //Make it an html string
        let recipeHTML = recipeTemplate(recipe);
        htmlStrings += recipeHTML;
    });
	// Set the HTML strings as the innerHTML of our output element.
    recipeContainer.innerHTML = htmlStrings;

}

function init() {
    // get a random recipe
    const recipeObject = GetRandomRecipe();

    // render the recipe with renderRecipes.
    renderRecipes([recipeObject]);
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

	return `<section class="recipe">
                <img class="image" src="${image}" alt="Image of the corresponding meal">
                <div class="recipe-data">
                    <ul class="tags">
                        ${tagsTemplate(tags)}
                    </ul>
                    <h2 class="name">${name}</h2>
                        ${ratingTemplate(rating)}
                    <p class="description">${description}</p>
                </div>
            </section>`;
}

function tagsTemplate(tags) {
    // loop through the tags list and transform the strings to HTML
    

    //Set up the future string
    let html = ``;

    tags.forEach((tag) => {
        // Give the tag a string variation
        let tagString = `<li class="tag">${tag}</li>`;

        // Give the html to the string that'll be sent to the document
        html += tagString
    });

    console.log(html);
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
		if (i <= rating) {
            // if so then output a filled star
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        }else {
            // else output an empty star
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    };
	// after the loop, add the closing tag to our string
	html += `</span>`;
	// return the html string
	return html;
};