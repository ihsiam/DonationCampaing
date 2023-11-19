import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Home from './pages/home/Home'
import Donations from './pages/donations/Donations'
import Statistics from './pages/Statistics/Statistics'
import DonationDetails from './pages/home/DonationDetails'
import { useState } from 'react'

function App() {

  const [donateData, setDonateData] = useState([]);

  const reciveData = (data) =>{
    setDonateData([...donateData, data]);
  }

  const len = donateData.length;

  return (
    <div className='px-2 md:px-10 lg:px-28'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/donations' element={<Donations data={donateData}/>}/>
          <Route path='/statistics' element={<Statistics dataLen={len}/>}/>
          <Route path='/:title' element={<DonationDetails sendData={reciveData}/>}/>
          <Route path='/donations/:title' element={<DonationDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App