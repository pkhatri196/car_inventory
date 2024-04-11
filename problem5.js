import inventory from './inventory.js';

export function problem5(inventory){
   let oldCarsInventory =[];

   for(let i=0;i<inventory.length;i++){
    if(inventory[i].car_year<2000)
       oldCarsInventory.push(inventory[i]);

   }
   return oldCarsInventory;
}
