var todaysDate = document.getElementById("currentDay");
var saveButton = document.getElementById("save-button8");
var saveButton = document.getElementById("save-button9");
var saveButton = document.getElementById("save-button10");
var saveButton = document.getElementById("save-button11");
var saveButton = document.getElementById("save-button12");
var saveButton = document.getElementById("save-button13");
var saveButton = document.getElementById("save-button14");
var saveButton = document.getElementById("save-button15");
var saveButton = document.getElementById("save-button16");
var saveButton = document.getElementById("save-button17");
var saveButton = document.getElementById("save-button18");
var hour8Box = document.getElementById("hour-8");
var hour9Box = document.getElementById("hour-9");
var hour10Box = document.getElementById("hour-10");
var hour11Box = document.getElementById("hour-11");
var noonBox = document.getElementById("hour-12");
var hour13Box = document.getElementById("hour-13");
var hour14Box = document.getElementById("hour-14");
var hour15Box = document.getElementById("hour-15");
var hour16Box = document.getElementById("hour-16");
var hour17Box = document.getElementById("hour-17");
var hour18Box = document.getElementById("hour-18");
var textBox8 = document.getElementById("textBox8");
var textBox9 = document.getElementById("textBox9");
var textBox10 = document.getElementById("textBox10");
var textBox11 = document.getElementById("textBox11");
var textBox12 = document.getElementById("textBox12");
var textBox13 = document.getElementById("textBox13");
var textBox14 = document.getElementById("textBox14");
var textBox15 = document.getElementById("textBox15");
var textBox16 = document.getElementById("textBox16");
var textBox17 = document.getElementById("textBox17");
var textBox18 = document.getElementById("textBox18");


textBox8.value = localStorage.getItem("typedText");
textBox9.value = localStorage.getItem("typedText");
textBox10.value = localStorage.getItem("typedText");
textBox11.value = localStorage.getItem("typedText");
textBox12.value = localStorage.getItem("typedText");
textBox13.value = localStorage.getItem("typedText");
textBox14.value = localStorage.getItem("typedText");
textBox15.value = localStorage.getItem("typedText");
textBox16.value = localStorage.getItem("typedText");
textBox17.value = localStorage.getItem("typedText");
textBox18.value = localStorage.getItem("typedText");


var currentDay = document.getElementById("currentDay");
// Updates the time live without need for refrshing.
function updateDateTime() {
  currentDay.textContent = dayjs().format('MM-DD-YYYY HH:mm:ss');
}


updateDateTime();

// sets time to update by 1 second
setInterval(updateDateTime, 1000);


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  
});

// $("#textBox8").siblings()


// saveButton.addEventListener("click", function (event){
//   event.preventDefault
//   const typedText = textBox8.value;
//   console.log(textBox8.value);
//   // textBox8.value = localStorage.getItem("typedText");
//    localStorage.setItem("typedText", typedText);
//   console.log(typedText);
// }
// );


for (var i = 8; i <= 18; i++) {
  var textBox = $("#text-box" + i);
  var saveButton = $("#save-button" + i);

  // Add event listener to each save button
  saveButton.on("click", function(event) {
    event.preventDefault();
    
    var typedText = textBox.value();
    console.log(textBox.value());
    localStorage.setItem("typedText", typedText);
    console.log(typedText);
  });
}

// textBox8.value = localStorage.getItem("typedText");
// textBox8.addEventListener("input", function(event) {
//   const typedText = event.target.value;
//   textBox8.value = localStorage.getItem("typedText");
//    localStorage.setItem('typedText', typedText); 

//     console.log(typedText);

// })
