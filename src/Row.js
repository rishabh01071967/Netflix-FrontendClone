import React from 'react'
import {useEffect,useState} from 'react'
import axios from './axios'
import './Row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

function Row({title,url,islarge}) {
    const base_url = "https://image.tmdb.org/t/p/original"
    const opts = {
        height: '390',
        width: '99%',
        playerVars: {
          
          autoplay: 0,
        },
      };
    const[movie,setmovie]=useState([])
    const[click,setClick]=useState("")
    useEffect(()=>{
    async function fetchposter(){
        const request=await axios.get(url)
        
        setmovie(request.data.results)
        return request.data.results
    }
    fetchposter()
    },[])
    const handleClick=(movies)=>{
      
        if (click) {
            setClick('')
          } else {
            movieTrailer(movies?.title || "")
              .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setClick(urlParams.get('v'));
              }).catch((error) => console.log(error));
          }
        

    }
  return (
    <div className='row'>
        <h2>{title}</h2>
    <div className='rowposter'>
        {
            movie.map((movies)=>{
                return <img onClick={()=>handleClick(movies)} key={movies.id} className={`rowposters ${islarge && "large"}`} src={`${base_url}${movies.poster_path}`}></img>
            })
        }
    </div>
{click && <Youtube videoId={click} opts={opts}></Youtube>}
    </div>
    
  )
}

export default Row