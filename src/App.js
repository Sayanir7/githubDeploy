import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Home from './components/Home';
import Footer from './components/Footer';
import NotFound from './components/NotFound'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home/>} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
