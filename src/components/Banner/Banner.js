import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../utils/axiosInstance'
import { API_KEY ,imageUrlOriginal} from '../../constants/constant'

function Banner() {
    const [movie,setMovie]=useState('')
    useEffect(() => {
        axios.get(`movie/popular?api_key=${API_KEY}`).then((res) => {
            console.log(res.data.results[0])
            const randomIndex = Math.floor(Math.random() * 20);
            setMovie(res.data.results[randomIndex])
        })
    }, [])
    return (
        <div style={{backgroundImage:`url(${movie?imageUrlOriginal+movie.backdrop_path:''})`}}
        className='banner'>
            <div className='content'>
                <h1 className='title'>{movie?movie.original_title:''}</h1>
                <div className='banner_buttons'>
                    <button className='play-button button'>play</button>
                    <button className='info-button button'>more info</button>
                </div>
                <h1 className='description'>{movie?movie.overview:''}</h1>
            </div>
            <div className="bottom_fade">

            </div>
        </div>
    )
}

export default Banner
