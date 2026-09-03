import { Item } from "../types/items";

let Items: Item[] = [];

let currentId = 0;

export const getItems = (): Item[] => {
  return Items;
};

export const getItemById = (id: number): Item | undefined => {
  const item = Items.find((item) => item.id === id);

  return item;
};

export const addItem = (name: string,quantity: number,price: number,): Item => {
    
  const newItem: Item = { id: currentId++, name, quantity, price };
  Items.push(newItem);
  return newItem;
};
