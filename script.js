// Converts HTML elements to variable in Javascript
var todaysDate = document.getElementById("currentDay");
var saveButton9 = document.getElementById("save-button9");
var saveButton10 = document.getElementById("save-button10");
var saveButton11 = document.getElementById("save-button11");
var saveButton12 = document.getElementById("save-button12");
var saveButton13 = document.getElementById("save-button13");
var saveButton14 = document.getElementById("save-button14");
var saveButton15 = document.getElementById("save-button15");
var saveButton16 = document.getElementById("save-button16");
var saveButton17 = document.getElementById("save-button17");
var hour9Box = document.getElementById("hour-9");
var hour10Box = document.getElementById("hour-10");
var hour11Box = document.getElementById("hour-11");
var noonBox = document.getElementById("hour-12");
var hour13Box = document.getElementById("hour-13");
var hour14Box = document.getElementById("hour-14");
var hour15Box = document.getElementById("hour-15");
var hour16Box = document.getElementById("hour-16");
var hour17Box = document.getElementById("hour-17");
var textBox9 = document.getElementById("textBox9");
var textBox10 = document.getElementById("textBox10");
var textBox11 = document.getElementById("textBox11");
var textBox12 = document.getElementById("textBox12");
var textBox13 = document.getElementById("textBox13");
var textBox14 = document.getElementById("textBox14");
var textBox15 = document.getElementById("textBox15");
var textBox16 = document.getElementById("textBox16");
var textBox17 = document.getElementById("textBox17");


// CHecks local storage for each hour block to see if they have saved text.
textBox9.value = localStorage.getItem("typedText9");
textBox10.value = localStorage.getItem("typedText10");
textBox11.value = localStorage.getItem("typedText11");
textBox12.value = localStorage.getItem("typedText12");
textBox13.value = localStorage.getItem("typedText13");
textBox14.value = localStorage.getItem("typedText14");
textBox15.value = localStorage.getItem("typedText15");
textBox16.value = localStorage.getItem("typedText16");
textBox17.value = localStorage.getItem("typedText17");


var currentDay = document.getElementById("currentDay");
// Updates the time live without need for refrshing.
function updateDateTime() {
  currentDay.textContent = dayjs().format('MM-DD-YYYY HH:mm:ss');
}


updateDateTime();

// sets time to update by 1 second
setInterval(updateDateTime, 1000);

// Function to update hour block color based on time of day
// function updateClassBasedOnTime() {
//   var currentTime = new Date();
//   var currentHour = currentTime.getHours();

//   if (currentHour >= 15 && currentHour < 23) {
//     hourBox14.classList.add("past");
//     hourBox14.classList.remove("present","future");
//   } else if (currentHour === 14) {
//     hourBox14.classList.add("present");
//     hourBox14.classList.remove("past","future");
//   } else {
//     hourBox14.classList.add("future");
//     hourBox14.classList.remove("present","past");
//   }
// }

// // Initial class update
// updateClassBasedOnTime();

// // Update class every minute
// setInterval(updateClassBasedOnTime, 60000);


// Event Listeners for each save button to save text to local storage.
saveButton9.addEventListener("click", function (event){
  event.preventDefault
  const typedText9 = textBox9.value;
  console.log(textBox9.value);
   localStorage.setItem("typedText9", typedText9);
  console.log(typedText);
}
);

saveButton10.addEventListener("click", function (event){
  event.preventDefault
  const typedText10 = textBox10.value;
  console.log(textBox10.value);
   localStorage.setItem("typedText10", typedText10);
  console.log(typedText);
}
);

saveButton11.addEventListener("click", function (event){
  event.preventDefault
  const typedText11 = textBox11.value;
  console.log(textBox11.value);
   localStorage.setItem("typedText11", typedText11);
  console.log(typedText);
}
);

saveButton12.addEventListener("click", function (event){
  event.preventDefault
  const typedText12 = textBox12.value;
  console.log(textBox12.value);
   localStorage.setItem("typedText12", typedText12);
  console.log(typedText);
}
);

saveButton13.addEventListener("click", function (event){
  event.preventDefault
  const typedText13 = textBox13.value;
  console.log(textBox11.value);
   localStorage.setItem("typedText13", typedText13);
  console.log(typedText);
}
);

saveButton14.addEventListener("click", function (event){
  event.preventDefault
  const typedText14 = textBox14.value;
  console.log(textBox14.value);
   localStorage.setItem("typedText14", typedText14);
  console.log(typedText);
}
);

saveButton15.addEventListener("click", function (event){
  event.preventDefault
  const typedText15 = textBox15.value;
  console.log(textBox15.value);
   localStorage.setItem("typedText15", typedText15);
  console.log(typedText);
}
);

saveButton16.addEventListener("click", function (event){
  event.preventDefault
  const typedText16 = textBox16.value;
  console.log(textBox16.value);
   localStorage.setItem("typedText16", typedText16);
  console.log(typedText);
}
);

saveButton17.addEventListener("click", function (event){
  event.preventDefault
  const typedText17 = textBox17.value;
  console.log(textBox16.value);
   localStorage.setItem("typedText17", typedText17);
  console.log(typedText);
}
);

