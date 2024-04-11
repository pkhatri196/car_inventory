import inventory from './inventory.js';

//Using simple bubble sort to sort the list by model name

export function problem3(inventory){
   for (let i = 0; i < inventory.length - 1; i++) {
    for (let j = 0; j < inventory.length - i - 1; j++) {
        if (inventory[j].car_model>inventory[j + 1].car_model > 0) {
            const temp = inventory[j];
            inventory[j] = inventory[j + 1];
            inventory[j + 1] = temp;
        }
    }
}
return inventory;
}