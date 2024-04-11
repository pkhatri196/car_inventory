
import inventory from "./inventory.js";

export function problem1(inventory,id){
    for(let i=0;i<inventory.length;i++){
        if(inventory[i].id===id){
            return inventory[i];
        }
    }
    return null;
}