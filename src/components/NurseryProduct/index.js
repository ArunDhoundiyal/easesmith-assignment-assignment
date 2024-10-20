import React, { useRef, useContext } from 'react';
import { Context } from '../Context';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import './index.css'

const NurseryProduct = () => {
  const {nurseryData} = useContext(Context)

    const scrollImageRef = useRef(null)

    const onRightScrollingButton = () => {
        if (scrollImageRef.current){
            scrollImageRef.current.scrollLeft += 400;
        }

    }
    const onLeftScrollingButton = () => {
        if (scrollImageRef.current){
            scrollImageRef.current.scrollLeft -= 400;
        }
    }
    return(
        <div className='nursery-product-bg-container'>
            <h1 className="nursery-product-heading">Nursery</h1>
            <ul className='nursery-data-display-container' ref={scrollImageRef} >
                <button className='left-button' 
                onClick={onLeftScrollingButton}>
                    <IoIosArrowDropleftCircle className='left-arrow-icon' />
                </button>
                {
                  nurseryData.map(eachObj => (
                    <li key={eachObj.id}  className='nursery-image-item-list-container'>
                        <img className='nursery-imgs-logo' src={eachObj.imageUrl} alt={`nursery-img ${eachObj.id}`} />
                        <p className='nursery-silder-text'>{eachObj.text}</p>
                    </li>
                  ))  
                }
                <button className='right-button' 
                onClick={onRightScrollingButton} >
                    <IoIosArrowDroprightCircle className='right-arrow-icon' />
                </button>
            </ul>
            
        </div>

    )
}

export default NurseryProduct