import $ from "jquery";
// Copied from kamernet\proj\Qmulus.Kamernet.StaticResources\Scripts\redesign\Components\Menu.js

//******** ADD LISTENER FOR HAMBURGER MENU *************//
export function hamburgerListener() {
  if (process.browser) {
    $(document).ready(function () {
      $(".floating-menu-trigger").click(function (e) {
        $(this).toggleClass("is-active");
        $(".floating-header-menu").toggle();
        console.log($(".floating-header-menu").css("display"));
        e.stopPropagation();
      });

      $(document).click(function (e) {
        if (
          !$(e.target).is(".floating-menu-trigger, .floating-header-menu *") &&
          !$(e.target).is(".mobile-menu-trigger, .mobile-menu-trigger *") &&
          !$(e.target).is(
            "li.submenu-item-selector, li.submenu-item-selector *"
          ) &&
          !$(e.target).is(
            "li.mainmenu-item-selector, li.mainmenu-item-selector *"
          )
        ) {
          $(".floating-menu-trigger,.mobile-menu-trigger").removeClass(
            "is-active"
          );
          $("body").removeClass("mobile-menu-active");
          $(".floating-header-menu").hide();
        }
      });

      $(".mobile-menu-trigger").click(function (e) {
        if ($(this).hasClass("is-active")) {
          $(this).removeClass("is-active");
          $("body").removeClass("mobile-menu-active");
        } else {
          $(this).addClass("is-active");
          $("body").addClass("mobile-menu-active");
        }

        e.stopPropagation();
      });
    });
  } else {
    console.log("no");
  }
}

export function openSubMenu(_subMenuToShow) {
  $(".submenu-mobile-wrapper").addClass("hide");
  $(".menu-first")
    .removeClass("translate-on-canvas-right")
    .addClass("translate-off-canvas-left");
  $(".submenu-mobile-wrapper." + _subMenuToShow)
    .removeClass("hide")
    .removeClass("translate-off-canvas-right")
    .addClass("translate-on-canvas-left");
  document.getElementById("mobile-menu").style.overflowY = "hidden";
}

export function backToMain() {
  $(".menu-first")
    .addClass("translate-on-canvas-right")
    .removeClass("translate-off-canvas-left");
  $(".submenu-mobile-wrapper")
    .addClass("translate-off-canvas-right")
    .removeClass("translate-on-canvas-left")
    .delay(300)
    .queue(function () {
      $(this).removeClass("hide").dequeue();
    });
  document.getElementById("mobile-menu").style.overflowY = "auto";
}
