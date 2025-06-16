/*  JavaScript 6th Edition
	Chapter 2
	In-Class Activity

	Author: Carlton Gamble
	Date:   4/1/2024
	
	Filename: sf_script.js
*/
function VariableExample() {
	var Value1 = 3;
	var Value2 = 7;
	var sumoutput = Value1 + Value2;
	document.getElementById("sum").innerHTML = sumoutput;
}

function VariableExamplewithPararmeters(Value1, Value2){
	var sum = Value1 + Value2;
	document.getElementById("sumwithparameters").innerHTML = sum;
}