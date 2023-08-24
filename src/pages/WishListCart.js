import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWish } from '../store/wishListCartSlice';
import PageTitle from './PageTitle';

const WishListCart = () => {
  const wishListProducts = useSelector(state => state.wishList);
  const dispatch = useDispatch();

  const handleRemove = (productId) =>{
    dispatch(removeFromWish(productId));
}

  return (
    <div className='home-cart-body'>
      <PageTitle title='Wish list'/>
      <div className='cartWrapper'>
        {wishListProducts.length <= 0 ? (
          <h3>Wish list is empty</h3>
        ) : (wishListProducts.map(product =>(
            <div className='cartCard' key={product?.id}>
              <img src={product?.images[0]} alt={product?.title}/>
              <h4>{product?.title}</h4>
              <h5>${product?.price}</h5>
              <button className='btn' onClick={()=> handleRemove(product?.id)}>Remove from wish list</button>
            </div>
        )))}
      </div>
    </div>
  )
}

export default WishListCart;