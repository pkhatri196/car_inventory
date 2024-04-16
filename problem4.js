import inventory from './inventory.js';

export function problem4(inventory){
  
    const yearInventory = inventory.map(car =>{
        return car.car_year;
    });
    return yearInventory;

}
//    let yearInventory = [];

//    for(let i=0;i<inventory.length;i++){
//        yearInventory.push(inventory[i].car_year);

//    }
//    return yearInventory;


