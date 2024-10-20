import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import ThankYouPage from './components/ThankYouPage'
import { ContextProvider } from './components/Context'
import './App.css'

const App = () => (
  <ContextProvider>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/thank-you' element={<ThankYouPage/>} />
  </Routes>
  </ContextProvider>
  )


export default App