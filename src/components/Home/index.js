import {useContext, useEffect} from 'react'
import Header from '../Header'
import PlantPostLoremIpsum from '../PlantPostLoremIpsum'
import NurseryProduct from '../NurseryProduct'
import Filter from '../Filter' 
import AddToCartProduct  from '../AddToCartProduct'
import Footer from '../Footer'
import { Context } from '../Context'
import './index.css'

const filterArray = [
    { id: 1, filterText: 'Filter', buttonText: 'CLEAR ALL' }, 
    { id: 2, filterText: 'Type of Plants' },
    { id: 3, filterText: 'Price' },
    { id: 4, filterText: 'Nursery' },
    { id: 5, filterText: 'Ideal Plants Location' },
    { id: 6, filterText: 'Indoor/Outdoor' },
    { id: 7, filterText: 'Maintenance' },
    { id: 8, filterText: 'Plant Size' },
    { id: 9, filterText: 'Water Schedule' },
    { id: 10, filterText: 'Color' },
    { id: 11, filterText: 'Seasonal' },
    { id: 12, filterText: 'Light Efficient' }
  ];


  const nurseryData = [
    {
    id:1,
    imageUrl:'https://res.cloudinary.com/da52fiag8/image/upload/v1729314737/Ellipse_63_os6jgw.png',
    text:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum.'
  },
  {
    id:2,
    imageUrl:'https://res.cloudinary.com/da52fiag8/image/upload/v1729314737/Ellipse_68_trfxon.png',
    text:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum.'
  },
  {
    id:3,
    imageUrl:'https://res.cloudinary.com/da52fiag8/image/upload/v1729314737/Ellipse_70_uyuzfn.png',
    text:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum.'
  },
  {
    id:4,
    imageUrl:'https://res.cloudinary.com/da52fiag8/image/upload/v1729314737/Ellipse_71_ig4m3p.png',
    text:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum.'
  },
  {
    id:5,
    imageUrl:'https://res.cloudinary.com/da52fiag8/image/upload/v1729314737/Ellipse_69_aktb7c.png',
    text:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum.'
  },
  {
    id:6,
    imageUrl:'https://res.cloudinary.com/da52fiag8/image/upload/v1729314737/Ellipse_62_ccescq.png',
    text:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum.'
  },
  {
    id:7,
    imageUrl:'https://res.cloudinary.com/da52fiag8/image/upload/v1729314737/Ellipse_63_os6jgw.png',
    text:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum.'
  },
  {
    id:8,
    imageUrl:'https://res.cloudinary.com/da52fiag8/image/upload/v1729314737/Ellipse_68_trfxon.png',
    text:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum.'
  },
  {
    id:9,
    imageUrl:'https://res.cloudinary.com/da52fiag8/image/upload/v1729314737/Ellipse_70_uyuzfn.png',
    text:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum.'
  },
  {
    id:10,
    imageUrl:'https://res.cloudinary.com/da52fiag8/image/upload/v1729314737/Ellipse_71_ig4m3p.png',
    text:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum.'
  },
  {
    id:11,
    imageUrl:'https://res.cloudinary.com/da52fiag8/image/upload/v1729314737/Ellipse_63_os6jgw.png',
    text:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum.'
  },
  {
    id:12,
    imageUrl:'https://res.cloudinary.com/da52fiag8/image/upload/v1729314737/Ellipse_68_trfxon.png',
    text:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum.'
  },
  {
    id:13,
    imageUrl:'https://res.cloudinary.com/da52fiag8/image/upload/v1729314737/Ellipse_70_uyuzfn.png',
    text:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum.'
  },
  {
    id:14,
    imageUrl:'https://res.cloudinary.com/da52fiag8/image/upload/v1729314737/Ellipse_71_ig4m3p.png',
    text:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum.'
  },
  {
    id:15,
    imageUrl:'https://res.cloudinary.com/da52fiag8/image/upload/v1729314737/Ellipse_69_aktb7c.png',
    text:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum.'
  }
  ]

const Home = () => {
    const { setfilterArray, setNurseryData} = useContext(Context)
    useEffect(()=>{
        setfilterArray(filterArray)
        setNurseryData(nurseryData)
    },[setfilterArray, setNurseryData])
    return(
        <div className='home-bg-container'>
            <Header/>
            <div className='bg-container'>
            <PlantPostLoremIpsum />
            <NurseryProduct />
            <div className='product-display-filter-container'>
            <Filter />
            <AddToCartProduct />
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home 