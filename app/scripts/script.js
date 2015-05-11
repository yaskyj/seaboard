$(document).ready(function() {
  $(window).scroll(
    {
      previousTop: 0
    },
    function () {
      var currentTop = $(window).scrollTop();
      if (currentTop < this.previousTop) {
        $(".seaboard-nav").fadeIn("slow");
      } else {
        $(".seaboard-nav").fadeOut("slow");
      }
      this.previousTop = currentTop;
    });
});
