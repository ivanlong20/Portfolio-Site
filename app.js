AOS.init();

$(window).scroll(function () {
  if ($(this).scrollTop() >= 20) {
    $("#return-to-top").fadeIn(200);
  } else {
    $("#return-to-top").fadeOut(200);
  }
});
$("#return-to-top").click(function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    100
  );
});

const currentYear = new Date().getFullYear();

document.getElementById("current-year").textContent =
  "@" + currentYear + " Ivan Chan";
