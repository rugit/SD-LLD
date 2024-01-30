"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(builder) {
        this.fuel = 0;
        this.carType = builder.getCarType();
        this.seats = builder.getSeats();
        this.engine = builder.getEngine();
        this.transmission = builder.getTransmission();
        this.tripComputer = builder.getTripComputer();
        this.gpsNavigator = builder.getGpsNavigator();
    }
    Car.getBuilder = function () {
        return new Builder();
    };
    Car.prototype.getCarType = function () {
        return this.carType;
    };
    Car.createCarFromBuilder = function (builder) {
        return new Car(builder);
    };
    return Car;
}());
exports.Car = Car;
var Builder = /** @class */ (function () {
    function Builder() {
    }
    Builder.prototype.setCarType = function (carType) {
        this.carType = carType;
        return this;
    };
    Builder.prototype.getCarType = function () {
        return this.carType;
    };
    Builder.prototype.setSeats = function (seats) {
        this.seats = seats;
        return this;
    };
    Builder.prototype.getSeats = function () {
        return this.seats;
    };
    Builder.prototype.setEngine = function (engine) {
        this.engine = engine;
        return this;
    };
    Builder.prototype.getEngine = function () {
        return this.engine;
    };
    Builder.prototype.setTransmission = function (transmission) {
        this.transmission = transmission;
        return this;
    };
    Builder.prototype.getTransmission = function () {
        return this.transmission;
    };
    Builder.prototype.setTripComputer = function (tripComputer) {
        this.tripComputer = tripComputer;
        return this;
    };
    Builder.prototype.getTripComputer = function () {
        return this.tripComputer;
    };
    Builder.prototype.setGpsNavigator = function (gpsNavigator) {
        this.gpsNavigator = gpsNavigator;
        return this;
    };
    Builder.prototype.getGpsNavigator = function () {
        return this.gpsNavigator;
    };
    Builder.prototype.build = function () {
        return Car.createCarFromBuilder(this);
    };
    return Builder;
}());
