import React, { useState } from 'react';
import './App.css';
import { Instructions } from './components/Instructions';

function App() {
  const [price, setPrice] = useState(100);

  function applyDiscount() {
    setPrice(75);
  }

  return (
    <>
      <section id='instructions'>
        <Instructions/>
      </section>      

      <div>
        <p data-testid="price">${price}</p>
        <button onClick={applyDiscount}>Apply Discount</button>
      </div>
    </>
  )
}

export default App;

