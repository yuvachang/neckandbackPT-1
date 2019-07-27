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
            Zhu-Chhimi DPT, CMT. <br /> Currently servicing residences living in Bergen
            County, New Jersey.
            {/* <br /> replace with css */}
            {/* may need a free stock photo, banner photo might be copyright */}
            <br />
            <br />
            <strong>CALL NOW</strong>
            <br />
            <i className="fas fa-envelope"></i> meina.zhu@gmail.com
            <br />
            <i className="fas fa-phone" /> (201) 389 - 8659   
          </h4>
        </div>
        <div className='bg-tint'>
          <div className='bg' />
        </div>
      </section>

      <section id='boxes'>
        <div className='boxes-row'>
          <Box 
            className="box" 
            icon="far fa-clock fa-3x"
            title='60-90 min evaluation' 
            description='Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.' 
          />
          <Box 
            className="box" 
            icon="fas fa-hand-holding-heart fa-3x"
            title='Urgent Care Visits' 
            description='Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.' 
          />
          <Box 
            className="box" 
            icon="fas fa-cube fa-3x"
            title="Bundled Treatment Packages"
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
          />
        </div>
        <div className='boxes-row'>
          <Box 
            className="box" 
            icon="fas fa-user-clock fa-3x" 
            title="30-45 Min In Person"
            description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure."
          />
          <Box 
            className="box" 
            icon="fas fa-history fa-3x"
            title='Follow-Ups As Needed' 
            description='Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.' 
          />
          <Box 
            className="box" 
            icon="fas fa-poll fa-3x"
            title='Results Within 1-3 Sessions' 
            description='Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.' 
          />
        </div>
      </section>
    </div>
  )
}

export default Home
