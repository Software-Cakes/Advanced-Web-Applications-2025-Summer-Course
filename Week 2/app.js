"use strict";
// Task 1: TypeScript Environment and Usage
console.log("Hello World!\n");
const vehicle = {
    model: "Boring generic vehicle",
    color: "Red",
    year: 1993,
    power: 60
};
console.log(vehicle, "\n");
const newCar = {
    model: "Ford focus",
    color: "Green",
    year: 2016,
    power: 150,
    bodyType: "Hatchback",
    wheelCount: 4
};
console.log("Car:", newCar, "\n");
const newPlane = {
    model: "Boeing 777",
    color: "White",
    year: 2020,
    power: 170000,
    wingspan: 65
};
console.log("Plane:", newPlane, "\n");
const newBoat = {
    model: "Bella",
    color: "Black",
    year: 2022,
    power: 100,
    draft: 0.42
};
console.log("Boat:", newBoat, "\n");
// Task 4: Generic Vehicle Service
class VehicleService {
    constructor() {
        this.items = [];
    }
    add(vehicle) {
        this.items.push(vehicle);
    }
    list() {
        return this.items;
    }
}
const cars = new VehicleService();
const boats = new VehicleService();
cars.add(newCar);
boats.add(newBoat);
console.log("Cars list:", cars.list());
console.log("Boats list:", boats.list());
