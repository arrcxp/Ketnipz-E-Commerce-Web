import React, { useContext, useState } from 'react'
import './ProductDetail.css'
import Footer from '../components/Footer';

import Navbar from '../components/Navbar'
import DataContext from './DataContext'


function ProductDetail() {
    const { itemstoProduct, sentItems } = useContext(DataContext);

    const [showImg, setShowImg] = useState(itemstoProduct[0]?.product__url || '');
    const handleClickImg = (item) => {
      setShowImg(item);
    };

    const [orderNumber, setOrderNumber] = useState(1);
    const plusOrder = () => setOrderNumber(orderNumber + 1);
    const minusOrder = () => setOrderNumber(orderNumber <= 0 ? 0 : orderNumber - 1);

    const [selectedSize, setSelectSize] = useState('Small')
    const handleSizeChange = (e) => {
      setSelectSize(e.target.value);
    }

    const addToCart = (item) => {
      const toCart = {
        item,
        size: selectedSize,
        quantity: orderNumber,
        totalPrice: orderNumber * item.product__price
      };
      sentItems(toCart);
    }

  return (
    <div>
      <Navbar />
      <ul>
        {itemstoProduct.map((item, index) => (
          <div className='productDetail__container' key={index}>
            <section className='productDetail__img__container'>
                <img src={showImg} />
              <section className='productDetail__img__box'>
                <img 
                  onClick={() => handleClickImg(item.product__url)} 
                  src={item.product__url} 
                  alt={item.product__name} />
                <img 
                  onClick={() => handleClickImg(item.product__url__hover)}
                  src={item.product__url__hover} 
                  alt={item.product__name}/>
                <img 
                  onClick={() => handleClickImg(item.product__url__others)}
                  src={item.product__url__others} 
                  alt={item.product__name}/>
              </section>
            </section>

            <section className='productDetail__information__container'>
              <div className='productDetail__information__box'>
                <div className='productDetail__context'>
                  <p>${item.product__price.toFixed(2)}</p>
                  <p>or 4 interest-free installments</p>
                  <p>OF ${item.product__price/4} BY <img src="https://static.afterpay.com/integration/product-page/logo-afterpay-colour.png"/></p>
                </div>
                <h1>{item.product__name}</h1>
                <label>SIZE</label><br/>
                <select value={selectedSize} onChange={handleSizeChange}>
                  <option value='Small'>Small</option>
                  <option value='Medium'>Medium</option>
                  <option value='Large'>Large</option>
                  <option value='X-Large'>X-Large</option>
                </select>
                <div className='productDetail__order__number'>
                  <div className='productDetail__order__number__box'>
                    <span className='order__number__minus'
                          onClick={minusOrder}>-</span>
                    <span className='order__number__nums'>{orderNumber}</span>
                    <span className='order__number__plus'
                          onClick={plusOrder}>+</span>
                  </div>
                </div>
                <div className='productDetail__btn__payment'>
                  <button onClick={() => addToCart(item)}>ADD TO CART • ${item.product__price.toFixed(2) * orderNumber}</button>
                  <button>Buy with Shop <span>Pay</span></button>
                  <a>More payment options</a>
                </div>
                <ul>
                  <li>Cotton/Polyester blend pullover hoodie</li>
                  <li>Lilac pullover hoodie with multi-color ink print </li>
                  <li>Featuring the ‘Teddy’ design</li>
                  <li>Click here to view size chart!</li>
                </ul>
              </div>
            </section>
          </div>
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default ProductDetail