import { usePizzas } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { addItem,deleteItem } from '../redux/cartSlice';
import "./css/Pizzas.css"

const Menu = () => {
  const { data, isLoading, error } = usePizzas();
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  if (isLoading) return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
      
    </div>
  );
  
  if (error) return <p>Error loading menu: {error.message}</p>;

  const isInCart = (pizzaId) => cartItems.some(item => item.id === pizzaId);
//   let soldOut=false;
  return (
    <div className='menucontent'>
      
      <ul>
        

          {data.map(pizza => (
              <li key={pizza.id} className="pizza-item">
                  <img src={pizza.imageUrl} alt={pizza.name} className="pizza-image" />
                  {/* <h3>{pizza.name}</h3>
                  <p>{pizza.ingredients.join(', ')}</p>
                  <p>Price: ${pizza.unitPrice}</p>

                  {isInCart(pizza.id) ? (
                  <button onClick={() => dispatch(removeItem(pizza.id))}>
                      Remove from Cart
                  </button>
                  ) : (
                  <button onClick={() => dispatch(addItem(pizza))}>
                      Add to Cart
                  </button>
                  )} */}
                  <div className="pizza-info">
                      <h2>{pizza.name}</h2>
                      <p>{pizza.ingredients.join(', ')}</p>
                      
                      {/* {pizza.soldOut ? (
                      <p className="sold-out">SOLD OUT</p>
                      ) : (
                      <button className="add-to-cart">ADD TO CART</button>
                      )} */}
                      <div className="priceDiv"><p className="price">Price: ${pizza.unitPrice}</p>
                      {isInCart(pizza.id) ? (
                          <button onClick={() => dispatch(deleteItem(pizza.id))} className='remove-to-cart' >
                              Remove
                          </button>
                          ) : (
                          <button onClick={() => dispatch(addItem(pizza))}  className='add-to-cart' >
                              Add to Cart
                          </button>
                      )}
                      </div>
                      

                      
                  </div>
                  

                  
              </li>
          ))}

               
      </ul>
    </div>
  );
};

export default Menu;
