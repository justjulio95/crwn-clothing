import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CartContext } from '../contexts/cart.context'
import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import { CartIconContainer, ItemCount } from './cart-icon.styles'

const CartIcon = () => {
  const dispatch = useDispatch()
  const { cartCount } = useContext(CartContext)
  const isCartOpen = useSelector(selectIsCartOpen);
  // const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon