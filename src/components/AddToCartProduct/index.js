import {useState, useEffect, useContext} from 'react'
import { Context } from '../Context'
import DisplayProducts from '../DisplayProducts'
import './index.css' 

  const AddToCartProduct = () => {
    const {productImages} = useContext(Context)


    const [pagination, setPagination] = useState(1)
    const [updatedProductImage, setUpdatedProductImage] = useState(productImages)

    const onClickViewMoreButton = () => {
        if (pagination <= 4){
            setPagination(pagination + 1)

        }
    }

    useEffect(() => {
        const start = (pagination - 1) * 6;
        const filterPagination = productImages.slice(0, start + 6);
        setUpdatedProductImage(filterPagination);
    }, [pagination, productImages]);

    console.log(updatedProductImage.length)


    return(
        <div className='container-add-to-cart'>
            <div className='sort-by-product-container'>
                <span className='productCount'>300 products</span>
                <div className='sortContainer'>
                    <select id="sort" className='select'>
                        <option className='sort-by-option'>SORT BY</option>
                    </select>
                </div>
            </div>
        <ul className='add-display-cart-product-container'>
            {
                updatedProductImage.map(eachProduct => (
                    <DisplayProducts key={eachProduct.id} eachProduct={eachProduct} />
                ))
            }

        </ul>
        <button className='view-more-button' onClick={onClickViewMoreButton}>View More {`${updatedProductImage.length}/30`}</button>
        </div>

    )
  }

  export default AddToCartProduct