import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

/* ************** HELPER FUNCTIONS ******************** */

const addCartItem = (cartItems, productToAdd) => {
  // create a variable for existing cartItem
  const existingItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

  // if the cartItem exists
  if (existingItem) {
    // map through the cartItems ==> check to see if the item id matches
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id
      // if truthy return cartItems and increase the quantity + 1
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      // if falsy, return the cart item
      : cartItem
    )
  }
  // return the existing cartItems along with the product to add and initialize quantity to 1
  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  // create a variable for existing cartItem
  const existingItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)

  if (existingItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id
    // if truthy return cartItems and increase the quantity + 1
    ? { ...cartItem, quantity: cartItem.quantity - 1 }
    // if falsy, return the cart item
    : cartItem
  )
}

const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

/* ************** HELPER FUNCTIONS ******************** */

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const setIsCartOpen = (bool) => 
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool)