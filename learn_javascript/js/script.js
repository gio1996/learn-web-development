$("article h1").on("mouseenter mouseleave", function () {

  $("article h1").addClass("blue");
  $("p").removeClass("hidden");

  $("footer").css("font-size", "32px");

  $("article h1").off();
});
