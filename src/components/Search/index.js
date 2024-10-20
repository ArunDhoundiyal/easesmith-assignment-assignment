import './index.css'

const Search = () => {
    console.log('Search')
    return(
        <div className="search-container">
            <img src='https://res.cloudinary.com/da52fiag8/image/upload/v1729323079/image_1_eze56g.png' alt='search-logo' className='search-serarh-logo' />
            <input placeholder='Search Plant' className='style-search-input' type="search"/>
            <img src='https://res.cloudinary.com/da52fiag8/image/upload/v1729314694/image_91_ikxlda.png' alt='leaves-logo' className='leaves-serarh-logo' /> 
        </div>

    )
}

export default Search