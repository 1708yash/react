import React from 'react'
import "./shopcart.css";
function Shopcart() {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <div>
          <h3>hello yash bhai</h3>
          <h2 className='checkout__titile'>Your Shopping Basket</h2>

          <div className='checkoutproduct'>
            <img src='https://m.media-amazon.com/images/I/61NM9hIawiL._AC_AA180_.jpg' className='checkoutproduct__img' alt='/' />

            <div className='checkoutproduct__info'>
              <p className='checkoutproduct__title'>Product Name</p>
              <p className='checkoutproduct__price'>
                <strong> $200.00*1=$200</strong>
              </p>
              <button>Remove from Basket</button>
            </div>
          </div>
          <div className='checkoutproduct'>
            <img src='https://m.media-amazon.com/images/I/61NM9hIawiL._AC_AA180_.jpg' className='checkoutproduct__img' alt='/' />

            <div className='checkoutproduct__info'>
              <p className='checkoutproduct__title'>Product Name</p>
              <p className='checkoutproduct__price'>
                <strong> $200.00*1=$200</strong>
              </p>
              <button>Remove from Basket</button>
            </div>
          </div>
          <div className='checkoutproduct'>
            <img src='https://m.media-amazon.com/images/I/61NM9hIawiL._AC_AA180_.jpg' className='checkoutproduct__img' alt='/' />

            <div className='checkoutproduct__info'>
              <p className='checkoutproduct__title'>Product Name</p>
              <p className='checkoutproduct__price'>
                <strong> $200.00*1=$200</strong>
              </p>
              <button>Remove from Basket</button>
            </div>
          </div>
          <div className='checkoutproduct'>
            <img src='https://m.media-amazon.com/images/I/61NM9hIawiL._AC_AA180_.jpg' className='checkoutproduct__img' alt='/' />

            <div className='checkoutproduct__info'>
              <p className='checkoutproduct__title'>Product Name</p>
              <p className='checkoutproduct__price'>
                <strong> $200.00*1=$200</strong>
              </p>
              <button>Remove from Basket</button>
            </div>
          </div>
        </div>
        <div className='checkout__right'>
          <div className='subtotal'>
            <p>Subtotal (2 items):<strong>$1299.00</strong></p>
            <small className='subtotal__gift'>
              <input type='checkbox' />This order contains a gift
            </small>
            <button>Proceed To Pay</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shopcart