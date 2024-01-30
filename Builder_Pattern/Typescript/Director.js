"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Director = void 0;
var Car_1 = require("./Car");
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.constructSportsCar = function () {
        return Car_1.Car.getBuilder()
            .setCarType("Sports Car")
            .setSeats(2)
            .setEngine("Powerful Engine")
            .setTransmission("Automatic")
            .setTripComputer("Advanced Trip Computer")
            .setGpsNavigator("GPS with Navigation System")
            .build();
    };
    Director.prototype.constructSUV = function () {
        return Car_1.Car.getBuilder()
            .setCarType("SUV")
            .setSeats(5)
            .setEngine("Fuel Efficient Engine")
            .setTransmission("Manual")
            .setTripComputer("Basic Trip Computer")
            .setGpsNavigator("Standard GPS")
            .build();
    };
    return Director;
}());
exports.Director = Director;
