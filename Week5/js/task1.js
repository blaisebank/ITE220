window.onload = function() { // on load event
var task1 = {
	render: function(){
		document.getElementById("screenX").textContent = window.screenX;
		document.getElementById("screenY").textContent = window.screenY;
		document.getElementById("screenWidth").textContent = window.innerWidth;
		document.getElementById("screenHeight").textContent = window.innerHeight;
		document.getElementById("location").textContent = window.location.pathname;
	},
	resize : function (){
		window.addEventListener("resize", this.render);
	},
	devInfo: function() {
		var btnDev = document.getElementById("dev-info");
		btnDev.addEventListener("click", function(){
			
			var devInfo = "<br>Joseph<br>";
			devInfo += "IT Student<br>";
			devInfo += "<a href= 'https://github.com/JosephAik' target='_blank'>www.github.com/JosephAik</a>"
			document.getElementById("dev-info-container").innerHTML = devInfo;
		});
	}
}
task1.render();
task1.resize();
task1.devInfo();
}; // end pn load event