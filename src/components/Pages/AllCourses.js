import React, { useState } from 'react'
import Navbar from '../util/Navbar'
import '../css/Courses.css'
import { AllCoursesData } from '../util/CoursesData'
import Card from '../util/Card'
import Sidebar from '../util/Sidebar'


function AllCourses() {

    const [selectedCategory, setSelectedCategory] = useState(null);

    const [query, setQuery] = useState('')

    const handleInputChange = (event) => {
        setQuery(event.target.value);
      };

    const filteredItems = AllCoursesData.filter(
        (item) => item.text.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    
      // ----------- Radio Filtering -----------
    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
     };

     function filteredData(AllCoursesData, selected, query) {
        let filteredProducts = AllCoursesData;
    
        if (query) {
            filteredProducts = filteredItems;
          }

        
        // Applying selected filter
        if (selected) {
          filteredProducts = filteredProducts.filter(
            ({ category }) =>
              category === selected 
          );
        }
    
        return filteredProducts.map(
          ({ id, src, path, text, description, price}) => (
            <Card
              id={id}
              src={src}
              path={path}
              text={text}
              description={description}
              price={price}
            />
          )
        );
      }
    
      const result = filteredData(AllCoursesData, selectedCategory, query);

  return (
    <>
    <Sidebar handleChange={handleChange} />
    <Navbar />
    <div className='home-ac-container'>
        
        <div className='home-ac-top-container'>
            <div className='home-ac-container-text'>
                <p>คอร์สเรียนทั้งหมด</p>
            </div>
            <div className='ac-searchbar'>
                <input type='text' placeholder='search...' className='searchingbar' query={query} onChange={handleInputChange}/>
            </div>
        </div>
       <div className='card-section-container'>
            {result}
        </div>
        
    </div>
    </>
  )
}

export default AllCourses