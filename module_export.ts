export class Car {
    model: string;
    brand: string;
    color: string;
    year: number;
    speed: number;
    started: boolean;

    // Constructeur initialisant ces prorpiétés
    constructor(model: string, brand: string, color: string, year: number, speed: number, started: boolean) {
        this.model = model;
        this.brand = brand;
        this.color = color;
        this.year = year;
        this.speed = speed;
        this.started = started;
    }

    // Méthode start qui met le booléen started à true
    start(): void{
        this.started = true;
        console.log("Voiture démarrée")
    }

    // Méthode stop qui met le booléen started à false
    stop(): void{
        this.started = false;
        console.log("Voiture arrêtée")
    }

    // Méthode accelerate qui prend en argument une acceleration et qui ajoute cette accélération à la vitesse initiale de la voiture
    accelerate(acceleration: number): void{
        this.speed += acceleration;
        console.log("La nouvelle vitesse de la voiture est de : ",this.speed, "km/h");
    }
} 