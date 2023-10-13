import React, { useState ,useEffect } from "react";
import Navbar from './Component/Navbar';
import Filter from "./Component/Filter";
import {filterData ,apiUrl} from './data';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cards from "./Component/Cards";
import Spinner from "./Component/Spinner";

const App = () => {
   const [courses , setCourses] =useState(null);
   const [categery ,setCategery]=useState(filterData[0].title);
  const [loading, setLoading] = useState(true);

  async function fetchData()
  {
    setLoading(true);
    try
      {
        let res =await fetch(apiUrl);
        let result = await res.json();
        setCourses(result.data);
        }
         catch(error)
         {
          toast.error("Network me koi dikkat hai");
         }
         setLoading(false);
      }
  
     useEffect(() =>
     {
      fetchData();
     } ,[]);
  return (
  <div className=" min-h-screen flex flex-wrap flex-col  bg-sky-500">
  
     <div> <Navbar></Navbar>  </div>
     <div className=" ">
     <div>
        <Filter filterData={filterData}
         categery={categery}
          setCategery={setCategery}></Filter>
      </div>
      <div className=" w-max-[1200px] ">
      {
      loading ? (<Spinner/>) :<Cards courses={courses} categery={categery}></Cards>

      }
      </div>
  </div>  
  </div>
  );
}

export default App;
