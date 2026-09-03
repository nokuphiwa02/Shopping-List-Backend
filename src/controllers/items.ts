import { Item } from "../types/items";

let Items: Item[] = [];

let currentId = 1;

export const getItems = (): Item[] => {
  return Items;
};