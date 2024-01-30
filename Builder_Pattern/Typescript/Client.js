"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car_1 = require("./Car");
var Director_1 = require("./Director");
function ClientCode() {
    var sedan = Car_1.Car.getBuilder()
        .setCarType("Sedan")
        .setSeats(5)
        .setEngine("V8")
        .setTransmission("Automatic")
        .setTripComputer("Basic Trip Computer")
        .setGpsNavigator("Standard GPS")
        .build();
    var director = new Director_1.Director();
    var suv = director.constructSUV();
    var sportsCar = director.constructSportsCar();
    console.log(sedan);
    console.log(suv);
    console.log(sportsCar);
}
ClientCode();
