import { Link } from 'react-router-dom';
import "./css/Home.css"
const Home = () => {
    return(
        <div className="container">
        {/* Navbar Section */}
        {/* <nav className="navbar">
            <div className="logo">
            FAST REACT PIZZA CO.
            </div>
        </nav> */}

        {/* Main Section */}
        <main className="main-content">
            <h1>The best pizza.</h1>
            <p className="subheading">Straight out of the oven, straight to you.</p>
            <p className="welcome-message">
            <span role="img" aria-label="wave">👋</span> Welcome! Please start by telling us your name:
            </p>
            <Link to="/menu"><button className="order-button">START ORDERING</button></Link>
            
        </main>

        {/* Footer Section */}
       
        </div>
    );

};
//   <nav>
//     <Link to="/">Home</Link>
//     <Link to="/menu">Menu</Link>
//     <Link to="/cart">Cart</Link>
//   </nav>
// );

export default Home;