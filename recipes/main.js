import recipes from "./recipes.mjs";

function randomNum () {
    // "Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).
    //Multiplying it by (max - min) scales it to the range.
    //Adding min shifts the range to start from the minimum value." - ChatGPT
    // Math.floor rounds decimals down to the nearest integer
    // The +1 is to include the "7" within the range...
    // Or we could just do 8
    return Math.floor(Math.random() * (8 - 0) + 0);
};

