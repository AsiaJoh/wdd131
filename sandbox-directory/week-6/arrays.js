//  arrays.js
const steps = ["one", "two", "three"];
const listTemplate(step) { steps.forEach(function callback(step))
  
  return `"<li>${step}</li>"`//the html string made from step
}
const stepsHtml = steps.map(function callback ( step)) { // use map to convert the list from strings to HTML
  return step;
} 
document.querySelector("#myList").innerHTML = stepsHTML // set the innerHTML