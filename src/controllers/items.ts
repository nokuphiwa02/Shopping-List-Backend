import { Item } from "../types/items";

let Items: Item[] = [];

let currentId = 1;

export const getItems = (): Item[] => {
  return Items;
};

export const getItemById = (id: number): Item | undefined => {
   const item = Items.find((item) => item.id === id);

   return item;
}

export const addItem = (name: string, quantity: number, price: number): Item => {
    const newItem: Item = {id: currentId++, name, quantity, price};
    Items.push(newItem);
    currentId++;
    return newItem;
}

export const updateItem = (id: number, updates: Partial<Omit<Item, "id">>): Item | undefined =>{
const item = getItemById(id);
if(!item) return undefined;

if(updates.name !== undefined) item.name = updates.name;
if(updates.price !== undefined) item.price = updates.price;
if(updates.quantity !== undefined) item.quantity = updates.quantity;

return item;
}
