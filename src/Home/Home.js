import React from 'react'
import SubscribeForm from './SubscribeForm'

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
        <div className='box'>
          <div className='symb clock' />
          <img
            alt='icon'
            src='/images/icons/poll.svg'
            style={{ transform: 'rotate(-90deg)' }}
          />
          <h3>60-90 min evaluation</h3>
          <p>
            In sunt ea adipisicing Lorem aliquip aute est sit deserunt ullamco
            cupidatat nulla veniam
          </p>
        </div>

        <div className='box'>
          <div className='symb heart'>
            <img
              alt='icon'
              src='/images/icons/poll.svg'
              style={{ transform: 'rotate(-90deg)' }}
            />
            <h3>Urgent Care Visits</h3>
            <p>
              In sunt ea adipisicing Lorem aliquip aute est sit deserunt ullamco
              cupidatat nulla veniam
            </p>
          </div>
        </div>

        <div className='box'>
          <div className='symb cube'>
            <img
              alt='icon'
              src='/images/icons/poll.svg'
              style={{ transform: 'rotate(-90deg)' }}
            />
            <h3>Bundled Treatment Packages</h3>
            <p>
              In sunt ea adipisicing Lorem aliquip aute est sit deserunt ullamco
              cupidatat nulla veniam
            </p>
          </div>
        </div>

        <div className='box'>
          <div className='symb userclock'>
            <img
              alt='icon'
              src='/images/icons/poll.svg'
              style={{ transform: 'rotate(-90deg)' }}
            />
            <h3>30-45 Min In Person</h3>
            <p>
              In sunt ea adipisicing Lorem aliquip aute est sit deserunt ullamco
              cupidatat nulla veniam
            </p>
          </div>
        </div>

        <div className='box'>
          <div className='symb history'>
            <img
              alt='icon'
              src='/images/icons/poll.svg'
              style={{ transform: 'rotate(-90deg)' }}
            />
            <h3>Follow-Ups As Needed</h3>
            <p>
              In sunt ea adipisicing Lorem aliquip aute est sit deserunt ullamco
              cupidatat nulla veniam
            </p>
          </div>
        </div>

        <div className='box'>
          <div className='symb poll'>
            <img
              alt='icon'
              src='/images/icons/poll.svg'
              style={{ transform: 'rotate(-90deg)' }}
            />
            <h3>Results Within 1-3 Sessions</h3>
            <p>
              In sunt ea adipisicing Lorem aliquip aute est sit deserunt ullamco
              cupidatat nulla veniam
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
