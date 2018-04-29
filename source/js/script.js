var main_nav = document.querySelector(".main-nav");
var nav_toggle = document.querySelector(".main-nav__toggle");
var modal_basket = document.querySelector(".modal-basket");
var open_modal_btn = document.querySelectorAll(".js-open-modal-btn");
var overlay = document.querySelector(".modal-overlay");

  main_nav.classList.remove("main-nav--nojs");

  nav_toggle.addEventListener("click", function() {
    if (main_nav.classList.contains("main-nav--closed")) {
      main_nav.classList.remove("main-nav--closed");
      main_nav.classList.add("main-nav--opened");
    } else {
      main_nav.classList.add("main-nav--closed");
      main_nav.classList.remove("main-nav--opened");
    }
  });

  for (var i = 0; i < open_modal_btn.length; i++) {
    open_modal_btn[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    modal_basket.classList.add("modal-basket--show");
    overlay.classList.add("modal-overlay--show");
  });
}

  overlay.addEventListener("click", function(event) {
    event.preventDefault();
    modal_basket.classList.remove("modal-basket--show");
    overlay.classList.remove("modal-overlay--show");
  });

  window.addEventListener("keydown", function (event)
    {
      if (event.keyCode === 27) {
      if (modal_basket.classList.contains ("modal-basket--show")) {
        modal_basket.classList.remove("modal-basket--show");
      }
      if (overlay.classList.contains ("modal-overlay--show")) {
        overlay.classList.remove("modal-overlay--show");
      }
    }
  });
