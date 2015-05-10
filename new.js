var Keypad = function() {
    this.ctx = null,
    this.code = null,
    this.state = null,                  // enum?
    this.winw = window.innerWidth;
    this.winh = window.innerHeight;
    this.buttons = [
        new Button(1, 3, ""),
        new Button(0, 0, ""),
        new Button(1, 0, "A B C"),
        new Button(2, 0, "D E F"),
        new Button(0, 1, "G H I"),
        new Button(1, 1, "J K L"),
        new Button(2, 1, "M N O"),
        new Button(0, 2, "P Q R S"),
        new Button(1, 2, "T U V"),
        new Button(2, 2, "W X Y Z"),
    ];
    this.oububble = [];
    this.oumode = 4;
    this.upattr = {
        fill: "#fff",
        stroke: "#000",
        "fill-opacity": 0
    };
    this.downattr = {
        fill: "#000",
        stroke: "#000",
        "fill-opacity": 0.7
    };
    this.invattr = {
        fill: "#fff",
        stroke: "#fff"
    };

    if (this.winw * 1.775 > this.winh) {
        this.keyw = this.winh / 1.775;
        this.keyh = this.winh;
    }
    else {
        this.keyw = this.winw;
        this.keyh = this.keyw * 1.775;
    }

    this.buttonM = {
        left: this.keyw * 11 / 128,
        top: this.keyh * 163 / 568,
        hsp: this.keyw * 8 / 128,
        vsp: this.keyh * 13 / 568,
        rad: this.keyw * 15 / 128
    };
    this.oububbleM = {
        left: this.keyw * 239 / 1280,
        top: this.keyh * 103 / 568,
        hsp: this.keyw * 24 / 320,
        rad: this.keyh * 5 / 256
    };
};

// XXX this function only works for 10 buttons in an exact config
Keypad.prototype.draw = function() {
    this.ctx = Raphael((this.winw - this.keyw) / 2, 0, this.keyw, this.keyh);
    var bm = this.buttonM;

    for (var bpi in this.buttons) {
        var bp = this.buttons[bpi];
        var y = position(bm.left, bm.hsp, bm.rad, bp.posy);
        var x = position(bm.top, bm.vsp, bm.rad, bp.posx);

        var n = this.ctx.text(y, x - this.keyh / 60, bpi)
                .attr({font: "200 " + this.keyh * 33 / 523 + "px Helvetica neue, sans-serif"});
        n.node.setAttribute("class", "noselect");

        var t = this.ctx.text(y, x + this.keyh / 35, bp.caption)
                .attr({font: "400 " + this.keyh * 10 / 523 + "px Helvetica neue, sans-serif"});
        t.node.setAttribute("class", "noselect");

        var b = this.ctx.circle(y, x, bm.rad).attr(this.upattr);
        (function (b, k) {
            b[0].onmousedown = function() { b.down = true; b.animate(k.downattr, 50); };
            b[0].onmouseup = function() { b.down = false; b.animate(k.upattr, 500); };
            b[0].onmouseleave = function() { if (b.down) b[0].onmouseup() };
        })(b, this);
    }

    this.ouredraw();
};

Keypad.prototype.ouredraw = function() {
    
};

function position(a, b, c, d) {
    return (a + b * d + c * (2 * d + 1));
}

function Button(posy, posx, caption) {
    this.posy = posy;
    this.posx = posx;
    this.caption = caption;
}

/*
var paper = Raphael((ww - rw) / 2, 0, rw, rh);

for (var i = 0; i < 3; i ++) {
    for (var j = 0; j < 3; j ++) {
        var p = paper.text(blef + bhsp * j + brad * (2 * j + 1),
        		           btop + bvsp * i + brad * (2 * i + 1) - rh / 60,
        		           3 * i + j + 1);
        p.attr({font: "200 " + rh * 33 / 523 + "px Helvetica neue, sans-serif"});
        p.node.setAttribute("class", "noselect");
        var t = paper.text(blef + bhsp * j + brad * (2 * j + 1),
                           btop + bvsp * i + brad * (2 * i + 1) + rh / 35,
                           caption[3 * i + j]);
        t.attr({font: "400 " + rh * 10 / 523 + "px Helvetica neue, sans-serif"});
        t.node.setAttribute("class", "noselect");
        buttons[3 * i + j] = paper.circle(blef + bhsp * j + brad * (2 * j + 1),
                                          btop + bvsp * i + brad * (2 * i + 1),
                                          brad);
    }
}

buttons[3 * i] = paper.circle(blef + bhsp + brad * 3,
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

var ou = []

for (var i = 0; i < 4; i ++) {
    var b = paper.circle(tlef + thsp * i + trad * (2 * i + 1),
                         ttop + trad,
                         trad);
    b.attr(nattr);
    ou[i] = b;
}
*/
