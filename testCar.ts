import Car from './Car'

let toyota: Car = new Car("RAV4", "Toyota", "Grise", 2009, 0, false);
let peugeot: Car = new Car("3008","Peugeot","Verte",2015,50,true);
let citroen: Car = new Car("C3","Citroen","Blanche",2010,100,false); // Mauvaise initialisation de la vitesse et de l'état pour tester la gestion d'erreur 

toyota.caracteristics(); // Affichage des caractéristiques de la voiture
toyota.accelerate(10); // Accélération de 10km/h supplémentaires
toyota.slowDown(10); // Ralentissement de 20km/h
toyota.reverse(-5); // Tentavive de passer la marche arrière
toyota.stop(); // voiture arrêtée
console.log(); // Saut de ligne entre les véhicules

peugeot.caracteristics(); // Affichage des caractéristiques de la voiture
peugeot.accelerate(30); // Accélération de 30km/h supplémentaires
peugeot.reverse(-3); // Tentative de passer la marche arrière
peugeot.immobility(); // Immobilisation du véhicule
peugeot.reverse(-3); // Marche arrière
peugeot.honk(); // Test du klaxon
console.log();

citroen.caracteristics();
citroen.changePaint("Marron");
citroen.slowDown(10);
