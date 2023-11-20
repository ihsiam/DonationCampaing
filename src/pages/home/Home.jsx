import React, { useState } from 'react'
import Banner from './Banner'
import Container from './Container'
import { Helmet } from 'react-helmet';

function Home() {

  const [searchItem, setSearchItem] = useState('');

  const searchData = (data) =>{
    setSearchItem(data);
  }

  return (
    <div className=''>
      <div>
        <Helmet>
          <title>Donation Campaign - Home</title>
        </Helmet>
      </div>
      <Banner data={searchData}/>
      <Container search={searchItem}/>
    </div>
  )
}

export default Home