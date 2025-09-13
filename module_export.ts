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

    slowDown(decceleration: number): void{
        this.speed -= decceleration;
        console.log("La nouvelle vitesse de la voiture est de : ",this.speed," km/h");
    }

    initialConditions(): void{
        console.log("Cette voiture est une ",this.brand," ",this.model," ",this.color," de ",this.year);
        if (this.started === true){
            console.log("Elle est initialement démarrée et sa vitesse initiale est de ",this.speed," km/h");
        }
        if (this.started === false){
            console.log("Elle est initialement arrêtée et n'a donc pas de vitesse initiale");
        }
    }

} 