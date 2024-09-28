// Assign a variable to the html select element
const themeSelector = document.querySelector("select"); // .querySelector() lets you select the first html element that matches what's in the parentheses
const byuiLogo = document.querySelector("img");
const body = document.querySelector("body");

// Function to change the theme/mode
function changeTheme() {
    // Check to see what the current value of our select is.
    // The current value is conveniently found in themeSelector.value!
    value = themeSelector.value

    // if the value is dark then:
    if (value = "dark") {
        // add the dark class to the body (and to the theme selectro)
        body.classList.add("dark")
        themeSelector.classList.add("dark")

        // change the source of the logo img to point to the white logo.
        byuiLogo.setAttribute("src", "byui-logo_white.png")
        byuiLogo.setAttribute("alt", "Dark Theme BYUI Logo")

    } else { // otherwise... (yes this formatting is standard for js apparently)
        // remove the dark class
        body.classList.remove("dark")
        themeSelector.classList.remove("dark")

        // make sure the logo src is the blue logo.
        byuiLogo.setAttribute("src", "byui-logo_blue.webp")
        byuiLogo.setAttribute("alt", "BYUI Logo")
    }
}

// Add an event listener to the corresponding variable, that calls the "changeTheme" function when the select html element is changed
themeSelector.addEventListener("change", changeTheme);

// The changeTheme function is the event handler function