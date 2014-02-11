/* Homework:
1. Codecademy JS course
2. Lookup .html() and .text() in jQuery documentation
*/

/* data types

String
"hello world";

Boolean
true;

Function
function optionalName (optionalParameter) {
	// inside the function
}

Object
{
	myKey: "any value",
	anotherKey: true
}
*/





function toggleArticle () {
	var myH1 = this;
	$("p").fadeIn({
		duration: 800,
		complete: function () {
			$(myH1).addClass("blue");
		}
	});

	$("footer").toggleClass("increase-font-size");
}
$("article h1").on("click", toggleArticle);

var caja = {
	legs: 4,
	nose: 1,
	color: "white",
	isDog: true,
	bark: function () {
		console.log("wuff");
	}
};

function hasClass (name) {
 // logic
 return false;
}


function boldMenu() {
	var linkWasBold = $(this).hasClass("bold");
	$("a").removeClass("bold");
	if(linkWasBold === false) {
		$(this).addClass("bold");
	}
}
$(".main-nav a, footer a").on("click", boldMenu);