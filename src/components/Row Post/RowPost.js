import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../utils/axiosInstance'
import { imageUrl500, API_KEY } from '../../constants/constant'
import ReactPlayer from 'react-player'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState('')
    useEffect(() => {
        axios.get(props.url).then((res) => {
            console.log('trending ', res.data);
            setMovies(res.data.results)
        })
    }, [])
    const getMovieTrailer = ((id) => {
        console.log('this is id of film ', id);
        axios.get(`movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then((res) => {
            console.log('this is trailer data ', res.data);
            if (res.data.results.length > 0) {
                setTrailerUrl(`https://www.youtube.com/watch?v=${res.data.results[0].key}`)
            } else {
                console.log('no trailer data is available');
            }
        })
    })
    return (

        <div className='row-posters'>
            <h2 className='title'>{props.title}</h2>
            <div className='posters-container'>
                <div className="posters">
                    {
                        movies.map((obj) => <img key={obj.id} onClick={() => getMovieTrailer(obj.id)} className={props.isSmall ? 'small-poster' : 'poster'} src={imageUrl500 + obj.poster_path} alt="row-posters" />)
                    }
                </div>
            </div>
            <div className={trailerUrl ? 'react-player' : ''}>

                {trailerUrl && <ReactPlayer url={trailerUrl} width='80%' height='100%' controls={true} />}

            </div>

        </div>
    )
}

export default RowPost
