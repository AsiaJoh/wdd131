const  newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

// Create image element 
const img = document.createElement("img");

// Set the src and alt attributes 
img.setAttribute("src", "https://picsum.photos/200");
img.setAttribute("alt", "Randomly generated image from picsum.")

// Append the image to the body 
document.body.appendChild(img);

// Create a new div
const newDiv = document.createElement("div");

// Create it's inner HTML
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";

// Append the div to the main body
document.body.appendChild(newDiv);

// Create/append a new section 
const newSection = document.createElement("section");
newSection.innerHTML = "<h2>DOM Basics</h2><p>This was added through Javascript</p>"
document.body.appendChild(newSection);