// Task 1: TypeScript Environment and Usage
console.log("Hello World!\n");

// Task 2: Creating type TVehicle 
type TVehicle = {
    model: string;
    color: string;
    year: number;
    power: number;
};
const vehicle = {
    model: "Boring generic vehicle",
    color: "Red",
    year: 1993,
    power: 60
};
console.log(vehicle, "\n");

// Task 3: Extending Interface
interface IVehicle {
    model: string;
    color: string;
    year: number;
    power: number;
}
interface ICar extends IVehicle {
    bodyType: string;
    wheelCount: number;
}
interface IBoat extends IVehicle {
    draft: number;
}
interface IPlane extends IVehicle {
    wingspan: number;
}

const newCar = {
    model: "Ford focus", 
    color: "Green", 
    year: 2016, 
    power: 150, 
    bodyType: "Hatchback", 
    wheelCount: 4 
};
console.log(newCar);

const newPlane = {
    model: "Boeing 777", 
    color: "White", 
    year: 2020, 
    power: 170000, 
    wingspan: 65 
}
console.log(newPlane);

const newBoat = {
    model: "Bella",
    color: "Black",
    year: 2022,
    power: 100,
    draft: 0.42
}
console.log(newBoat); 

// Task 4: Generic Vehicle Service
class VehicleService<T> {
    private items: T[] = [];
    add(vehicle: T): void {
        this.items.push(vehicle);
    }
    list(): T[] {
        return this.items;
    }
}
const cars = new VehicleService<ICar>();
const boats = new VehicleService<IBoat>();
cars.add(newCar);
boats.add(newBoat);
console.log(cars.list());
console.log(boats.list());