import './product.scss'
import Button from '../button/Button'
import {useContext} from 'react'
import {CartContext} from '../../contexts/cart.context'

function Product({product}) {
  const {name,price,imageUrl} = product;
  const {addItemToCart} = useContext(CartContext)

  const addToCart = ()=>addItemToCart(product);
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name}/>
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={addToCart}>Add to cart</Button>
    </div>
  )
}

export default Product
