import React from 'react'
import CardItem from '../util/CardItem'
import '../css/AboutUs.css'
import Navbar from '../util/Navbar'


function AboutUs() {
  return (
    <>
    <Navbar />
    <div className='aboutus-container'>
        <div className='gramboys-info'>
            <div className='gramboys-info-text'>
                <h1>Gramboys</h1>
                <p>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi 
                </p>
            </div>
            <div className='gramboys-info-picture'>
            </div>
        </div>
        <div className='gramboys-partner'>
            <div className='gramboys-partner-picture'>
            </div>
            <div className='gramboys-partner-text'>
                <h1>Gramboys Partner</h1>
                <p>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi 
                </p>
            </div>
        </div>
        <div className='gramboys-teacher'>
            <div className='gramboys-teacher-picture'>

            </div>
            <div className='gramboys-teacher-text'>
                <h1>Our Teacher</h1>
                <p>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                </p>
            </div>
        </div>
        <div className='gramboys-student'>
            <div className='student-section-text'>
                <h3>ลูกศิษย์ของครูบอย</h3>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem 
                            src='/'
                            text='N Pooh'
                            path='/courses'
                            />

                            <CardItem 
                            src='/'
                            text='N Pooh'
                            path='/courses'
                            />

                            <CardItem 
                            src='/'
                            text='N Pooh'
                            path='/courses'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='frequently-ask-question'>

        </div>
        
    </div>
    </>
    
  )
}

export default AboutUs