// Classe Car avec comme propriétés : model, brand, color, year, speed, started
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
    };
    // Méthode stop qui met le booléen started à false
    Car.prototype.stop = function () {
        this.started = false;
    };
    // Méthode accelerate qui prend en argument une acceleration et qui ajoute cette accélération à la vitesse initiale de la voiture
    Car.prototype.accelerate = function (acceleration) {
        this.speed += acceleration;
        console.log(this.speed);
    };
    return Car;
}());
var voiture = new Car("RAV4", "Toyota", "Grise", 2009, 50, true);
console.log(voiture.accelerate(10));
