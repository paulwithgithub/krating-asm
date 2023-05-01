import './index.css'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'


const Footer = () => (
    <div className='footer-cont'>
        
        {/* <ul className='foo-to-components'>
            <li className="foo-items">Home</li>
            <li className="foo-items">About</li>
            <li className="foo-items">Contact</li>
        </ul> */}
        <h1 className='foo-heading'>Old Age Website</h1>
        <ul className="socialNetwork">
            <li className="soc-items"><BsFacebook/></li>
            <li className="soc-items"><BsTwitter/></li>
            <li className="soc-items"><AiFillInstagram/></li>
            <li className="soc-items"><AiFillYoutube/></li>
        </ul>
        
    </div>
)

export default Footer