import { Car } from './module_export'

let voiture: Car = new Car("RAV4", "Toyota", "Grise", 2009, 50, true);

voiture.start();       // Voiture démarrée
voiture.accelerate(10); // 60
voiture.stop();        // Voiture arrêtée
