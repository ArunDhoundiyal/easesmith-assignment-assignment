import {useContext} from 'react'
import { Context } from '../Context';
import './index.css';

const Filter = () => {
  const {filterArray} = useContext(Context)
  return (
    <div className="filter-card-menu-container">
      <ul>
        {filterArray.map((eachItem, index) => (
          <div className='eachItem-nursery-container' key={eachItem.id}>
            <li>
              {index === 0 ? (
                <div className="filter-item">
                  <p>{eachItem.filterText}</p>
                  <button type='button' className='clear-all-btn'>
                    {eachItem.buttonText}
                  </button>
                </div>
              ) : (
                <div className="filter-item">
                  <p>{eachItem.filterText}</p>
                  <button type='button'>
                    <img
                      src='https://res.cloudinary.com/da52fiag8/image/upload/v1729358574/xyrchlgtaa6vctjb9xlj.png'
                      alt='plus-icon'
                    />
                  </button>
                </div>
              )}
            </li>
            {index < filterArray.length - 1 && <hr className='horizontal-line' />}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
