import CarouselComp from '../CarouselComp'

import HealthCarousel from '../HealthCarousel'


import './index.css'

const Home = () => (
 <div className='home-page'>
  <CarouselComp />
    <div className="doctor-details-container">
        <div className="fam-doc-cont">
          <h1 className="fam-doc-heading">
            Family Doctor
          </h1>
          <h2>cure at door step</h2>
          <p className="fam-doc-info">Explaining how having a family doctor       <br />
          can help seniors stay on top of preventative health care...</p>
          <button type='button' className="fam-knowmore-btn">Know more</button>
        </div>
        <img src='https://res.cloudinary.com/dlbaf9ix7/image/upload/v1682588538/young-doctor-supporting-his-patient_ab0hg3.jpg' 
        alt='doctor' className='doctor-bg'/>
    </div>
      <div className='health-checkup-cards'>
      </div>
        <div className='health-carousel-cont'>
          < HealthCarousel />
            <div className='health-carousel-card'>
                <h1 className="health-card-heading">
                    Work towards wellness
                  </h1>
              <ul className='health-card-list'>
                <li className="health-card-item">Yoga</li>
                <li className="health-card-item">Walking</li>
                <li className="health-card-item">Cultivate Creativity</li>
                <li className="health-card-item">Boost Brain fitness</li>
              </ul>
       
             </div>

      </div>
      <div className='features-cont'>
          <div className='feat-card'>
            <img   src='https://res.cloudinary.com/dlbaf9ix7/image/upload/v1682675907/joyce-huis-66QEF_ZmzKY-unsplash_s0zf2t.jpg'  
            className='fea-img' alt='environment'/>
            <div className='fea-card-item'>
              <h1 className='fea-heading'>Environment</h1>
              <p>A physical fearonment that has been sensitively designed, keeping in view the difficulties of sorts that may arise, would definitely have a favorable impact on the health of the old.</p>
              <button className="fea-card-button">show more</button>
            </div>
          </div>
          <div className='feat-card'>
            <img   src='https://res.cloudinary.com/dlbaf9ix7/image/upload/v1682872856/flat-lay-health-still-life-arrangement-with-copy-space_utpkcb.jpg'  
            className='fea-img' alt='fearonment'/>
            <div className='fea-card-item'>
              <h1 className='fea-heading'>Assistive Devices</h1>
              <p>With assistive devices available and compiled at www.oldagesolutions.org leading a life free of all barriers becomes an actuality. Most devices are made bearing in mind the convenience of the elderly ...</p>
              <button className="fea-card-button">show more</button>
            </div>
          </div>
          <div className='feat-card'>
            <img   src='https://res.cloudinary.com/dlbaf9ix7/image/upload/v1682675905/steven-hwg-zBsdRTHIIm4-unsplash_v5ixb9.jpg'  
            className='fea-img' alt='fearonment'/>
            <div className='fea-card-item'>
              <h1 className='fea-heading'>Recreation & Entertainment</h1>
              <p>A day in the life of a senior citizen depends on a lot of factors – how independent is he or she – can he/she see very well, can he/she walk well, or with difficulty or not at all. Can he/she take care ...</p>
              <button className="fea-card-button">show more</button>
            </div>
          </div>
      </div>
      </div>

)

export default Home
//Strengthening the old is strengthening the nation indeed.