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
    modal_basket.classList.remove("modal-basket--show", "modal-basket--error");
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
        modal_basket.classList.remove("modal-basket--error");
      }
    }
  });

  // Если не выбран ни один чекбокс (2 варианта):

//   var size_s = modal_basket.querySelector("[name=size-s]");
//   var size_m = modal_basket.querySelector("[name=size-m]");
//   var size_l = modal_basket.querySelector("[name=size-l]");

//   modal_basket.addEventListener("submit", function (evt) {
//   if (!size_s.checked && !size_m.checked && !size_l.checked) {
//     evt.preventDefault();
//     modal_basket.classList.remove("modal-basket--error");
//     modal_basket.offsetWidth = modal_basket.offsetWidth;
//     modal_basket.classList.add("modal-basket--error");
//   }
// });

var checkbox = modal_basket.querySelectorAll(".modal-basket__option");
var checked = false;

modal_basket.addEventListener("submit", function (evt) {
for (var i = 0; i < checkbox.length; i++) {
  if (checkbox[i].checked) {
    checked = true;
    //console.log(checkbox[i]checked);
    }
  }
console.log(checked)
  if (checked === false) {
    evt.preventDefault();
    modal_basket.classList.remove("modal-basket--error");
    modal_basket.offsetWidth = modal_basket.offsetWidth;
    modal_basket.classList.add("modal-basket--error");
    console.log("Тряска");
  }
});

// Карта с кастомным маркером

function initMap() {
  var uluru = {lat: 59.9388, lng: 30.3230};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: uluru
  });
  var image = {
      url: "img/icon-map-pin.svg",
      scaledSize: new google.maps.Size(100, 100)
    }

  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    optimized: false,
    icon: image
  });
}
