import { createContext, useState, useEffect } from "react";

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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItems: [],
  addItemToCart: () => { },
  cartCount: 0
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setCartCount(newCartCount)
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}