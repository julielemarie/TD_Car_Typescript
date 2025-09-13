"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var module_export_1 = require("./module_export");
var voiture = new module_export_1.Car("RAV4", "Toyota", "Grise", 2009, 50, true);
voiture.start(); // Voiture démarrée
voiture.accelerate(10); // 60
voiture.stop(); // Voiture arrêtée
