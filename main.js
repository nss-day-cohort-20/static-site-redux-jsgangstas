
 var products = [
 	{ name: "Baby Swiffer!",
 	  description: "Do you have a small child that just can't stop crawling around? Is it difficult to make the time to sweep those dirty floors? Then Baby Swiffer is the product for you! Baby Swiffer uses the best of both clothing and cleaning technology to create an amazing outfit that lets your child do the job of cleaning your floors! It's simple, just put your child in the Baby Swiffer and let them roam free! They won't even know that they're being used for labor while you relax. The best part is, when they're done, simply wash the Baby Swiffer like you would any other article of clothing and it's good as new!",
 	  price: "$19.99!",
 	  url: "http://cdn.ebaumsworld.com/mediaFiles/picture/73250/84403533.jpg"
 	},
 	{ name: "Feet-B-Dry!",
 	  description: "Ladies, have you ever been stranded at an event because an unexpected rain threatened to ruin your new shoes? Well be afraid no more! With Feet-B-Dry, simply attach these state-of-the-art umbrellas to your feet and never be caught unprepared again! Feet-B-Dry are portable and small enough to fit inside your purse with ease, and they even come in several stylish designs!",
 	  price: "$19.99!",
 	  url: "http://weird.stareastasia.com/wp-content/uploads/2009/02/weird-japan-009.jpg"
 	},
 	{ name: "Butter!",
 	  description: "It's Butter! Now in an easy to use stick!<br><footer>*not actually butter</footer>",
 	  price: "$19.99!",
 	  url: "http://4.bp.blogspot.com/_f-yNhfYNz3c/TKSPubyP98I/AAAAAAAADsE/_v-6owM7Rug/s640/09-butter_sticker.jpg"
 	},
 	{ name: "The Donald Chia!",
 	  description: "It's back! Now in the new Presidential Edition!* Whether you love him or hate him, the Donald Chia is the perfect gift and sure to become a conversation starter. Just apply the miracle seeds, water, and watch that hair grow! <br> <footer>*is not any different than standard edition</footer>",
 	  price: "$19.99!",
 	  url: "http://www.asseenontv.com/imgcache/product/resized/001/024/734/catl/donald-trump-chia_670.jpg?k=1d389031&pid=1024734&s=catl&sn=asseenontv"
 	},
 	{ name: "Dutch Glow!",
 	  description: "Dutch Glow is the perfect polish for funiture connoiseurs. Sure to make any piece of furnature look like it come out of the 1600's amish country",
 	  price: "$19.99!",
 	  url:"http://www.asseenontv.com/imgcache/product/resized/000/539/522/catl/dutch-glow_670.jpg?k=42628848&pid=539522&s=catl&sn=asseenontv"
 	},
 	{ name: "BIG VISION!",
 	  description: "MAKE YOUR VISION BIG WITH BIG VISION!",
 	  price: "$19.99!",
 	  url: "http://www.asseenontv.com/imgcache/product/resized/000/826/730/catl/big-vision-glasses_670.jpg?k=4874de5a&pid=826730&s=catl&sn=asseenontv"
 	},
 	{ name: "Flippin' Fantastic!",
 	  description: "Flippin' Fantastic the fast, easy and fun way to make perfect pancakes every time! Amazing TV's Fantastic flips multiple pancakes at the same time and without the mess. Just place in preheated pan add batter and let them brown then simply lift and flip. The secret is the non-stick, silicone ring. The side holds batter to the perfect shape for even cooking, while the flat bottom ring supports everything. Stovetop safe silicone while the easy flip grips keep hand away from the heat. Dishwasher safe. Also great for eggs, omelets, hash browns and so much more!",
 	  price: "$19.99!",
 	  url: "http://www.asseenontv.com/imgcache/product/resized/001/047/655/catl/flippin-fantastic_670.jpg?k=cc80560c&pid=1047655&s=catl&sn=asseenontv"
 	},
 	{ name: "Rodent Sheriff!",
 	  description: "Rodent Sheriff pest repellent scares off rats, mice, squirrels, and other rodents. Rodent Sheriff is made in the USA from a handcrafted peppermint formula that's revolting to mice, rats, squirrels and other rodents. Yet you'll love the fresh minty scent and it is safe around children and pets. Spray liberally in your garden to discourage scavengers and around trashcans, vehicles, garages, storage areas, attics – wherever rodents are a problem. 8 fl. oz.",
 	  price: "$19.99!",
 	  url: "http://www.asseenontv.com/imgcache/product/resized/000/961/156/catl/rodent-sheriff_670.jpg?k=c6bb9f84&pid=961156&s=catl&sn=asseenontv"
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
	 	+ "<img src=" + products[i].url + ">"
	 	+ "<p>" + products[i].description + "</p>"
	 	+ "<p>" + products[i].price + "</p>"
	+ "</section>"
	+ "</article>"
 	+ "</div>";
}