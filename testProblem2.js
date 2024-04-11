import inventory from './inventory.js';
import { problem2} from './problem2.js';

const lastCar = problem2(inventory);

// Displaying the last car's make and model if found
if (lastCar) {
    console.log(`Last car is a ${lastCar.car_make} ${lastCar.car_model}`);
} else {
    console.log("No cars found in the inventory.");
}