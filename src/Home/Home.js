import React from 'react'
import SubscribeForm from '../Components/SubscribeForm'
import Box from '../Components/Box'

// const packageTitles = ['60-90 min evaluation', 'Urgent Care Visits', 'Bundled Treatment Packages', '30-45 Min In Person', 'Follow-Ups As Needed','Results Within 1-3 Sessions']

function Home() {
  return (
    <div className='home'>
      <section id='banner'>
        <div className='text'>
          <h1>
            <strong>Mobile</strong> Physical Therapy
          </h1>
          <h4>
            Personal physical therapy sessions right at your home with Dr. Meina
            Zhu-Chhimi DPT, CMT. Currently servicing residences living in Bergen
            County, New Jersey.
          </h4>
        </div>
        <div className='bg-tint'>
          <div className='bg' />
        </div>
      </section>

      <section id='newsletter'>
        <h3>subscribe to our newsletter</h3>
        <SubscribeForm />
      </section>

      <section id='boxes'>
        <div className='boxes-row'>
          <Box 
            className="box" 
            img='' 
            title='60-90 min evaluation' 
            description='text here text here' 
          />
          <Box 
            className="box" 
            img='' 
            title='60-90 min evaluation' 
            description='text here text here' 
          />
          <Box 
            className="box" 
            img='' 
            title='60-90 min evaluation' 
            description='text here text here' 
          />
        </div>
        <div className='boxes-row'>
          <Box 
            className="box" 
            img='' 
            title='60-90 min evaluation' 
            description='text here text here' 
          />
          <Box 
            className="box" 
            img='' 
            title='60-90 min evaluation' 
            description='text here text here' 
          />
          <Box 
            className="box" 
            img='' 
            title='60-90 min evaluation' 
            description='text here text here' 
          />
        </div>
      </section>
    </div>
  )
}

export default Home
