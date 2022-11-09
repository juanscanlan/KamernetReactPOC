import $ from "jquery";

function owlInitialize() {
  if ($(window).width() < 1024) {
    $("#popular-cities").addClass("cities-carousel");
    $("#hiw-cards").addClass("hiw-carousel");
    $("#testimonials-cards").addClass("testimonial-carousel");
    $("#popular-cities, #hiw-cards, #testimonials-cards").addClass(
      "owl-carousel"
    );
    $(".hiw-carousel,.cities-carousel, .testimonial-carousel").owlCarousel({
      loop: false,
      margin: 16,
      nav: true,
      navText: [
        "<i class='icon-s carousel-left'></i>",
        "<i class='icon-s carousel-right'></i>",
      ],
      dots: false,
      stagePadding: 48,
      autoWidth: true,
      items: 1,
    });
  } else {
    $(".cities-carousel, .hiw-carousel, .testimonial-carousel")
      .owlCarousel("destroy")
      .removeClass("owl-carousel");
    $("#popular-cities, #hiw-cards, #testimonials-cards")
      .removeClass("hiw-carousel")
      .removeClass("cities-carousel")
      .removeClass("testimonial-carousel");
  }
}
var bannerImg;
function mobileBanners() {
  $(".card--background").each(function (_, el) {
    var getBackgroundImage = function (e) {
      var imgEl = $(el).find("img.lazy");
      if (imgEl.length > 0) {
        imgEl.addClass("hide");
        return $(el).find("img").attr("src");
      }
      var bgImg = window.getComputedStyle(e).backgroundImage;
      if (bgImg.indexOf("url") !== -1) {
        return bgImg.match(/"(.*)"/)[1];
      }
    };
    var clearBackgroundImage = function (e, clear = true) {
      if (clear) {
        e.style.backgroundImage = "unset";
      } else {
        e.style.backgroundImage = "";
      }
    };
    if ($(window).width() < 600) {
      var backgroundImage = getBackgroundImage(el);
      if (backgroundImage && $(el).find("img").length < 2) {
        clearBackgroundImage(el);
        $(el).prepend(
          '<img src="' +
            backgroundImage +
            '" loading="lazy"/ alt="studenthouse winner">'
        );
      }
    } else {
      clearBackgroundImage(el, false);
      if ($(el).find("img.lazy").length > 0) {
        setTimeout(function () {
          var calcHeight = 0;
          var things = $(el).find(".grid-item>div");
          things.each(function (_, el) {
            calcHeight += parseInt(window.getComputedStyle(el).height);
            calcHeight += parseInt(window.getComputedStyle(el).marginTop);
          });
          $(el).find("img.lazy").removeClass("hide");
          if (calcHeight) {
            $(el).find("img.lazy").height(calcHeight);
          }
        }, 300);
      }
      $(el).find("img:not(.lazy)").remove();
    }
  });
  if ($(window).width() < 1024) {
    $("#elbuco .card--large").height($("#promo-left.card--large").height());
  } else {
    $("#elbuco .card--large").height("auto");
  }
}
function bundleFunctions() {
  owlInitialize();
  mobileBanners();
}
$(window).resize(function () {
  bundleFunctions();
});

$(document).ready(function () {
  bundleFunctions();
});
