import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from '../components/Navbar/Navbar'
import Home from '../pages/Home'
import Login from '../pages/Login'
import MovieDetails from '../pages/MovieDetails'
import Register from '../pages/Register'


const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element ={<Home/>}/>
            <Route path='/login' element ={<Login/>}/>
            <Route path='/register' element ={<Register/>}/>
            <Route path='/details:id' element ={<MovieDetails/>}/>
        </Routes>

        </BrowserRouter>
    </div>
  )
}

export default AppRouter