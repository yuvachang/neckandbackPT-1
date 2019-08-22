import React from 'react'
import { Carousel } from '../components'

function About() {
  return (
    <div id='about'>
      <div className='about-section'>
        <div className='section-title'>
          <h2>Meina Zhu-Chhimi</h2>
        </div>

        <div className='section-content'>
          <div className='section-content-text'>
            Dr. Meina Zhu-Chhimi worked in New York Presbyterian Hospital, the #1 hospital in New York, where she received specialized training in
            spine related disorders. She has doctorate of physical therapy degree from Ithaca College, received Certified Manual Therapy and Meek's
            Method certification and is trained in Mckenzie method. She is a member of American Physica]l Therapy Association, regularly take
            continuing educational courses to stay current with knowledges in file of PT. She is able to combine her experience in outpatient, acute
            care, inpatient rehab and home care with her passion to help people, providing the best quality care to those in need.
          </div>
          <div className='section-content-image-container'>
            <img className='section-content-image' alt='headshot' src='./images/about/headshot.jpg' />
          </div>
        </div>
      </div>

      <br />

      <h2>Specialties</h2>

      <Carousel>
        <div className='method'>
          <div className='section-content'>
            <div className='section-content-image-container meth'>
              <img src='./images/methods/12pointmethod_star.jpg' alt='meeks-method' className='section-content-image meth' />
            </div>
            <div className='section-content-text'>
              <h3>Sara Meek's Method</h3>
              <p>
                Sara Meek's Method is the only exercise program designed for osteoporosis and can reduce likelihood and incidence of compression
                fracture. As part of this program, you will receive a comprehensive evaluation and a SAFE exercise regiment. After completing this
                program, you may demonstrate improvement in posture, decrease pain,improve muscle imbalance.
                <br />
                Osteoporosis has no symptoms. Forward bending movements in yoga, Pilates and many gym machines put someone with osteoporosis at
                greater risks for fractures. The right exercises and bracing has been shown to minimize the risk for fractures.
              </p>
            </div>
          </div>
        </div>
        <div className='method'>
          <div className='section-content'>
            <div className='section-content-image-container meth'>
              {/* <img src='./images/methods/12pointmethod_star.jpg' alt='meeks-method' className='section-content-image meth' /> */}
            </div>
            <div className='section-content-text'>
              <h3>Mckenzie Method</h3>
              <p>
                Non-invasive assessment and treatment of spine. Result usually within 1-3 sessions because area is treated directly. After completing
                the program, you will learn the tool you need to <i>improve</i> your current pain, <i>prevent</i> re-occurrence of pain, and{' '}
                <i>learn</i> self management of your pain if it return in the future. It is NOT a generalized core strengthening exercise program.
                <br />
                This program is for you if you have history of neck/back pain, been diagnosed with bulging/herniated /slipped disc, spondylolisthesis,
                sciatica, had spine surgeries and want to avoid another surgery.
              </p>
            </div>
          </div>
        </div>
      </Carousel>

    </div>
  )
}

export default About

