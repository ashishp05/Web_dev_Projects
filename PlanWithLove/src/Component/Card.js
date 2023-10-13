import {useState} from "react";

function Card({id ,info,name ,price ,image ,removeTour})
{  const [readmore ,setReadmore] =useState(false);

  const description = readmore ? info :`${info.substring(0,200)}....`;
  function readmoreHandler()
    {
        setReadmore(!readmore);
    }

    return(
    <div className="card">
         <img src={image} className="image"/>
        <div className="Card-info">
    
            <div className="price">₹{price}</div>
            <div className="name">{name}</div>
           </div>

            <div className="card-disc">{description}
            <span onClick={readmoreHandler}> {readmore ? `show less` :`read more`}</span>
            </div>
    
           <div className="btn">
            <button onClick={() => removeTour(id)}> Not Interested</button>
           </div>
    </div>
     );
}
export default Card;