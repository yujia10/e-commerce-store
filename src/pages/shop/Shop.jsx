import {useContext} from 'react';
import {ProductsContext} from '../../contexts/products.context'
import Product from '../../components/product/Product'
import './shop.scss'


function Shop() {
  const {products} = useContext(ProductsContext);
  return (
    <div className='products-container'>
      {products.map((product) => (
        <Product key={product.id} product={product}/>
      ))}
    </div>
  )
}

export default Shop
