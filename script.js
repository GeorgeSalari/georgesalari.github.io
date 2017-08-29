$(document).ready(
  function() {
    $('a').hover(
    function() {
      $(this).css("color", "red");
    },
    function() {
      $(this).css("color", "");
    });
  }
);

$(document).ready(
  function() {
    console.log("ready");
    var image_before
    $("div#footer img").hover(
      function() {
        image_before = $(this).attr("src");
        console.log("enter");
        this.src = "http://beerhold.it/225/225";
      },
      function() {
        console.log("leave");
        this.src = image_before;
      }
    );
  }
)
