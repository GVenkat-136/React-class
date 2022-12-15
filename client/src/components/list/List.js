import React, { Component } from 'react'
import axios from 'axios'
import Listdisplay from './Listdisplay'
const url='http://3.17.216.66:4000/restaurant?mealtype_id='

export default class List extends Component {
   constructor (props){
      super(props)
      this.state = {
         restuarantsdata:''
      }
   }
  render() {
    return (
      <>
        <Listdisplay restuarants={this.state.restuarantsdata} />
      </>
    )
  }
  componentDidMount(){
   let mealId = this.props.match.params.mealId;
   sessionStorage.setItem('mealId',mealId);
   axios.get(`${url}${mealId}`)
   .then(res=>{this.setState({restuarantsdata:res.data})})
  }
}
