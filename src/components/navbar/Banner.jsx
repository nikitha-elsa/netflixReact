import React, {useEffect, useState} from 'react'
//import React from 'react'
import {API_KEY,imageurl} from '../../constants/constant'
import axios from 'axios'
import "./Banner.css"


function Banner() 
{
  const [movie, setMovie]= useState()
  useEffect(() =>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`) .then((response)=>{
      console.log(response.data.results[0]);
      setMovie(response.data.results[0])
    })
  },[])
  
  return (
    <div 
    style={{backgroundImage:`url(${movie ? imageurl+movie.backdrop_path:""})`}}
    className='Banner'>
        <div className='content'>
                <h1 className='title'>{movie ? movie.title:""}</h1>
                <div className='buttons'>
                    <button className='button'>play</button>
                    <button className='button'>my list</button>
                </div>
                <h1 className='description'>{movie ? movie.overview:""}</h1>
            
        </div>
      <div className="fade"></div>
    </div>
  )
}

export default Banner
