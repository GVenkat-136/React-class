import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import List from './components/list/List'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
        <Route exact path='/' component={Home} />
        <Route path='/list/:mealId' component={List} />
      <Footer />
    </BrowserRouter>
  )
}
