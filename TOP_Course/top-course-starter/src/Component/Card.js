
import {FcLike,FcLikePlaceholder} from "react-icons/fc"; 
import {toast} from "react-toastify";


function Card(props)

{
    function clickHandler()
    {
        if(likedCourses.includes(course.id))
        {
            setLikedCourses((prev) => prev.filter((cid) =>(cid !== course.id)))
            toast.warning("like removed");
        }
        else
        {
           if(course.length === 0)
           {
            setLikedCourses([course.id]);
           }
           else
           {
            setLikedCourses((prev) => [...prev, course.id]);
        }
        toast.success("Liked Successfully");
           
        }

    } 
let course=props.course;
let likedCourses=props.likedCourses;
let setLikedCourses=props.setLikedCourses;


    return (
    <div className="w-[300px] bg-sky-200 p-3 rounded-md overflow-x-hidden ">
         <div className=" relative   " >

        <div>
         <img className="rounded-md " src={course.image.url} alt="courses"/> </div>
               <div className="">
               <button onClick={clickHandler} className="absolute bg-purple-600 rounded-full scale-100 
                bottom-[-12px] right-10 text-lg px-1 py-1 font-medium hover:bg-opacity-50 border-2 transition-all duration-30   ">
                    {
                        likedCourses.includes(course.id) ? 
                        (<FcLike fontSize="1.75rem" />)
                        :(<FcLikePlaceholder fontSize="1.75rem" />)
                    }
                </button>
               </div>
        </div>
        
        <div className=" p-2">
            <p className="text-[20px] font-bold text-[red]">{course.title}</p>
            <p className="text-[16px]">{course.description.length >100 ? (course.description.substr(0,100)+ "...Read More") :(course.description) }</p>
        </div>

    </div>

 )

}
export default Card;