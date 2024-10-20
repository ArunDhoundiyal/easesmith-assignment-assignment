import {useNavigate} from 'react-router-dom'
import './index.css'

const ThankYouPage = () => {
    const navigate = useNavigate() 
    const onClickBackToHomePage = () => {
        navigate('/')
    }
    return(
        <div className='thank-you-page-bg-container'>
            <p className='your-cart-text'>Your Cart</p>
            <hr className='thank-you-hr-line' />
            <h1 className='thank-you-page-heading'>Congratulations <br/> Order Placed!</h1>
            <img src='https://res.cloudinary.com/da52fiag8/image/upload/v1729430289/plant_1_yh3mp0.png' alt='plant.png' className='thank-you-img' />
            <p className='thank-you-text'>Thank you for choosing Chaperone services.<br/>We will soon get in touch with you!</p>
            <button type='button' className='shopping-button' onClick={onClickBackToHomePage}>CONTINUE SHOPPING</button>
        </div>
    )
}

export default ThankYouPage