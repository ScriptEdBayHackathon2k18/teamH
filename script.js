var change = {
  37: {
    left: "-=1"
  },
  39: {
    left: "+=1"
  }
}
$(document).one("keydown", keyDown)

var going;

function keyDown(e) {
  $(document).one("keyup", keyup)
  var animation = change[e.which];
  going = setInterval(keepGoing, 1);
  function keepGoing() 
    if (($("#character").offset().left < 100) {
        $("#character").css(animation)
      }
  }
}

function keyup(e) {
  clearInterval(going)
  $(document).one("keydown", keyDown)
}















