import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import './index.css';

const Footer = () => {
  return (
    <footer className="footer">
    <div className='footer-section-top-container'>
      <div className="subscrible-footer-section">
        <h1 className='subscribe-heading'>SUBSCRIBE TO OUR NEWSLETTER</h1>
        <p className='subscribe-text'>Lorem Ipsum Dolor Sit Amet. Aut Ipsam Illum Et Nostrum Quidem Aut Necessbus Enim</p>
        <div className="subscribe-input-button-container">
          <input className='email-address-input-field' type="email" placeholder="Enter Your Email Address" />
          <button className='subscribe-button'>SUBSCRIBE</button>
        </div>
      </div>

      <div className='about-us-container'>
        <h1>ABOUT US</h1>
        <ul className='about-us-list-container'>
          <li>Our Story</li>
          <li>Blogs</li>
          <li>Careers</li>
          <li>Contact Us</li>
          <li>Help & Support</li>
        </ul>
      </div>

      <div>
        <h1>OUR SERVICES</h1>
        <ul className='our-service-list-container'>
          <li>Book Maali</li>
          <li>Plant Day Care</li>
          <li>Rent Plants</li>
          <li>Plants & Pots</li>
          <li>Gardening Tools</li>
        </ul>
      </div>

      <div>
        <h1>USEFUL LINKS</h1>
        <ul className='use-ful-link-container'>
          <li>My Account</li>
          <li>Orders & Returns</li>
          <li>Track Order</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Return, Refund & Replacement Policy</li>
        </ul>
      </div>

      <div className="get-in-touch-footer-section">
        <h1 className='get-in-touch-heading'>GET IN TOUCH</h1>
        <div className='get-in-touch-container'>
        <p className='address-text'>Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57, Gurgaon, Haryana, India 122003</p>
        <p className='number-txt'>Call: +919958287272</p>
        <p className='email-text'>Email: care@chaperoneplants.com</p>
        </div>
      </div>
    </div>
      <div className="footer-bottom">
        <div className="chaperone-info">
          <h1 className='chapter-heading'>CHAPERONE</h1>
          <p className='footer-chaperone-content'>
          Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.
          </p>
        </div>

        <div className="social-icons">
          <h1 className='follow-us-heading'>Follow us on</h1>
          <ul className='follow-us-icons-container'>
          <FaInstagram className='follow-us-icons' />
          <FaFacebook className='follow-us-icons' />
          <BsFillThreadsFill className='follow-us-icons' />
          <IoLogoYoutube className='follow-us-icons' />
          <BsLinkedin className='follow-us-icons' />
          </ul>
        </div>
      </div>

      <hr className='hr-footer-line' />
      <div className="copyright-container">
        <p className='copyright'>© 2023, chaperone.com All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
