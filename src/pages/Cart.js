import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice';
import PageTitle from './PageTitle';

const Cart = () => {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) =>{
    dispatch(remove(productId));
}
  return (
    <div className='home-cart-body'>
      <PageTitle title='Cart items'/>
      <div className='cartWrapper'>
        {products.length <= 0 ? (
          <h3>Cart list is empty</h3>
        ) : (
        products.map(product =>(
            <div className='cartCard' key={product?.id}>
              <img src={product?.images[0]} alt={product?.title}/>
              <h4>{product?.title}</h4>
              <h5>${product?.price}</h5>
              <button className='btn' onClick={()=> handleRemove(product?.id)}>Remove</button>
            </div>
        )))}
      </div>
    </div>
  )
}

export default Cart