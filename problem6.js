import inventory from './inventory.js'

export function problem6(inventory){

    const BMWandAudi = inventory.filter(car=>['BMW','Audi'].includes(car.car_make));
    return BMWandAudi;


}




   // let BMWAndAudi = [];
   // for(let i=0;i<inventory.length;i++){

   //    if (['BMW', 'Audi'].includes(inventory[i].car_make)){
   //      BMWAndAudi.push(inventory[i]);
   //    }
   // }
   // return BMWAndAudi;
