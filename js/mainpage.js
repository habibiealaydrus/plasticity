$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");
  
    for (var i = 0; i < row.length; i++) {
      var tag = tags[i];
  
      if ($(tag).position().top < pageBottom) {
        $(row).addClass("visible");
      } else {
        $(row).removeClass("visible");
      }
    }
  });
  