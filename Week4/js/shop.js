var customerName = "Tobechukwu";

var CustomerElement = document.getElementById("myself");
CustomerElement.textContent = customerName;




var products =[
	"Brooklyn T-Shirt White",
	"Brooklyn T-Shirt Black",
	"Apple Watch",
	"Android Phone"
];
var prices = [10, 10, 199, 159];
var productsText = "";
var productsElement = document.getElementById("product-list");
totalPrice = prices[0] +prices[1] +prices[2] +prices[3];

var Discount = 0.25 * totalPrice;
var afterDiscount = totalPrice - Discount;
var afterDiscountElement = document.getElementById("b");
afterDiscountElement.textContent = afterDiscount;

//var totalPriceElement = document.getElementById("b");
//totalPriceElement.textContent = totalPrice;

//productsText += "<li class= 'list-group-item'><span class='badge'>$"+ prices[0]+"</span>"+ products[0]+ "</li>";
//productsText += "<li class= 'list-group-item'><span class='badge'>$"+ prices[1]+"</span>"+ products[1]+ "</li>";
//productsText += "<li class= 'list-group-item'><span class='badge'>$"+ prices[2]+"</span>"+ products[2]+ "</li>";
//productsText += "<li class= 'list-group-item'><span class='badge'>$"+ prices[3]+"</span>"+ products[3]+ "</li>";

for (i = 0; i < products.length; i++) { 
	productsText += "<li class= 'list-group-item'><span class='badge'>$"+ prices[i]+"</span>"+ products[i]+ "</li>";
}
productsElement.innerHTML = productsText;

var hr = new Date().getHours();
var me = "";
meElement = document.getElementById("me");
	if (hr < 12) {
		me = "Good Morning,";
}
	else if (hr < 18) {
		me = "Good Afternoon,";
}
	else {
		me = "Good Evening,";
}
	meElement.textContent = me;