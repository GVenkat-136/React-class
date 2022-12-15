import React from 'react'
import { ColorRing } from 'react-loader-spinner'
import {Link} from 'react-router-dom'

export default function Quicksearchdisplay(props) {
  const renderdata=({Mealtype})=>{
      if(Mealtype){
         return Mealtype.map((item)=>{
            return (
            <Link to={`/list/${item.mealtype_id}`} key={item._id} >
               <div className="card_body" value={item.mealtype_id} >
                  <div className="restuarant_img">
                     <img src={item.meal_image} alt="error"/>
                  </div>
                  <div className="restuarant_details">
                     <div className="name_price">
                        {item.mealtype}
                     </div>
                     <div className="location_details">
                        <p>{item.content}</p>
                     </div>
                  </div>
               </div>
            </Link>
            )
         })
      }
      else{
         return(
            <ColorRing
            visible={true}
            height="250"
            width="250"
            ariaLabel="blocks-loading"
            wrapperStyle={{
            }}
            wrapperClass="blocks-wrapper"
            colors={['red', 'red', 'red','red','red']}
            />
         )
      }
   }
  return (
   <div className="quicksearch_restaurant">
      {renderdata(props)}
    </div>
  )
}
