var price, quantity, total;

price = 5;
quantity = 14;
totals = price * quantity;

var el = document.getElementById("cost");
el.textContent = '$' + totals / 2;