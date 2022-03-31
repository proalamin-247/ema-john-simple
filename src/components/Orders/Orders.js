import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import RecheckCart from '../RecheckCart/RecheckCart';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handlRemoveItem = product =>{
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest);
        removeFromDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className="cecheck-cart-container">
               {
                   cart.map(product => <RecheckCart
                    hey={product.key}
                    product={product }
                    handlRemoveItem={handlRemoveItem}
                   ></RecheckCart>)
               }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='*'>
                        <button>Proceed Checkout</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;