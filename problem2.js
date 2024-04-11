import inventory from './inventory.js';


export function problem2(inventory) {
    if (inventory.length > 0) {
        return inventory[inventory.length - 1];
    } else {
        return null; // Return null if the inventory is empty
    }
}