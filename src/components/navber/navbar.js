import {Link} from 'react-router-dom'
import './navStyle.css'

const Navbar = () => (
    <div className="nav-container">
        <h1>
        <Link to='/' className='main-heading'> Old Age Website</Link>
        </h1>
        <div className="nav-content">
        <ul className="info-list">
            
            <li ><Link to='/' className="info-items">Home</Link></li>
            <li><Link to='/' className="info-items">About</Link></li>
            <li ><Link to='/' className="info-items">Contack Us</Link></li>
        </ul>
        <button type='button' className="donate-btn">DONATE</button>
        </div>
        
    </div>
)

export default Navbar