import {useNavigate} from 'react-router-dom'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import './index.css'

const DisplayProducts = ({eachProduct}) => {
    const {id, 
        url, 
        name, 
        description, 
        rating
    } = eachProduct

    const navigate = useNavigate()

    const onClickViewProduct = () => {
        navigate('/thank-you')
    }
    
    return(
        <li className='display-product-container'>
            <div className='display-plant-container'>
            <div className='heart-icon-container'>
            <img className='heart-icon' src='https://res.cloudinary.com/da52fiag8/image/upload/v1729415701/Vector_erldgn.png' alt={`heart-plant-logo-${id}`} />
            </div>
            <img src={url} alt={`${name}-${id}`} className='plants-image' />
            <button type='button' className='view-product-button' onClick={onClickViewProduct}>View Product</button>
            </div> 
            <div className='plant-price-rating-description-container'>
                <h1 className='plant-name'>{name}</h1>
                <p className='plant-description'>{description}</p>
                <div className='plants-star-rating-container'>
                <img className='plant-star-rating' src='https://res.cloudinary.com/da52fiag8/image/upload/v1729415732/image_10_nbuu1h.png' alt={`star-rating-${id}`} />
                <p className='plant-rating'>{rating}</p>
                </div>
                <div className='plant-price-container'>
                    <img className='plant-price' src='https://res.cloudinary.com/da52fiag8/image/upload/v1729419782/359_hsjqtf.png' alt={`original-price ${id}`} />
                    <img src='https://res.cloudinary.com/da52fiag8/image/upload/v1729419782/299_skaome.png' alt={`discounted-price ${id}`} />
                </div>
                <div className='plants-add-rent-buy-button-container'>
                        <button className='add-button' type='button'><FaMinus className="minus" /> Add to cart <FaPlus className="plus" /></button>
                        <button className='buy-button' type='button'>Buy on Rent</button>
                </div>
            </div>

        </li>


    )

}

export default DisplayProducts