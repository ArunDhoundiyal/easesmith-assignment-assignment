import {createContext, useState} from 'react'

const initialProductImages  =  [
    {
      "id": 1,
      "url": "https://res.cloudinary.com/da52fiag8/image/upload/v1729409818/daa994fdb511faa82ea79a5ef58fbb1a_1_j5ko8r.png",
      "name": "Monsterra",
      "description": "Indoor Plant, Low maintenance",
      "rating": 4.9,
    },
    {
      "id": 2,
      "url": "https://res.cloudinary.com/da52fiag8/image/upload/v1729409818/e1ce63ff429a0c018fd6e2e5dd614458_jivvdc.png",
      "name": "Monsterra",
      "description": "Indoor Plant, Low maintenance",
      "rating": 4.9,
    },
    {
      "id": 3,
      "url": "https://res.cloudinary.com/da52fiag8/image/upload/v1729409818/7973d62829a030074ad8b6ad34_leqne0.png",
      "name": "Monsterra",
      "description": "Indoor Plant, Low maintenance",
      "rating": 4.9,
    },
    {
      "id": 4,
      "url": "https://res.cloudinary.com/da52fiag8/image/upload/v1729409818/daa994fdb511faa82ea79a5ef58fbb1a_1_j5ko8r.png",
      "name": "Monsterra",
      "description": "Indoor Plant, Low maintenance",
      "rating": 4.9,
    },
    {
      "id": 5,
      "url": "https://res.cloudinary.com/da52fiag8/image/upload/v1729409818/e1ce63ff429a0c018fd6e2e5dd614458_jivvdc.png",
      "name": "Monsterra",
      "description": "Indoor Plant, Low maintenance",
      "rating": 4.9,
    },
    {
      "id": 6,
      "url": "https://res.cloudinary.com/da52fiag8/image/upload/v1729409818/7973d62829a030074ad8b6ad34_leqne0.png",
      "name": "Monsterra",
      "description": "Indoor Plant, Low maintenance",
      "rating": 4.9,
    },
    {
      "id": 7,
      "url": "https://res.cloudinary.com/da52fiag8/image/upload/v1729409818/daa994fdb511faa82ea79a5ef58fbb1a_1_j5ko8r.png",
      "name": "Monsterra",
      "description": "Indoor Plant, Low maintenance",
      "rating": 4.9,
    },
    {
      "id": 8,
      "url": "https://res.cloudinary.com/da52fiag8/image/upload/v1729409818/e1ce63ff429a0c018fd6e2e5dd614458_jivvdc.png",
      "name": "Monsterra",
      "description": "Indoor Plant, Low maintenance",
      "rating": 4.9,
    },
    {
      "id": 9,
      "url": "https://res.cloudinary.com/da52fiag8/image/upload/v1729409818/7973d62829a030074ad8b6ad34_leqne0.png",
      "name": "Monsterra",
      "description": "Indoor Plant, Low maintenance",
      "rating": 4.9,
    },
    {
      "id": 10,
      "url": "https://res.cloudinary.com/da52fiag8/image/upload/v1729409818/daa994fdb511faa82ea79a5ef58fbb1a_1_j5ko8r.png",
      "name": "Monsterra",
      "description": "Indoor Plant, Low maintenance",
      "rating": 4.9,
    },
    {
      "id": 11,
      "url": "https://res.cloudinary.com/da52fiag8/image/upload/v1729409818/e1ce63ff429a0c018fd6e2e5dd614458_jivvdc.png",
      "name": "Monsterra",
      "description": "Indoor Plant, Low maintenance",
      "rating": 4.9,
    },
    {
      "id": 12,
      "url": "https://res.cloudinary.com/da52fiag8/image/upload/v1729409818/7973d62829a030074ad8b6ad34_leqne0.png",
      "name": "Monsterra",
      "description": "Indoor Plant, Low maintenance",
      "rating": 4.9,
    },

    {
        "id": 13,
        "url": "https://res.cloudinary.com/da52fiag8/image/upload/v1729409818/daa994fdb511faa82ea79a5ef58fbb1a_1_j5ko8r.png",
        "name": "Monsterra",
        "description": "Indoor Plant, Low maintenance",
        "rating": 4.9,
      },
      {
        "id": 14,
        "url": "https://res.cloudinary.com/da52fiag8/image/upload/v1729409818/e1ce63ff429a0c018fd6e2e5dd614458_jivvdc.png",
        "name": "Monsterra",
        "description": "Indoor Plant, Low maintenance",
        "rating": 4.9,
      },
      {
        "id": 15,
        "url": "https://res.cloudinary.com/da52fiag8/image/upload/v1729409818/7973d62829a030074ad8b6ad34_leqne0.png",
        "name": "Monsterra",
        "description": "Indoor Plant, Low maintenance",
        "rating": 4.9,
      },
      {
        "id": 16,
        "url": "https://res.cloudinary.com/da52fiag8/image/upload/v1729409818/daa994fdb511faa82ea79a5ef58fbb1a_1_j5ko8r.png",
        "name": "Monsterra",
        "description": "Indoor Plant, Low maintenance",
        "rating": 4.9,
      },
      {
        "id": 17,
        "url": "https://res.cloudinary.com/da52fiag8/image/upload/v1729409818/e1ce63ff429a0c018fd6e2e5dd614458_jivvdc.png",
        "name": "Monsterra",
        "description": "Indoor Plant, Low maintenance",
        "rating": 4.9,
      },
      {
        "id": 18,
        "url": "https://res.cloudinary.com/da52fiag8/image/upload/v1729409818/7973d62829a030074ad8b6ad34_leqne0.png",
        "name": "Monsterra",
        "description": "Indoor Plant, Low maintenance",
        "rating": 4.9,
      },
      {
        "id": 19,
        "url": "https://res.cloudinary.com/da52fiag8/image/upload/v1729409818/daa994fdb511faa82ea79a5ef58fbb1a_1_j5ko8r.png",
        "name": "Monsterra",
        "description": "Indoor Plant, Low maintenance",
        "rating": 4.9,
      },
      {
        "id": 20,
        "url": "https://res.cloudinary.com/da52fiag8/image/upload/v1729409818/e1ce63ff429a0c018fd6e2e5dd614458_jivvdc.png",
        "name": "Monsterra",
        "description": "Indoor Plant, Low maintenance",
        "rating": 4.9,
      },
      {
        "id": 21,
        "url": "https://res.cloudinary.com/da52fiag8/image/upload/v1729409818/7973d62829a030074ad8b6ad34_leqne0.png",
        "name": "Monsterra",
        "description": "Indoor Plant, Low maintenance",
        "rating": 4.9,
      },
      {
        "id": 22,
        "url": "https://res.cloudinary.com/da52fiag8/image/upload/v1729409818/daa994fdb511faa82ea79a5ef58fbb1a_1_j5ko8r.png",
        "name": "Monsterra",
        "description": "Indoor Plant, Low maintenance",
        "rating": 4.9,
      },
      {
        "id": 23,
        "url": "https://res.cloudinary.com/da52fiag8/image/upload/v1729409818/e1ce63ff429a0c018fd6e2e5dd614458_jivvdc.png",
        "name": "Monsterra",
        "description": "Indoor Plant, Low maintenance",
        "rating": 4.9,

      },
      {
        "id": 24,
        "url": "https://res.cloudinary.com/da52fiag8/image/upload/v1729409818/7973d62829a030074ad8b6ad34_leqne0.png",
        "name": "Monsterra",
        "description": "Indoor Plant, Low maintenance",
        "rating": 4.9,
      },
      
      {
        "id": 25,
        "url": "https://res.cloudinary.com/da52fiag8/image/upload/v1729409818/7973d62829a030074ad8b6ad34_leqne0.png",
        "name": "Monsterra",
        "description": "Indoor Plant, Low maintenance",
        "rating": 4.9,
      },
      {
        "id": 26,
        "url": "https://res.cloudinary.com/da52fiag8/image/upload/v1729409818/e1ce63ff429a0c018fd6e2e5dd614458_jivvdc.png",
        "name": "Monsterra",
        "description": "Indoor Plant, Low maintenance",
        "rating": 4.9,

      },
      {
        "id": 27,
        "url": "https://res.cloudinary.com/da52fiag8/image/upload/v1729409818/7973d62829a030074ad8b6ad34_leqne0.png",
        "name": "Monsterra",
        "description": "Indoor Plant, Low maintenance",
        "rating": 4.9,
      },
      
      {
        "id": 28,
        "url": "https://res.cloudinary.com/da52fiag8/image/upload/v1729409818/7973d62829a030074ad8b6ad34_leqne0.png",
        "name": "Monsterra",
        "description": "Indoor Plant, Low maintenance",
        "rating": 4.9,
      },
      {
        "id": 29,
        "url": "https://res.cloudinary.com/da52fiag8/image/upload/v1729409818/7973d62829a030074ad8b6ad34_leqne0.png",
        "name": "Monsterra",
        "description": "Indoor Plant, Low maintenance",
        "rating": 4.9,
      },
      
      {
        "id": 30,
        "url": "https://res.cloudinary.com/da52fiag8/image/upload/v1729409818/7973d62829a030074ad8b6ad34_leqne0.png",
        "name": "Monsterra",
        "description": "Indoor Plant, Low maintenance",
        "rating": 4.9,
      }
  ]


export const Context = createContext()
export const  ContextProvider = ({children }) => {
    const [productImages, setProductImages] = useState(initialProductImages)
    const [filterArray, setfilterArray] = useState([])
    const [nurseryData, setNurseryData] = useState([])
    return(
        <Context.Provider value={{
            productImages,
            setProductImages,
            filterArray,
            setfilterArray,
            nurseryData,
            setNurseryData
        }}
        >
            {children}

        </Context.Provider>

    )
}