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
                        <li class="tag">dessert</li>
                    </ul>
                    <h2 class="name">${name}</h2>
                    <span
                    class="rating"
                    role="img"
                    aria-label="Rating: ${rating}"
                    >
                        <span aria-hidden="true" class="icon-star">⭐</span>
                        <span aria-hidden="true" class="icon-star">⭐</span>
                        <span aria-hidden="true" class="icon-star">⭐</span>
                        <span aria-hidden="true" class="icon-star-empty">⭐</span>
                        <span aria-hidden="true" class="icon-star-empty">☆</span>
                    </span>
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
    
};

function ratingTemplate(rating) {

};