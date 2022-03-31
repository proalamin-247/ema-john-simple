// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './RecheckCart.css'

const RecheckCart = (props) => {
    const { product, handlRemoveItem} = props;
    const {name, price, shipping, quantity, img} = product;
    return (
        <div className='recheck-cart'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='recheck-cart-item-container'>
                <div className='item-details'>
                    <p className='item-name' title={name}>
                        {name.length > 20? name.slice(0,20)+ '...': name}
                    </p>
                    <p className=''>Prcie : <span className='orange-color'>${price}</span></p>
                    <p><small>Shipping Fee: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className='dlt-container'>
                    <button onClick={()=> handlRemoveItem(product)} className='dlt-btn'>
                        DLT
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecheckCart;