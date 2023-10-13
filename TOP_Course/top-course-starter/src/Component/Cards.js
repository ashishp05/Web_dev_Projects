import Card from './Card';
import { useState } from 'react';
function Cards(props)
{
    let courses =props.courses;
    let categery=props.categery;
    const [likedCourses, setLikedCourses] = useState([]);
   

    function getCourses()
    {
        if (!courses || Object.keys(courses).length === 0) {
            // Handle the case when courses is missing or empty
            return [];
        }
        if(categery === "All")
        {
            let allcourses =[];
            Object.values(courses).forEach(array =>
                {
                    array.forEach(courseData => {
                        allcourses.push(courseData);
                    })
                })
                return allcourses;
        }
        else {
            // Handle other categories here, filter and return the relevant courses
            return courses[categery] || [];
          }
      
    }
    return(

        
            <div className=' mx-2 flex flex-wrap gap-3 justify-center '  >
            {
                getCourses().map((course) =>
                {
                  return <Card className="" course={course}
                  key={course.id}
                   likedCourses={likedCourses} 
                  setLikedCourses={setLikedCourses}></Card>
                })
             
            }
            </div>
        
    )
    
}
export default Cards;