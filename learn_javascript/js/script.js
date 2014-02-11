
function toggleArticle() {
  $(this).toggleClass("blue");
  $("p").toggleClass("hidden");
  $("footer").toggleClass("increase-font-size");
}
$("article h1").on("click", toggleArticle);


function boldMenu() {
	var linkWasBold = $(this).hasClass("bold");
	$("a").removeClass("bold");
	if(linkWasBold === false) {
		$(this).addClass("bold");
	}
}
$(".main-nav a, footer a").on("click", boldMenu);