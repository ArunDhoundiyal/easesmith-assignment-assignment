import Search from '../Search'
import { IoIosArrowDown } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import './index.css'

const Header = () => {
    return(
        <header className='Header-bg-container'>
            <div className='free-shipping-call-to-us-header-container'>
                <div className='position-header-free-shipping-call-to-us-card-container'>
                <p className='free-shipping-header-text'>Free Shipping on orders above 999/-</p>
                <p className='call-to-us-header-text'>Call us on: +91 98768 05120</p>
                </div>
            </div>
            <div className='header-container'>
                <div className='chaperone-header-container' >
                    <img src='https://res.cloudinary.com/da52fiag8/image/upload/v1729314738/image_55_tltzea.png' 
                    alt='chaperone-img-logo' 
                    className='style-chaperone' />
                    <h1 className='chaperone-header-text'>Chaperone</h1>                
                </div>
                <ul className='header-nav-links'>
                    <li className="header-link">Home</li>
                    <li className="header-link-color">Plants & Pots</li>
                    <li className="header-link">Tools <IoIosArrowDown /></li>
                    <li className="header-link">Our Services <IoIosArrowDown /></li>
                    <li className="header-link">Blog</li>
                    <li className="header-link">Blog</li>
                    <li className="header-link">Our Story</li>
                    <li className="header-link">FAQs</li>
                </ul>
                <div className="my-profile-cart-header-container">
                    <div className="my-profile-cart-header">
                    <IoPersonOutline className="cart-header-icon" />
                    <p>My Profile</p>
                    </div>
                    <div className="my-profile-cart-header" >
                    <BsCart2 className="cart-header-icon" />
                    <p>Cart</p>
                    </div>

                </div>
            </div>
            <Search />
        </header>


    )
}

export default Header

