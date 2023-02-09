import { Link, NavLink } from 'react-router-dom';
export default function Navigation(){
    return(
        <div className='header-section'>
            <div className='left-head'>
                <h5>WEBDESIGN</h5>
            </div>
            <nav className='right-head'>
            <NavLink to="/" style={({isActive})=>{return isActive ? {color:"red"} : {}}}>Home</NavLink>
            <NavLink to="/about" style={({isActive})=>{return isActive ? {color:"red"} : {}}}>About</NavLink>
            <NavLink to="/products" style={({isActive})=>{return isActive ? {color:"red"} : {}}}>Products</NavLink>
            </nav>
        </div>
    )
}