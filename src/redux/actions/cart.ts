/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as types from "../constants";

export const addPizzaToCart = (pizzaObj: CartItem): CartAddAction => ({
  type: types.ADD_PIZZA_CART,
  payload: pizzaObj,
});

export const minusCartItem = (id: number): MinusCartItem => ({
  type: types.MINUS_CART_ITEM,
  id,
});

export const plusCartItem = (id: number): PlusCartItem => ({
  type: types.PLUS_CART_ITEM,
  id,
});

export const removeCartItem = (id: number): RemoveCartItem => ({
  type: types.REMOVE_CART_ITEM,
  id,
});

export const clearCart = (): ClearCart => ({
  type: types.CLEAR_CART,
});
