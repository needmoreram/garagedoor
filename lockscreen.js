var ww = rw = window.innerWidth;
var wh = rh = window.innerHeight;

if (rw * 1.775 > rh)
    rw = rh / 1.775;
else
    rh = rw * 1.775;

var paper = Raphael((ww - rw) / 2, 0, rw, rh);

var brad = rw  *  15 / 128;
var blef = rw  *  11 / 128;
var bhsp = rw  *   8 / 128;
var btop = rh * 163 / 568;
var bvsp = rh *  13 / 568;

var buttons = []
var nattr = {
	fill: "#fff",
	stroke: "#000",
}
var hlattr = {
	fill: "#000",
	stroke: "#000"
}

for (var i = 0; i < 3; i ++) {
    for (var j = 0; j < 3; j ++) {
        buttons[3 * i + j] = paper.circle(blef + bhsp * j + brad * (2 * j + 1),
                                          btop + bvsp * i + brad * (2 * i + 1),
                                          brad);
        var p = paper.text(blef + bhsp * j + brad * (2 * j + 1),
				           btop + bvsp * i + brad * (2 * i + 1) - rh / 100,
				           3 * i + j + 1);
        p.attr({font: "200 " + rh * 25 / 476 + "px Helvetica neue, sans-serif"});
    }
}

buttons[3 * i] = paper.circle(blef + bvsp + brad * 3,
                              btop + bvsp * 3 + brad * 7,
                              brad);

for (var b in buttons) {
	buttons[b].attr(nattr);
	(function (b, n) {
		b[0].onmousedown = function() { b.animate(hlattr, 200); };
		b[0].onmouseup = function() { b.animate(nattr, 200); };
		b[0].onmouseleave = function() { b.animate(nattr, 200); };
	})(buttons[b], b);
}

// var p = paper.text(blef + brad, btop + brad, "8");
// p.attr({font: "200 " + rh * 25 / 476 + "px Helvetica neue, sans-serif"});

/* var trad = rw *  5 / 256;
var tlef = rw * 99 / 320;
var thsp = rw * 24 / 320;
var ttop = rh * 103 / 568;

for (var i = 0; i < 4; i ++)
    drawCircle(tlef + thsp * i + trad * (2 * i + 1),
               ttop + trad,
               trad); */