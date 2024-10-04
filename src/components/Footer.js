import { Link } from 'react-router-dom';
import './css/Footer.css';
// const style={
//     footer:{
//         position: 'fixed',
//         width:'100%',
//         top:'93vh',


//         backgroundColor: '#333',
//         color: '#fff',
//         textAlign: 'right',
//         padding: '15px',
//     }
//     .cart-button {
//         background-color: transparent;
//         color: #fff;
//         font-size: 18px;
//         border: none;
//         cursor: pointer;
//       }
      
//     cart-button:hover {
//         text-decoration: underline;
//     }
// }

const Footer = () =>{
    return(
        <div className='footerdiv'>
            <footer className="footer">
                <div className="purchase">
                    <span></span>
                </div>

                <Link to="/cart"><button className="cart-button">OPEN CART →</button></Link>
            
            </footer>
        </div>

    );
};

export default Footer;