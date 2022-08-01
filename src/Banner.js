import axios from './axios'
import React, { useEffect, useState } from 'react'
import requests from './request'
import './Banner.css'

export default function Banner() {
const[Banner,setBanner]=useState([])
    useEffect(()=>{
        async function fetchBanner(){
            const response1=await axios.get(requests.fetchNetflixOriginals)
            
            setBanner(response1.data.results[Math.floor(Math.random() * response1.data.results.length)])
        }
      fetchBanner()  
    },[])
    function truncate(str,n){
        return str?.length>n?str.slice(0,n+1)+'...':str
    }
console.log(Banner)
  return (
   <header className='Banner'
   style={{
    backgroundImage:`url(https://image.tmdb.org/t/p/original${Banner.backdrop_path})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
   }}
   
   >

    <div className='BannerContent'>
    <h1 className='title'>
        {Banner.name}
    </h1>
    <div className='button'>
        <button className='button1'>Play</button>
        <button className='button1'>Trailer</button>
    </div>
    <h1 className='description'>
        {truncate(Banner.overview,150)}
    </h1>
    </div>
   </header>
       
  
  )
}
