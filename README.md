# TD_Car_Typescript
TD noté Typescript à rendre le 16/09/2025

Code entièrement commenté et expliqué.

## Classe Car
Prérequis : 
- propriétés brand, model, color, year, speed, started
- constructeur initialisant ces propriétés
- méthodes start, stop, accelerate, deccelerate (que j'ai appelé slowDown)

Choses que j'ai ajoutées : 
- méthode immobility() : permet de mettre la vitesse du véhicule à 0km/h --> immobilisation du véhicule sans couper le moteur comme le ferait la méthode stop().
- méthode reverse(reverse_speed) : permet au véhicule de faire marche arrière. Prend en argument une vitesse négative. Possible uniquement si le véhicule est déjà immobile. 
- méthode caracteristics() : affiche les caractéristiques du véhicule et gère les erreurs d'incompatibilité s'il y a entre vitesse initiale et état initial du véhicule. Exemple: mettre une vitesse initiale non nulle et mettre un état initial arrêté --> impossible 
- méthode honk() : permet au véhicule de klaxonner.
- méthode changePaint(new_color) : permet de changer la couleur du véhicule.