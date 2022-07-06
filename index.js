$(".icon").click(function onclick() {
  $(this).toggleClass("clicked");
  let num = $(this).text();
  console.log(num);
  if (num) {
    $(".btn").click(function () {
      $(".rating-state").addClass("hidden");
      $(".num").html(num);
      $(".Thank-You").removeClass("hidden");
    });
  }
});
