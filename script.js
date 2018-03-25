/* global createCanvas, line, mouseIsPressed, fill, mouseX, mouseY, ellipse , angleMode , DEGREES , rect */

var pane = $('#container'),
    box = $('#character'),
    w = pane.width() - box.width(),
    d = {},
    x = 10; // speed

function newv(v,a,b) {
    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
    return n < 0 ? 0 : n > w ? w : n;
}

$(window).keydown(function(e) { d[e.which] = true; });
$(window).keyup(function(e) { d[e.which] = false; });

setInterval(function() {
    box.css({
        left: function(i,v) { return newv(v, 37, 39); },
    });
}, 20);

//https://github.com/bmoren/p5.collide2D