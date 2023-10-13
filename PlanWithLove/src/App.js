import React ,{useState}from "react";
import data from "./data";
import Tours from "./Component/Tours";
const App = () => {
  const [tours,setTours] =useState(data);


  function removeTour(id)
  {
    const newTour=tours.filter(tour =>tour.id !== id);
     setTours(newTour);
      
  }

  if(tours.length === 0)
  {
    return(
      <div className="no-tours">
        <h2 className="heading-no-tours">
          NO TOURS LEFT
        </h2>
        <button className="btn-refresh" onClick={() =>setTours(data)}>
           Refresh
        </button>
      </div>
    )
  }
  return(
 
      
      <div>
      <Tours tours={tours} removeTour={removeTour}></Tours>

      </div>
  
  )
};

export default App;
