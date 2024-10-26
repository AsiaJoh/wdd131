// Activity 1
const steps = ["one", "two", "three"];
function listTemplate(step) {
  
  return `<li>${step}</li>`//the html string made from step
}

const stepsHtml = steps.map(listTemplate).join(""); // use map to convert the list from strings to HTML (and then join them together into a single string)

document.querySelector("#myList").innerHTML = stepsHtml; // set the innerHTML

// Activity 2

const grades = ["A", "B", "A", "C", "F", "D"];

function gpa(letter) {
  if (letter === "A") {
    return 4;
  }
  else if (letter === "B"){
    return 3;
  }
  else if (letter === "C"){
    return 2;
  }
  else if (letter === "D"){
    return 1;
  }
  else if (letter === "F"){
    return 0;
  }
}

// Activity 3
const gradesConverted = grades.map(gpa); // Convert the letter grades into number gpas in this new array

const averageGPA = gradesConverted.reduce((total, currentGrade) => (total + currentGrade)) / gradesConverted.length;

console.log(averageGPA);

// Activity 4
const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];

const filteredFruits = fruits.filter(fruit => fruit.length > 6);

console.log(filteredFruits);

// Activity 5
const numberArray = [12, 34, 21, 54];

const luckyNumber = 21;

let luckyIndex = numberArray.indexOf(21);
console.log(luckyIndex);