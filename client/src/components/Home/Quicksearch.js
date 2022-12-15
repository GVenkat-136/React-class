import React, {Component}from 'react'
import Quicksearchdisplay from './Quicksearchdisplay'
import "./Quicksearch.css"

 class Quicksearch extends Component { 
   constructor(props){
      super(props)
       this.state = {
         Mealtype:'',
       }
   }
   render(){
   return (
      <>
         <section id="Quick_search">
               <div className="quicksearch_block">
                  <div className="quicksearch_heading">
                     <h1>Quick Search</h1>
                  </div>
                  <div className="quicksearch_caption">
                     <p>Explore curated lists of top restaurants, cafes, pubs, and bars in
                        Hyderabad, based on trends</p>
                  </div>
                   <Quicksearchdisplay Mealtype={this.state.Mealtype} />
               </div>
         </section>
      </>
  )
}
componentDidMount(){
   fetch("http://3.17.216.66:4000/quicksearch",{method: 'GET',})
   .then(res=>res.json())
   .then(data=>{this.setState({Mealtype:data})})
}
}
export default Quicksearch