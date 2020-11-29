"use strict";
var myself = {
    name: "Amanuel",
    hobbies: ["violine", "cooking"],
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
myself.deposit(3000);
console.log("Homework 3 question number 2");
console.log(myself);
