import { Link } from 'react-router-dom';


const Navbar = () =>{
    return(
        <div>
            <Link className='navbarl' to="/">Home</Link>
            <Link className='navbarc' to="/about">About</Link>
            <Link className='navbarr' to="/contact">Contact</Link>
        </div>
    )
}

export default Navbar