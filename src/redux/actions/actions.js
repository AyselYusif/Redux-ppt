import { ADD_GOOD_TO_CART, REMOVE_GOOD_TO_CART } from "./actions-type";

export const addGood = (payload) => ({
  type: ADD_GOOD_TO_CART,
  payload,
});

export const removeGood = (payload) => ({
  type: REMOVE_GOOD_TO_CART,
  payload,
});
