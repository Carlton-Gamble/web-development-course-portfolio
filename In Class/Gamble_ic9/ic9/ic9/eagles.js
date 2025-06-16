/*
*	JavaScript 6th Edition
*	Chapter 3
*	Chapter Case
*	
*	Georgia Southern
*	Variables and functions
*	Author:Carlton Gamble
*	Date:4/9/2024
*	
*	Filename: eagles.js
*/

// global variables
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
"Thursday", "Friday", "Saturday"];
 var opponents = ["Lightning", "Combines", "Combines",
 "Combines", "Lightning", "Lightning", "Lightning",
 "Lightning", "Barn Raisers", "Barn Raisers",
 "Barn Raisers", "Sodbusters", "Sodbusters", "Sodbusters",
 "Sodbusters", "(off)", "River Riders", "River Riders",
 "River Riders", "Big Dippers", "Big Dippers",
 "Big Dippers", "(off)", "Sodbusters", "Sodbusters",
 "Sodbusters", "Combines", "Combines", "Combines",
 "(off)", "(off)"];
 var gameLocation =
 ["away", "away", "away", "away", "home", "home", "home",
 "home", "home", "home", "home", "away", "away", "away",
 "away", "", "away", "away", "away", "away", "away",
 "away", "", "home", "home", "home", "home", "home",
 "home", "", ""];
 // function to place daysOfWeek values in header row cells
 function addColumnHeaders() {
 var i = 0;
 while (i < 7) {
 document.getElementsByTagName("th")[i].innerHTML =
 daysOfWeek[i];
 i++;
 }
 }
 // function to place day of month value in first h2 element
 // within each table data cell that has an id
 function addCalendarDates() {
 var i = 1;
var headings = "";
do {
 var tableCell = document.getElementById("02-" + i);
 headings = tableCell.getElementsByTagName("h2");
 headings[0].innerHTML = i;
 i++;
 } while (i <= 31);
 }
 // function to place opponents and gameLocation values in
 // first p element within each table data cell that has an id
 function addGameInfo() {
 var paragraphs = "";
 for (var i = 0; i < 31; i++) {
 var date = i + 1;
 var tableCell = document.getElementById("02-" + date);
 paragraphs = tableCell.getElementsByTagName("p");
 switch (gameLocation[i]) {
 case "away":
 paragraphs[0].innerHTML = "@ ";
 break;
 case "home":
 paragraphs[0].innerHTML = "vs ";
 break;
 }
 paragraphs[0].innerHTML += opponents[i];
 }
 }
 // function to populate calendar
 function setUpPage() {
 addColumnHeaders();
 addCalendarDates();
 addGameInfo();
 }
 // runs setUpPage() function when page loads
 if (window.addEventListener) {
 window.addEventListener("load", setUpPage, false);
 } else if (window.attachEvent) {
 window.attachEvent("onload", setUpPage);
 }