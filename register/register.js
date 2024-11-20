// count is the current number of participants shown, automatically started as 1
let count = 1;

// Add an event listener to the button. 
let participantButton = document.querySelector("#add");
participantButton.addEventListener("click", addParticipant);

function participantTemplate(count) {
    // Return a new participant's html as one big string
    // (remember to update the ids of each element with something to make it unique.)
    return `<section class="participant${count}">
            <p>Participant ${count}</p>
            <div class="item">
              <label for="fname"> First Name<span>*</span></label>
              <input id="fname" type="text" name="fname" value="" required />
            </div>
            <div class="item activities">
              <label for="activity">Activity #<span>*</span></label>
              <input id="activity" type="text" name="activity" />
            </div>
            <div class="item">
              <label for="fee">Fee ($)<span>*</span></label>
              <input id="fee" type="number" name="fee" />
            </div>
            <div class="item">
              <label for="date">Desired Date <span>*</span></label>
              <input id="date" type="date" name="date" />
            </div>
            <div class="item">
              <p>Grade</p>
              <select>
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
          </section>`;
};

function addParticipant () {
    //When participant button is clicked the following should happen:
    // Add one to the count of participants.
    count += 1;
    // Create a copy of the HTML that makes up the participant section
    let participantString = participantTemplate(count);

    // Insert the new HTML into the participants fieldset, after the last participant and before the Add button.
    participantButton = document.querySelector("#add");
    participantButton.insertAdjacentHTML("beforebegin", participantString);
};

// Add an event listener to the form. We are listening for a submit event.
let submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("submit", submitForm);

function submitForm(event) {
    // On submit we need to keep the form from reloading the page.
    event.preventDefault();
    // Then find all of the fee inputs. There will be one for each participant. The totals from those fields need to be summed.
    let totalFees = totalFees();

    // Hide the Form... 
    const form = document.querySelector("form");
    form.classList.add("hide");

    // And show the summary element.
    htmlString = successTemplate(info);

    const h1 = document.querySelector("h1");
	h1.insertAdjacentHTML("afterend", htmlString);
};

// create a function to calculate the fee total.
function totalFees () {
    // Then find all of the fee inputs. There will be one for each participant. The totals from those fields need to be summed.

    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements); // For debugging I assume
    // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
    // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
    // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
    feeElements = [...feeElements];
    // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
    let sum = feeElements.reduce((runningTotal, currentValue) => runningTotal + currentValue);

    // Remember that the text that was entered into the input element will be found in the .value of the element.

    // once you have your total make sure to return it!
    return sum;
};

function successTemplate(info) {
    let name = info["adultName"];
	let totalFees = info["feeTotal"];

    // Return the successTemplate's html as one big string
    return `<p>Thank you ${name} for registering. You have registered ${count} participants and owe $${totalFees} in Fees.</p>`
};

// info will be an object with the adult name, number of participants, and fee total.
    // Get the adult name from the form.
let info = {
    adultName: document.getElementById("#adult_name"),
    numParticipants: count,
    feeTotal: totalFees()
};