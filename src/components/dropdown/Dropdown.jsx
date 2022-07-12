import './dropdown.scss'
import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'
import {useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {CartContext} from '../../contexts/cart.context'

function Dropdown() {
  const {cartItems} = useContext(CartContext)

  const navigate = useNavigate();
  const goToCheckout = ()=> {
    navigate('/checkout')
  }


  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
      {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
      </div>
      <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
    </div>
  )
}

export default Dropdown
