import React from 'react'
import '../css/Courses.css';
import CardItem from '../util/CardItem';
import Navbar from '../util/Navbar';
import Rectangle from '../svg/Rectangle';
import { Button } from '../util/Button';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { RecommendedData } from '../util/CoursesData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight} from '@fortawesome/free-solid-svg-icons'

function Courses() {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          partialVisibilityGutter: 40 
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const CustomLeftArrow = ({ onClick, carouselState: { currentSlide, totalItems } }) => {
        return (
            <button
                disabled={currentSlide === 0}
                onClick={onClick}
                className="custom-arrow custom-left-arrow" // Add your CSS classes
            >
                <FontAwesomeIcon icon={faChevronRight} rotation ={180} size="xl" style={{color: '#ffffff', }} />
            </button>
        );
    };
    
    const CustomRightArrow = ({ onClick, carouselState: { currentSlide, totalItems } }) => {
        return (
            <button
                disabled={currentSlide === totalItems - 1}
                onClick={onClick}
                className="custom-arrow custom-right-arrow" // Add your CSS classes
            >
                <FontAwesomeIcon icon={faChevronRight} size="xl" style={{color: '#ffffff', }}/>
            </button>
        );
    };

    return (
      <>
          <Navbar />
          <div className='home-container'>
              <div className='home-container-text'>
                  <p>คอร์สเรียนแนะนำ</p>
              </div>
              <div className='home-text-rectangle'>
                  <Rectangle width={120} height={6} color='#358CC8' />
              </div>
              <div className='home-container-button'> 
                  <Button buttonStyle='btn--outline' buttonSize='btn--mediun' path='/all-course'>ดูทั้งหมด</Button>
              </div>
              <div>
                <Carousel
                    responsive={responsive} 
                    infinite={true}
                    keyBoardControl
                    containerClass="carousel-container"
                    renderButtonGroupOutside={true}
                    customRightArrow={<CustomRightArrow />}
                    customLeftArrow={<CustomLeftArrow />}
                >
                      {RecommendedData.map((item) => (
                        <CardItem
                            id={Math.random()} // Add a unique key for each card (recommended)
                            src={item.src}
                            text={item.text}
                            label={item.label}
                            path={item.path}
                            description={item.description}
                            price={item.price}
                            style={item.style}
                         />
                          ))}
                      </Carousel>
              </div>
              <div className='home-container-text'>
                  <p>คอร์สเรียนม.ปลาย</p>
              </div>
              <div className='home-text-rectangle'>
                  <Rectangle width={120} height={6} color='#358CC8' />
              </div>
              <div className='home-container-button'> 
                  <Button buttonStyle='btn--outline' buttonSize='btn--mediun'>ดูทั้งหมด</Button>
              </div>
              <div>
              <Carousel  
                responsive={responsive} 
                infinite = {false}
                keyBoardControl
                containerClass="carousel-container"
                renderButtonGroupOutside={true}
                customRightArrow={<CustomRightArrow />}
                customLeftArrow={<CustomLeftArrow />}
              >
                      {RecommendedData.map((item) => (
                        <CardItem
                            id={Math.random()} // Add a unique key for each card (recommended)
                            src={item.src}
                            text={item.text}
                            label={item.label}
                            path={item.path}
                            description={item.description}
                            price={item.price}
                            style={item.style}
                         />
                          ))}
                      </Carousel>
              </div>
          </div>
      </>
    )
  }
  
  export default Courses;
  