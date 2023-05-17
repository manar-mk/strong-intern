import { useEffect, useRef, useState } from 'react';
import NotFound from '../../images/not_found.png'
const IMAGE__PATH = 'https://image.tmdb.org/t/p/';

function MovieCast ({cast, crew}){
    const [more, setMore] = useState(3);
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
        <div className="movie__cast" >
            <h3>Cast and Crew Info</h3>
            <div className='movie__cast-item'   ref={ref}
                                                onMouseDown={onMouseDown}
                                                onMouseUp={onMouseUp} 
                                                onMouseMove={onMouseMove}>
                {cast.map((c, i)=>(
                    i < more ? <div className='movie__cast-card'>
                                <img src={c.profile_path ? `${IMAGE__PATH}w500${c.profile_path}`: NotFound} alt="#" />
                                <span>{c.name.length > 15 ? c.name.slice(0,14)+ '...' : c.name}</span>
                                <span>{c.character.length > 15 ? c.character.slice(0,16)+ '...' : c.character}</span>
                            </div> : null
                ))}
                {crew.map((c, i)=>(
                    i < more ? <div className='movie__cast-card'>
                                <img src={c.profile_path ? `${IMAGE__PATH}w500${c.profile_path}`: NotFound} alt="#" />
                                <span>{c.name.length > 15 ? c.name.slice(0,14)+ '...' : c.name}</span>
                                <span>{c.job.length > 15 ? c.job.slice(0,14)+ '...' : c.job}</span>
                            </div> : null
                ))}
            </div>  
            <button onClick={()=> setMore(more + 3)}>Show More <i class='fas fa-angle-right'></i></button>                        
        </div>
    )
}

export default MovieCast