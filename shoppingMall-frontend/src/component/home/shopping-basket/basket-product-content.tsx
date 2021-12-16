import React from 'react';
import '../../../style/scss/basket.scss';

export type IBasket = {
  id: number,
  title: string,
  image: string,
  price: number,
  size: string,
  stock: number,
  color: string,
}

interface BasketIProps {
  cart : IBasket
}

const BasketProductContent = ({cart}: BasketIProps) => {
  
  return(
    <div className="basket-content">
      <div className="basket-content--image">
        <img src={cart.image} alt='' />
      </div>
      <div className="basket-content--subs">
        <div>
          <h3>{cart.title}</h3>
          <p>{cart.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</p>
        </div>
        <ul>
          <li>색상: {cart.color}</li>
          <li>사이즈: {cart.size}</li>
          <li>수량: {cart.stock}</li>
        </ul>
      </div>
      <div className="basket-content--delete">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
      </div>
    </div>  
  );}

export default BasketProductContent;