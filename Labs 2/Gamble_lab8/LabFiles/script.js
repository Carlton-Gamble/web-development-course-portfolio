/*  JavaScript 6th Edition
	Chapter 2
	Hands-on Projects
	
	Author: Carlton Gamble
	Date: 4/6/2024
	
	Filename: script.js
*/
function finance(){
				document.write("<ol>");
				document.write("<li>Reduce spending on non-necessities.</li>");
				document.write("<li>Use extra money to pay off debt, starting with highest-interest credit card.</li>");
				document.write("<li>Continue paying off debts until you are debt free.</li>");
				document.write("<li>Put a fixed percent of your pay aside in savings every payday.</li>");
				document.write("</ol>");
}

function convert() {
    var degF = document.getElementById('fValue').value;
    var degC = (degF - 32) * (5 / 9);
    document.getElementById('cValue').innerHTML = degC.toFixed(2);
}

function shapes(shapeName) {
    alert(`You clicked on the ${shapeName}.`);
}

function submitInfo(e) {
    var name = document.getElementById("fValue").value;
	var email = document.getElementById("emailinput");
	var phone = document.getElementById("phoneinput");
	(name.value && email.value && phone.value) ? alert("Thank you!");
	alert("Please fill in all fields");
	(name.value && email.value && phone.value) ? calcTotal() : e.preventDefault();
}

	function calcTotal() {
    var itemTotal = 0;
    var orderTotal = 0;
    var salesTaxRate = 0.07;
    var item1 = document.getElementById("item1");
    var item2 = document.getElementById("item2");
    var item3 = document.getElementById("item3");
    var item4 = document.getElementById("item4");
    var item5 = document.getElementById("item5");
    (item1.checked) ? (itemTotal += 8) : (itemTotal += 0);
	(item2.checked) ? (itemTotal += 9) : (itemTotal += 0);
	(item3.checked) ? (itemTotal += 8) : (itemTotal += 0);
	(item4.checked) ? (itemTotal += 13) : (itemTotal += 0);
	(item5.checked) ? (itemTotal += 6) : (itemTotal += 0);
    itemTotal *= 100;
    orderTotal = (itemTotal + (itemTotal * salesTaxRate)) / 100;
    alert("Your order total is $" + orderTotal.toFixed(2) + " (including sales tax).");
    document.getElementById("orderTotalField").value = orderTotal.toFixed(2);
}