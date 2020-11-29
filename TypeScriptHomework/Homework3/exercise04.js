"use strict";
var rectangle = /** @class */ (function () {
    function rectangle() {
    }
    rectangle.calcSize = function () {
        return this.width * this.length1;
    };
    ;
    rectangle.width = 0;
    rectangle.length1 = 0;
    return rectangle;
}());
;
rectangle.width = 5;
rectangle.length1 = 2;
console.log("Homework 3 question number 4 solution number 1");
console.log(rectangle.calcSize()); // 10
