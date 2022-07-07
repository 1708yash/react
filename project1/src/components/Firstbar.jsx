import '../css/Firstbar.css'
import * as React from 'react';

function Firstbar() {
  return (
    <div className='main'>
      <div className='firstbar'>
        <div className='btn'><button >but</button></div>
        <div className='btn'><button >but</button></div>
        <div className='btn'><button >but</button></div>
        <div className='btn'><button >but</button></div>
        <div className='btn'><button >but</button></div>
        <div className='btn'><button >but</button></div>
        <div className='btn'><button >but</button></div>
        <div className='btn'><button >but</button></div>
        <div className='btn'><button >but</button></div>
        <div className='btn'><button >but</button></div>
        <div className='btn'><button >but</button></div>
      </div>

      <div className='main__txt'>
        <div className='main__first'>
          <p>MAIN</p>
          <div className='first__buts'>
            <button>click</button>
            <button>click</button>
            <button>click</button>
            <button>click</button>
          </div>
        </div>
        <div className='main__first'>
          <p>MAIN</p>
          <div className='first__buts'>
            <button>click</button>
            <button>click</button>
            <button>click</button>
            <button>click</button>
          </div>
        </div>
        <div className='linetext'>
          <p>hese is some text in korean</p>
        </div>
      </div>
      <div className='box'>
        <div class=" border border-success p-2 mb-2 border-opacity-25">
          <div className='mn'>
            <div className='border__btn'>
              <p>some</p>
              <button className='circle'>0</button>
              <button className='circle'>1</button>
              <button className='circle'>2</button>
              <button className='circle'>3</button>
              <button className='circle'>4</button>
              <button className='circle'>5</button>
              <button className='circle'>6</button>
              <button className='circle'>7</button>
              <button className='circle'>8</button>
              <button className='circle'>9</button>
              <div className='sep'>
                <button className='circle'>A</button>
                <button className='circle'>B</button>
                <button className='circle'>C</button>
                <button className='circle'>D</button>
                <button className='circle'>E</button>
                <button className='circle'>F</button>
              </div>
            </div>
            <div className='border__btn2'>
              <p>some</p>
              <button className='circle'>0</button>
              <button className='circle'>1</button>
              <button className='circle'>2</button>
              <button className='circle'>3</button>
              <button className='circle'>4</button>
              <button className='circle'>5</button>
              <button className='circle'>6</button>
              <button className='circle'>7</button>
              <button className='circle'>8</button>
              <button className='circle'>9</button>
              <div className='sep'>
                <button className='circle'>A</button>
                <button className='circle'>B</button>
                <button className='circle'>C</button>
                <button className='circle'>D</button>
                <button className='circle'>E</button>
                <button className='circle'>F</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='slider'>
      </div>
    </div>
  )
}

export default Firstbar