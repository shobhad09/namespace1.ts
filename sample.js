///<reference path="design.ts"/>
var Drawing;
(function (Drawing) {
    var Circle = (function () {
        function Circle() {
        }
        Circle.prototype.draw = function () {
            console.log("Circle is drawn");
        };
        return Circle;
    }());
    Drawing.Circle = Circle;
})(Drawing || (Drawing = {}));
///<reference path="design.ts"/>
///<reference path="circle.ts"/>
function drawAllShapes(shape) {
    shape.draw();
}
drawAllShapes(new Drawing.Circle());
