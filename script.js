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
    $("img").hover(
      function() {
        console.log("enter");
        this.src = "http://beerhold.it/225/225"
      },
      function() {
        console.log("leave");
        this.src = "http://beerhold.it/225/290"
      }
    );
  }
)
