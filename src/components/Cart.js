import { useSelector, useDispatch } from 'react-redux';
import { removeItem, addItem, deleteItem, clearCart } from '../redux/cartSlice';

import { Link } from 'react-router-dom';
import './css/cart.css';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, item) => total + (item.unitPrice * item.quantity), 0);

  return (
    <div>
      <div className='content'>
        <Link to="/menu">
          <h5 className='backtomenu'>Back to main menu</h5>
        </Link>

        <h3 className='cartHeading'>Your Cart</h3>
        {cartItems.length === 0 ? (
          <p className='emptyCart'>Cart is empty</p>
        ) : (
          <div>
            <table className='cartTable'>
              <thead>
                <tr>
                  <th>Quantity</th>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id}>
                    <td>{item.quantity}</td>
                    <td>{item.name}</td>
                    <td>${item.unitPrice}</td>
                    <td>
                      <button className='cartButton' onClick={() => dispatch(removeItem(item.id))}>-</button>
                      <button className='cartButton' onClick={() => dispatch(addItem(item))}>+</button>
                      <button onClick={() => dispatch(deleteItem(item.id))} className='removeB' >
                              Remove
                          </button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td><b>Total:</b></td>
                  <td></td>
                  <td><b>${totalPrice.toFixed(2)}</b></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            {/* <p className='cartP'>Total: ${totalPrice.toFixed(2)}</p> */}
            <div className="buttons">
              <button className='cartClearB' onClick={() => dispatch(clearCart())}>Clear Cart</button>
              <button className='orderButton'>Order Pizzas</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
