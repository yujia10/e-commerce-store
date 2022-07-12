import {ReactComponent as Icon} from '../../assets/shopping-bag.svg'
import './cart-icon.scss'
import {useContext} from 'react'
import {CartContext} from '../../contexts/cart.context'

function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleCartOpen = ()=>{
    setIsCartOpen(!isCartOpen)
  }
  return (
    <div className='cart-icon-container' onClick={toggleCartOpen}>
      <Icon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon
