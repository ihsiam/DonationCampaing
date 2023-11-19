import React, { useState } from 'react'
import Banner from './Banner'
import Container from './Container'

function Home() {

  const [searchItem, setSearchItem] = useState('');

  const searchData = (data) =>{
    setSearchItem(data);
  }

  return (
    <div className=''>
      <Banner data={searchData}/>
      <Container search={searchItem}/>
    </div>
  )
}

export default Home