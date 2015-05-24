$(document).ready(function() {
  $(window).scroll(
    {
      previousTop: 0
    },
    function () {
      var currentTop = $(window).scrollTop();
      if (currentTop < this.previousTop) {
        $(".navbar-fixed-top").fadeIn("slow");
      } else {
        $(".navbar-fixed-top").fadeOut("slow");
      }
      this.previousTop = currentTop;
    });
});
