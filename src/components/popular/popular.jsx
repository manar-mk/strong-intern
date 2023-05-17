import './index.css';
import IMBD from '../images/home/imdb.png'
import NotFound from '../images/not_found.png'
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
const IMAGE__PATH = 'https://image.tmdb.org/t/p/';


function Popular ({movie,  toWatchMovie}){
    const [state, setState] = useState({
        isScrolling: false,
        clientX: 0,
        scrollX: 0,
    })
    let ref = useRef()

    useEffect(()=>{
        const el  = ref.current
        if(el){
            const onWheel = e => {
                e.preventDefault()
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY * 4,
                    behavior: 'smooth'
                })
            }

            el.addEventListener('wheel', onWheel)

            return () => el.removeEventListener('wheel', onWheel)
        }
    }, [])

    const onMouseMove = e =>{
        if(ref && ref.current && !ref.current.contains(e.target)){
            return
        }
        e.preventDefault()

        const {clientX, scrollX, isScrolling} = state

        if(isScrolling){
            ref.current.scrollLeft = scrollX + e.clientX - clientX
            let sX = scrollX + e.clientX - clientX
            let cX = e.clientX
            setState({
                ...state,
                scrollX: sX,
                clientX: cX
            })
        }
    }

    const onMouseUp = e => {
        if(ref && ref.current && !ref.current.contains(e.target)){
            return
        }
        e.preventDefault()
        setState({
            ...state,
            isScrolling: false
        })
    }

    const onMouseDown = e => {
        if(ref && ref.current && !ref.current.contains(e.target)){
            return
        }
        e.preventDefault()
        setState({
            ...state,
            isScrolling: true,
            clientX: e.clientX
        })
    }

    useEffect(()=>{
        document.addEventListener('mousedown', onMouseDown)
        document.addEventListener('mouseup', onMouseUp)
        document.addEventListener('mousemove', onMouseMove)

        return () =>{
            document.removeEventListener('mousedown', onMouseDown)
            document.removeEventListener('mouseup', onMouseUp)
            document.removeEventListener('mousemove', onMouseMove)
        }
    })

    return (
        <div className='popular'>
            <div>
                <h2> Movie you must watch</h2>
            </div>
            <div className='popular__blog-movies'  ref={ref}
                                                   onMouseDown={onMouseDown}
                                                   onMouseUp={onMouseUp} 
                                                   onMouseMove={onMouseMove} >
                {movie.map((m)=>(
                    <div key={m.id} className='popular__card'>
                        <img src={m.poster_path ? `${IMAGE__PATH}w500${m.poster_path}`: NotFound}  className='popular__img' />
                        <div className="popular__info">
                            <Link to={"/movie/"}>
                                <h3 onClick={()=> toWatchMovie(m.id)} className='popular__info-name'>{m.title.length > 15 ? m.title.slice(0,16)+ '...' : m.title}</h3>
                            </Link>
                            <div className='popular__release'>{m.release_date ? m.release_date.slice(0,4) : null}</div>
                            <div className='popular__last'> 
                                <div>
                                    <img className='popular__imbd' src={IMBD} alt="#" />
                                    <span className='popular__vote'>{m.vote_average}</span>
                                </div>
                                <div>
                                    <i class='far fa-eye'></i>
                                    <i class='far fa-heart'></i>
                                </div>
                            </div>                            
                        </div>
                    </div>
                ))}
            </div>         
        </div>
    )
}

export default Popular;