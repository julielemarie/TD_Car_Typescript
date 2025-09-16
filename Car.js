"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    // La méthode start allume le véhicule (et donc le moteur)
    Car.prototype.start = function () {
        if (!this.started) {
            this.started = true;
        }
        console.log("Voiture démarrée !");
    };
    // La méthode stop arrête le véhicule (coupage du moteur)
    Car.prototype.stop = function () {
        if (this.started) {
            this.started = false;
        }
        console.log("Voiture arrêtée et moteur coupé. ");
    };
    // La méthode immobility permet de mettre son véhicule à l'arrêt sans pour autant couper le moteur : elle est utile lorsqu'on veut passer la marche arrière par exemple.
    Car.prototype.immobility = function () {
        if (this.speed != 0) {
            this.speed = 0;
            console.log("Vous freinez jusqu'à immobilité totale du véhicule. Votre nouvelle vitesse est donc de 0 km/h.");
        }
        else {
            console.log("Votre véhicule est déjà immobile (vitesse de 0 km/h).");
        }
    };
    // Méthode accelerate qui prend en argument une acceleration et qui ajoute cette accélération à la vitesse actuelle de la voiture
    Car.prototype.accelerate = function (acceleration) {
        this.speed += acceleration;
        console.log("Vous accélérez ! La nouvelle vitesse de la voiture est de : ", this.speed, "km/h.");
    };
    // La méthode slowDown permet de faire ralentir le véhicule : elle prend en argument une vitesse qu'elle va soustraire à la vitesse actuelle du véhicule
    Car.prototype.slowDown = function (decceleration) {
        if (this.speed != 0) {
            this.speed -= decceleration;
            console.log("Vous ralentissez ! La nouvelle vitesse de la voiture est de : ", this.speed, " km/h.");
        }
        else {
            console.log("Vous êtes déjà immobile, vous ne pouvez pas ralentir ...");
        }
    };
    // La méthode reverse permer au véhicule de faire marche arrière. Il n'est possible de l'utiliser que lorsque le véhicule est immobile.
    Car.prototype.reverse = function (reverse_speed) {
        if (this.speed === 0) {
            this.speed = reverse_speed;
            console.log("Vous venez de passer la marche arrière et vous reculez à une vitesse de : ", Math.abs(this.speed), " km/h.");
        }
        else {
            console.log("Vous ne pouvez pas passer la marche arrière tant que vous avancez ! Il faut que votre véhicule soit à l'arrêt total avant de pouvoir reculer.");
        }
    };
    // Méthode affichant les caractéristiques du véhicule
    Car.prototype.caracteristics = function () {
        console.log("Cette voiture est une ", this.brand, " ", this.model, " ", this.color, " de ", this.year, ".");
        if (this.started) {
            console.log("Elle est initialement démarrée et sa vitesse initiale est de ", this.speed, " km/h.");
        }
        if (!this.started && this.speed != 0) {
            this.speed = 0; // Gestion de l'erreur si l'utilisateur indique que la voiture à une vitesse initiale non nulle alors qu'elle est à l'état ARRÊT.
            console.log("Elle est initialement arrêtée et n'a donc pas de vitesse initiale.");
        }
    };
    // Méthode qui permet au véhicule de klaxonner 
    Car.prototype.honk = function () {
        console.log("TUT TUT !!");
    };
    Car.prototype.changePaint = function (new_color) {
        this.color = new_color;
        console.log("Vous avez repeint votre véhicule en ", this.color, ".");
    };
    return Car;
}());
exports.default = Car;
