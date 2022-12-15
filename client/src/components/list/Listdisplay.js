import React from 'react'
import './List.css'
import { ColorRing } from 'react-loader-spinner'
import "../Home/Quicksearch.css"
import arrow from '../.././resources/arrow.webp'
import tab from '../.././resources/tag1.webp'


export default function Listdisplay(props) {

   const renderrestuarants=({restuarants}) =>{
      if(restuarants){
            return restuarants.map((item)=>{
             return(
               <div className="listrestaurant_card" key={item._id} value={item.restaurant_id} >
                  <div className="listcard_body">
                     <div className="listrestuarant_img">
                        <img src={item.restaurant_thumb} alt="" />
                     </div>
                     <div className="listrestuarant_details">
                        <div className="listname_price">
                           <h1>{item.restaurant_name}</h1>
                        </div>
                        <div className="listlocation_details">
                           <p>{item.address}</p>
                        </div>
                     </div>
                     <div className="listrestuarant_feedback">
                        <img src={tab} className="listfeedback_tag" alt="tag" />
                        <p>300+ orders placed from here recently</p>
                        <img src={arrow}className="listfeedback_arrow" alt="arrow" />
                     </div>
                  </div>
               </div>
            )
         })
      }else{
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
   <div className='container-fulied list' >
      <div className='datalist'>
         {renderrestuarants(props)}
      </div>
    </div>

  )
}
