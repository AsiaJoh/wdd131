let menuButton = document.querySelector(".menu-button")
let nav = document.querySelector("ul")
let gallery = document.querySelector(".gallery")

menuButton.addEventListener("click", function ToggleMenu(){
    nav.hidden = !nav.hidden
})

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="norris-sm.jpeg" alt="picture">
    </div>`
}

function viewHandler(event) {
    // create a variable to hold the element that was clicked on from event.target
    let viewerButton = document.querySelector(".close-viewer")

	// get the src attribute from that element and 'split' it on the "-"


	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step

	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))

	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    viewerButton.addEventListener("click", closeViewer)
}

gallery.addEventListener("click", viewHandler)

function closeViewer() {
    
}