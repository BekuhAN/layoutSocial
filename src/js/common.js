$(document).ready(function () {
  $(".sub > a").click(function () {
    var ul = $(this).next(),
      clone = ul.clone().css({ height: "auto" }).appendTo(".main-menu"),
      height = ul.css("height") === "0px" ? ul[0].scrollHeight + "px" : "0px";
    clone.remove();
    ul.animate({ height: height });
    return false;
  });
  $(".main_menu > li > a").click(function () {
    $(".main_menu > li > a, .sub a").removeClass("active");
    $(this).addClass("active");
  }),
    $(".sub_menu li a").click(function () {
      $(".sub_menu li a").removeClass("active");
      $(this).addClass("active");
    });

  $(".popup-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    },
  });
  $('a[href^="#b"]').bind("click.smoothscroll", function (e) {
    e.preventDefault();

    var target = this.hash,
      $target = $(target);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
        },
        1500,
        "swing",
        function () {
          window.location.hash = target;
        }
      );
  });
});
