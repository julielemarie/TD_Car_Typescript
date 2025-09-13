"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    // Constructeur initialisant ces prorpiétés
    function Car(model, brand, color, year, speed, started) {
        this.model = model;
        this.brand = brand;
        this.color = color;
        this.year = year;
        this.speed = speed;
        this.started = started;
    }
    // Méthode start qui met le booléen started à true
    Car.prototype.start = function () {
        this.started = true;
        console.log("Voiture démarrée");
    };
    // Méthode stop qui met le booléen started à false
    Car.prototype.stop = function () {
        this.started = false;
        console.log("Voiture arrêtée");
    };
    // Méthode accelerate qui prend en argument une acceleration et qui ajoute cette accélération à la vitesse initiale de la voiture
    Car.prototype.accelerate = function (acceleration) {
        this.speed += acceleration;
        console.log("La nouvelle vitesse de la voiture est de : ", this.speed, "km/h");
    };
    Car.prototype.slowDown = function (decceleration) {
        this.speed -= decceleration;
        console.log("La nouvelle vitesse de la voiture est de : ", this.speed, " km/h");
    };
    Car.prototype.initialConditions = function () {
        console.log("Cette voiture est une ", this.brand, " ", this.model, " ", this.color, " de ", this.year);
        if (this.started === true) {
            console.log("Elle est initialement démarrée et sa vitesse initiale est de ", this.speed, " km/h");
        }
        if (this.started === false) {
            console.log("Elle est initialement arrêtée et n'a donc pas de vitesse initiale");
        }
    };
    return Car;
}());
exports.Car = Car;
