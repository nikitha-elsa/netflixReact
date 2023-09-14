import { useEffect, useState } from 'react'
import {API_KEY, imageurl} from '../../constants/constant'
import './RowPost.css'
import axios from 'axios'

function RowPost() {
const[movie, setMovie]=useState([])
useEffect(()=> {
  axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`) .then((response)=>{
    console.log(response.data);
    setMovie(response.data.results)
  })

}, [])
  return (
    <div className='row'>
      <h2>Netflix Orginals</h2>
      <div className='posters'>
        {movie.map((obj)=>
        <img className='poster' src= {`${imageurl+obj.backdrop_path}`} alt="" />
        )}
        
        
      </div>
    </div>
  )
}

export default RowPost
