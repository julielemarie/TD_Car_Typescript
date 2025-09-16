# TD_Car_Typescript
TD noté Typescript à rendre le 16/09/2025

Code entièrement commenté et expliqué.

Pour lancer le script, taper dans le terminal les commandes suivantes : 
tsc Car.ts
node Car.js
tsc testCar.ts
node testCar.js

## Classe Car
### Prérequis : 
- propriétés brand, model, color, year, speed, started
- constructeur initialisant ces propriétés
- méthodes start, stop, accelerate, deccelerate (que j'ai appelé slowDown)

### Choses que j'ai ajoutées : 
- dans la méthode slowDown() : gestion du cas où on fait ralentir la voiture alors qu'elle est déjà immobile.
- méthode immobility() : permet de mettre la vitesse du véhicule à 0km/h --> immobilisation du véhicule sans couper le moteur comme le ferait la méthode stop().
- méthode reverse(reverse_speed) : permet au véhicule de faire marche arrière. Prend en argument une vitesse négative. Possible uniquement si le véhicule est déjà immobile. 
- méthode caracteristics() : affiche les caractéristiques du véhicule et gère les erreurs d'incompatibilité s'il y a entre vitesse initiale et état initial du véhicule. Exemple: mettre une vitesse initiale non nulle et mettre un état initial arrêté --> impossible 
- méthode honk() : permet au véhicule de klaxonner.
- méthode changePaint(new_color) : permet de changer la couleur du véhicule.

## testCar
Création de 3 nouvelles voitures différentes.

Avec la première voiture, test des fonctionnalités suivantes : 
- affichage des caractéristiques 
- accélération
- ralentissement
- tentative de passer la marche arrière alors que la voiture roule 
- arrêt complet de la voiture 

Avec la 2e voiture, test des fonctionnalités suivantes : 
- affichage des caractéristiques
- accélération
- tentative de passer la marche arrière alors que la voiture roule
- immobilisation du véhicule 
- marche arrière
- klaxon

Avec la 3e voiture, test des fonctionnalités suivantes : 
- affichage des caractéristiques avec gestion de l'erreur de correspondance entre vitesse initiale et état initial
- changement de couleur de la voiture 
- ralentissement avec gestion du cas où la voiture est déjà arrêtée