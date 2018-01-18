"use strict";

//arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    console.log(arguments); //this will throw an error with arrow function
    //arguments were available in ES5 
    return a + b;
};
console.log(add(45, 1));

var addArrow = function addArrow(a, b) {
    return a + b;
};
console.log(addArrow(867, 789));

//this keyword -  no longer bound with arrow function as well

var user = {
    name: "Andrew",
    cities: ["Philadelphia", "New York", "Dublin"],
    printPlacesLived: function printPlacesLived() {
        var that = this;
        this.cities.forEach(function (city) {
            console.log(that.name + " has lived in " + city);
        });
    }
};
//if it's not an arrow function we need to find a workaround to make "this" so we assign 
//it to the const "that"
user.printPlacesLived();

//with arrow function though it will work:

var user1 = {
    name: "Andy",
    cities: ["Philadelphia", "New York", "Dublin"],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        //we cannot use an arrow function in here as we will lose access to this.cities
        this.cities.forEach(function (city) {
            console.log(_this.name + " has lived in " + city);
        });
    }
};
user1.printPlacesLived();

//ES6 method definition syntax:
var user2 = {
    name: "Amy",
    cities: ["Philadelphia", "New York", "Dublin"],
    printPlacesLived: function printPlacesLived() {
        var _this2 = this;

        this.cities.forEach(function (city) {
            console.log(_this2.name + " has lived in " + city);
        });
    }
};
user2.printPlacesLived();

//.map method solution instead of forEach means transforming and geeting a new array back:
var user3 = {
    name: "Amelia",
    cities: ["Philadelphia", "New York", "Dublin"],
    printPlacesLived: function printPlacesLived() {
        var _this3 = this;

        return this.cities.map(function (city) {
            return _this3.name + " has visited " + city;
        });
        //we can assign it to the variable or we may return it directly
    }
};
console.log(user3.printPlacesLived());

//Challenge:
var multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply: function multiply() {
        var _this4 = this;

        return this.numbers.map(function (number) {
            return number * _this4.multiplyBy;
        });
    }
    //numbers - array of numbers
    //multiplyBy - single number
    //multiply - return a new arry where the numbers have been multiplied

};
console.log(multiplier.multiply());
