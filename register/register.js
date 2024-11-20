// count is the current number of participants shown, automatically started as 1
let count = 1;

// Add an event listener to the button. 
let participantButtonRef = document.querySelector("#add")
participantButtonRef.addEventListener("click", addParticipant);

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
          </section>`
};

function addParticipant () {
    //When participant button is clicked the following should happen:
    // Add one to the count of participants.
    count += 1;
    // Create a copy of the HTML that makes up the participant section
    let participantHTML = participantTemplate(count);

    // Insert the new HTML into the participants fieldset, after the last participant and before the Add button.
    participantButtonRef = document.querySelector("#add");
    participantButtonRef.insertAdjacentElement("beforebegin", participantHTML);
    
};