import React,{Component} from 'react'
import './Search.css'
const url="http://localhost:8081/locations"
 class Search extends Component {
   constructor (){
      super()
      this.state = {
         location:'',
      }
   }
   renderlocation=(data)=>{
      if(data){
         return data.map((item) => {
             return(
                 <option value={item.state_id} key={item._id}>{item.state}</option>
             )
         })
      
     }
   }
   render(){
   return (

    <div>
      <section id="search">
            <div className="search_main">
               <div className="search_heading">
                  <h1>TOMMATO</h1>
               </div>
               <div className="search_caption">
                  <h3>Discover the best food & drinks in Hyderabad</h3>
               </div>
               <div className="search_inputs">
                  <i className="fa-solid fa-location-dot search_icon"></i>
                  <select className="Location" id="Search_loaction">
                     <option value="Choose the Cuurent Location">Choose the Location</option>
                        {this.renderlocation(this.state.location)}     
                  </select>
                  <i className="fa-solid fa-magnifying-glass search_icon"></i>
                  <input type="text" name="Search_Restaurant" id="Search_Restaurant"
                     placeholder="Search for restaurant, cuisine or a dish"/>
               </div>
            </div>
         </section>
    </div>
  )
  }
  componentDidMount(){
   fetch(url,{method: 'GET'})
   .then(res=>res.json())
   .then(data=>{this.setState({location:data})})
  }
}
export default Search