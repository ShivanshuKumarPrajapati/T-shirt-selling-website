import React from 'react'
import { useState, useEffect } from 'react';

import Base from './Base';
import Card from './Card';
import { loadCart } from './helper/CartHelper';


const Cart = () => {

    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
      setProducts(loadCart);
    }, [reload]);

    const loadAllProducts = () => {
        return (
            <div>
                <h2>This is for laod products</h2>
                {products.map((product, index) => {
                    return (
                        <Card
                        key={index}
                        product={product}
                        addtoCart={false}
                        removeFromCart={true}
                        setReload={setReload}
                        reload={reload}    
                        />)
                })}
            </div>
        );
    }

     const loadCheckout = () => {
       return (
         <div>
           <h2>This is for checkout</h2>
         </div>
       );
     };
    

  return (
    <Base title="home Page" description="Welcome to t-shirt store">
      <div className="row text-center">
              <div className="col-6">
              {loadAllProducts()}
              </div>
              <div className="col-6">
              {loadCheckout()}
              </div>
      </div>
    </Base>
  );
}

export default Cart