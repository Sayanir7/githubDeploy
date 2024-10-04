// import { Link } from 'react-router-dom';
const navstyle={
    navbar: {
        zIndex:'2',
        position: 'fixed',
        width: '100%',
        top:'0',
        backgroundColor: "#f9d922", /* Yellow bar */
        padding: '15px',
    },
    
}
const Navbar = () => {
    return(
        <div>
            <nav className="navbar" style={navstyle.navbar}>
            <div className="logo">
            FAST REACT PIZZA CO.
            </div>
            </nav>

        </div>
    );
};
//   <nav>
//     <Link to="/">Home</Link>
//     <Link to="/menu">Menu</Link>
//     <Link to="/cart">Cart</Link>
//   </nav>
// );

export default Navbar;
