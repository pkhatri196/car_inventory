 // Import the function to find car by ID
import inventory from './inventory.js';
import { problem1} from './problem1.js';

// Calling the function to find the car with ID 33 
const car33 = problem1(inventory,33);

// Display the car's details if found
if (car33) {
    console.log(`Car 33 is a ${car33.car_year} ${car33.car_make} ${car33.car_model}`);
} else {
    console.log("Car with ID 33 not found in inventory.");
}


