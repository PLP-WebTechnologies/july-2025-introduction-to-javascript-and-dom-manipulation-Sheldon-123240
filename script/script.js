// =============================
// Part 1: Variables & Conditionals
// =============================
function checkNumber() {
  let num = parseInt(prompt("Enter a number:")); // capture input
  let result;

  if (num > 0) {
    result = "The number is positive.";
  } else if (num < 0) {
    result = "The number is negative.";
  } else {
    result = "The number is zero.";
  }

  document.getElementById("numberResult").textContent = result;
}

// =============================
// Part 2: Functions
// =============================
// Custom function 1
function calculateTotal(a, b) {
  let total = a + b;
  document.getElementById("totalResult").textContent =
    `The total of ${a} + ${b} is ${total}`;
}

// Custom function 2
function formatString(str) {
  return str.toUpperCase();
}
console.log(formatString("hello world")); // Example output in console

// =============================
// Part 3: Loops
// =============================
// Example 1: For loop
function listFruits() {
  let fruits = ["Apple", "Banana", "Mango", "Orange"];
  let list = document.getElementById("fruitList");
  list.innerHTML = ""; // clear before adding

  for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.textContent = fruits[i];
    list.appendChild(li);
  }
}

// Example 2: While loop (simple countdown in console)
let countdown = 5;
while (countdown > 0) {
  console.log("Countdown:", countdown);
  countdown--;
}

// =============================
// Part 4: DOM Manipulation
// =============================
// Example 1: Toggle text content
document.getElementById("toggleBtn").addEventListener("click", function () {
  let text = document.getElementById("toggleText");
  if (text.textContent === "This text will change!") {
    text.textContent = "Toggled successfully!";
    text.style.color = "red";
  } else {
    text.textContent = "This text will change!";
    text.style.color = "green";
  }
});

// Example 2: Change background color
document.getElementById("colorBtn").addEventListener("click", function () {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
});

// Example 3: Creating new element dynamically
let newParagraph = document.createElement("p");
newParagraph.textContent = "🎉 This paragraph was created with JavaScript!";
document.body.appendChild(newParagraph);
