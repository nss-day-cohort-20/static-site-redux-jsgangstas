
 var products = [
 	{ name: "one",
 	  description: "a",
 	  price: "1",
 	  url:""
 	},
 	{ name: "two",
 	  description: "b",
 	  price: "2",
 	  url:""
 	},
 	{ name: "three",
 	  description: "c",
 	  price: "3",
 	  url:""
 	},
 	{ name: "four",
 	  description: "d",
 	  price: "4",
 	  url:""
 	},
 	{ name: "five",
 	  description: "e",
 	  price: "5",
 	  url:""
 	},
 	{ name: "six",
 	  description: "f",
 	  price: "6",
 	  url:""
 	},
 	{ name: "seven",
 	  description: "g",
 	  price: "7",
 	  url:""
 	},
 	{ name: "eight",
 	  description: "h",
 	  price: "8",
 	  url:""
 	}
 ];

 var productlist = document.getElementById("products")
 for (var i = 0; i < products.length; i++) {
 	productlist.innerHTML += "<div>" 
 	+ products[i].name 
 	+ products[i].description 
 	+ products[i].price 
 	+ products[i].url 
 	+ "</div>";
 }