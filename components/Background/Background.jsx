import React from 'react';
require("./Background.css");

export default React.createClass ({
    componentDidMount: function() {
        window.addEventListener('resize', this.resize);
        this.resize();
    },
    
    resize: function() {
        var canvas = this.refs['canvasBackground'];
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        this.draw();
    },
    
    presetO: function (x, y, s, dx, dy) {
        return {
            x: x,
            y: y,
            r: 12 * s,
            w: 5 * s,
            dx: dx,
            dy: dy,
            draw: function(ctx, t) {
                this.x += this.dx;
                this.y += this.dy;
                
                ctx.beginPath();
                ctx.arc(this.x + + Math.sin((50 + x + (t / 10)) / 100) * 3, this.y + + Math.sin((45 + x + (t / 10)) / 100) * 4, this.r, 0, 2 * Math.PI, false);
                ctx.lineWidth = this.w;
                ctx.strokeStyle = '#fff';
                ctx.stroke();
            }
        }
    },
    
    presetX: function (x, y, s, dx, dy, dr, r) {
        r = r || 0;
        return {
            x: x,
            y: y,
            s: 20 * s,
            w: 5 * s,
            r: r,
            dx: dx,
            dy: dy,
            dr: dr,
            draw: function(ctx, t) {
                this.x += this.dx;
                this.y += this.dy;
                this.r += this.dr;
                
                var _this = this;
                var line = function(x, y, tx, ty, c, o) {
                    o = o || 0;
                    ctx.beginPath();
                    ctx.moveTo(-o + ((_this.s / 2) * x), o + ((_this.s / 2) * y));
                    ctx.lineTo(-o + ((_this.s / 2) * tx), o + ((_this.s / 2) * ty));
                    ctx.lineWidth = _this.w;
                    ctx.strokeStyle = c;
                    ctx.stroke();
                };
                
                ctx.save();
                
                ctx.translate(this.x + Math.sin((x + (t / 10)) / 100) * 5, this.y + Math.sin((10 + x + (t / 10)) / 100) * 2);
                ctx.rotate(this.r * Math.PI / 180);
                
                line(-1, -1, 1, 1, '#fff');
                line(1, -1, -1, 1, '#fff');
                
                ctx.restore();
            }
        }
    },
    
    draw: function() {
        var canvas = this.refs['canvasBackground'];
        var ctx = canvas.getContext('2d');
        var elements = [];
        
        for(var x = 0; x < canvas.width; x++) {
            for(var y = 0; y < canvas.height; y++) {
                if(Math.round(Math.random() * 8000) == 1) {
                    var s = ((Math.random() * 5) + 1) / 10;
                    if(Math.round(Math.random()) == 1)
                        elements.push(this.presetO(x, y, s, 0, 0));
                    else
                        elements.push(this.presetX(x, y, s, 0, 0, ((Math.random() * 3) - 1) / 10, (Math.random() * 360)));
                }
            }
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var time = new Date().getTime();
        for (var e in elements) {
            elements[e].draw(ctx, time);
        }
    },
    
	render: function() {
        return (
            <canvas ref="canvasBackground" className="canvasBackground"></canvas>
        );
	}
});