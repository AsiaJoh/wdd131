// Code adapted from assignment in week 7

function validateForm(event) {
    // get a reference to the form. Because we attached a submit event listener to the form itself, we can access the form either through 'event.target', or 'this'
    const theForm = event.target;
    // the default behavior for a form submit is to try and navigate to another page where the form would be processed, if a url is not provided it will reload the current page. This sometimes is not desirable behavior. One case when we might do this is if we think there is bad data in the form.
    // To keep it from happening we can can call e.preventDefault()
    // You should always give feedback to the user about what whet wrong so they can fix it. We will store the error messages here
    const errors = [];
    // start by assuming the form is valid.
    let isValid = true;
    // add our validations here
    if (theForm.songName.value === "Burn My Dread") {
        isValid = false;
        errors.push("I already looked at that song :)");
      }

    if (theForm.songArtist.value === "Anastasia Johansen") { // A bit of a silly test case to use more if-statements, but it is true I haven't written any music
      isValid = false;
      errors.push("I'm afraid I haven't written any songs.");
    }
    // if we ran into any problems above valid will be false.
    if (!isValid) {
      //stop the form from being submitted
      event.preventDefault();
      // show the errors
      showErrors(errors);
      // return false to let the browser know the form was not submitted.
      return false;
    }
}
  
// helper function to display our errors.
function showErrors(errors) {
    const errorEl = document.querySelector(".errors");
    const html = errors.map((error) => `<p>${error}</p>`);
    errorEl.innerHTML = html.join("");
}

// attach a submit event handler to the form
document
    .querySelector("#requestForm")
    .addEventListener("submit", validateForm);