
// Classe Car avec comme propriétés : model, brand, color, year, speed, started
export default class Car {
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

    // La méthode start allume le véhicule (et donc le moteur)
    start(): void{
        if (!this.started){
            this.started = true;
        }
        console.log("Voiture démarrée !")
    }

    // La méthode stop arrête le véhicule (coupage du moteur)
    stop(): void{
        if (this.started){
            this.started = false;
        }
        console.log("Voiture arrêtée et moteur coupé. ");
    }

    // La méthode immobility permet de mettre son véhicule à l'arrêt sans pour autant couper le moteur : elle est utile lorsqu'on veut passer la marche arrière par exemple.
    immobility(): void{
        if (this.speed != 0){
            this.speed = 0;
            console.log("Vous freinez jusqu'à immobilité totale du véhicule. Votre nouvelle vitesse est donc de 0 km/h.");
        }
        else {
            console.log("Votre véhicule est déjà immobile (vitesse de 0 km/h).");
        }
    }

    // Méthode accelerate qui prend en argument une acceleration et qui ajoute cette accélération à la vitesse actuelle de la voiture
    accelerate(acceleration: number): void{
        this.speed += acceleration;
        console.log("Vous accélérez ! La nouvelle vitesse de la voiture est de : ",this.speed, "km/h.");
    }

    // La méthode slowDown permet de faire ralentir le véhicule : elle prend en argument une vitesse qu'elle va soustraire à la vitesse actuelle du véhicule
    slowDown(decceleration: number): void{
        if (this.speed != 0){
            this.speed -= decceleration;
            console.log("Vous ralentissez ! La nouvelle vitesse de la voiture est de : ",this.speed," km/h.");
        }
        else {
            console.log("Vous êtes déjà immobile, vous ne pouvez pas ralentir ...");
        }
    }

    // La méthode reverse permer au véhicule de faire marche arrière. Il n'est possible de l'utiliser que lorsque le véhicule est immobile.
    reverse(reverse_speed: number): void{
        if (this.speed === 0){
            this.speed = reverse_speed;
            console.log("Vous venez de passer la marche arrière et vous reculez à une vitesse de : ",Math.abs(this.speed)," km/h.");
        }
        else {
            console.log("Vous ne pouvez pas passer la marche arrière tant que vous avancez ! Il faut que votre véhicule soit à l'arrêt total avant de pouvoir reculer.");
        }
    }

    // Méthode affichant les caractéristiques du véhicule
    caracteristics(): void{
        console.log("Cette voiture est une ",this.brand," ",this.model," ",this.color," de ",this.year,".");
        if (this.started){
            console.log("Elle est initialement démarrée et sa vitesse initiale est de ",this.speed," km/h.");
        }
        if (!this.started && this.speed != 0){
            this.speed = 0; // Gestion de l'erreur si l'utilisateur indique que la voiture à une vitesse initiale non nulle alors qu'elle est à l'état ARRÊT.
            console.log("Elle est initialement arrêtée et n'a donc pas de vitesse initiale.");
        }
    }

    // Méthode qui permet au véhicule de klaxonner 
    honk(): void{
        console.log("TUT TUT !!");
    }

    changePaint(new_color: string): void{
        this.color = new_color;
        console.log("Vous avez repeint votre véhicule en ",this.color,".");
    }


}
