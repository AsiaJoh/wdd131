let menuButton = document.querySelector(".menu-button")
let nav = document.querySelector("ul")
let gallery = document.querySelector(".gallery")
const viewer = document.querySelector(".viewer");

menuButton.addEventListener("click", function ToggleMenu(){
    nav.hidden = !nav.hidden
})

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
    // Adding click event to the images which will render the viewer upon being clicked
    const imgElement = event.target.closest("img");
    if (!imgElement) return; // Exit if not an image (remove this later??)
    
    // get the src attribute from that element and 'split' it on the "-"
    const imgSrc = imgElement.getAttribute("src");
    const parts = imgSrc.split("-");

    // construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const fullImg = `${parts[0]}-full.jpeg`;
    console.log(fullImg); // This displays the correct file name! (I think. It is supposed to be norris-full.jpeg)

    // insert the viewerTemplate into the top of the body element
    // (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullImg, imgElement.alt)); 

    // Make the modal visible, since initially it is not
    viewer.style.display = "grid"; // Set display to grid

    // create a variable to hold the element that was clicked on from event.target
    let viewerButton = document.querySelector(".close-viewer")

    // add a listener to the close button (X) that calls a function called closeViewer when clicked
    viewerButton.addEventListener("click", closeViewer)
}


gallery.addEventListener("click", viewHandler)


function closeViewer() {
    console.log("Close button clicked!"); // This doesn't display...
    if (viewer) viewer.remove(); // Remove the viewer if it exists
}