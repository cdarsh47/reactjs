import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, useRoutes, NavLink } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Navigation/>
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<Products/>} />
      </Routes>  
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
