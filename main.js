
 var products = [
 	{ name: "one",
 	  description: "This is the product description This is the product description This is the product description This is the product description This is the product description This is the product description This is the product description ",
 	  price: "1",
 	  url:""
 	},
 	{ name: "two",
 	  description: "This is the product description This is the product description This is the product description This is the product description This is the product description This is the product description This is the product description This is the product description ",
 	  price: "2",
 	  url:""
 	},
 	{ name: "three",
 	  description: "This is the product description This is the product description This is the product description This is the product description This is the product description This is the product description This is the product description This is the product description This is the product description ",
 	  price: "3",
 	  url:""
 	},
 	{ name: "four",
 	  description: "This is the product description This is the product description This is the product description This is the product description This is the product description This is the product description This is the product description This is the product description This is the product description ",
 	  price: "4",
 	  url:""
 	},
 	{ name: "five",
 	  description: "This is the product description This is the product description This is the product description This is the product description This is the product description This is the product description This is the product description This is the product description This is the product description ",
 	  price: "5",
 	  url:""
 	},
 	{ name: "six",
 	  description: "This is the product description This is the product description This is the product description This is the product description This is the product description This is the product description This is the product description This is the product description This is the product description ",
 	  price: "6",
 	  url:""
 	},
 	{ name: "seven",
 	  description: "This is the product description This is the product description This is the product description This is the product description This is the product description This is the product description This is the product description This is the product description This is the product description ",
 	  price: "7",
 	  url:""
 	},
 	{ name: "eight",
 	  description: "This is the product description This is the product description This is the product description This is the product description This is the product description This is the product description This is the product description This is the product description This is the product description ",
 	  price: "8",
 	  url:""
 	}
 ];

 var productlist = document.getElementById("container")
 for (var i = 0; i < products.length; i++) {
 	productlist.innerHTML += "<div class='job'>"
 	+ "<article>" 
 	+ "<header>"
	 	+ "<h2>" + products[i].name + "</h2>" 
	+ "</header>"
 	+ "<section>" 
	 	+ "<img scr=" + products[i].url + ">"
	 	+ "<p>" + products[i].description + "</p>"
	 	+ "<p>" + products[i].price + "</p>"
	+ "</section>"
	+ "</article>"
 	+ "</div>";
}