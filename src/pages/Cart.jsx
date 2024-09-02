import React, { useContext } from 'react'
import './Cart.css'
import Footer from '../components/Footer';

import Navbar from '../components/Navbar'
import DataContext from './DataContext'

function Cart() {
  const { itemsToCart } = useContext(DataContext);
  const totalPrice = itemsToCart.reduce((total, items) => total += items.totalPrice, 0);

  return (
    <>
      <Navbar />
      <div className='cart__container'>
        <table>
          <thead>
            <tr>
              <th>Product List</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {itemsToCart.map((items, index) => (
                <tr key={index}>
                  <td>
                    <img src={items.item.product__url}/>
                    <div className='product__name__and__size'>
                      <td>{items.item.product__name}</td>
                      <td>{items.size}</td>
                    </div>
                  </td>
                  <td>${items.item.product__price.toFixed(2)}</td>
                  <td>{items.quantity}</td>
                  <td>{items.totalPrice.toFixed(2)}</td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
      <section className='subtotal__out'>
        <section className='subtotal__in'>
          <p>SUBTOTAL ${totalPrice.toFixed(2)}</p>
          <p>or 4 interest-free installments of ${totalPrice.toFixed(2) / 4} by 
            <img src="https://static.afterpay.com/integration/product-page/logo-afterpay-colour.png"/>
          </p>
          <p style={{fontStyle: 'italic'}}>Shipping & taxes calculated at checkout</p>
          <button>CHECK OUT</button>
        </section>
      </section>
      <Footer />
    </>
  )
}

export default Cart