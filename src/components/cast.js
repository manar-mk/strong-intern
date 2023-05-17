import React from 'react';

export const Cast = React.memo((props) => {
    return(
        <div className='cast'>
            <img src={`http://image.tmdb.org/t/p/w500/${props.img}`} alt='Actor'/>
            <h1>{props.name}</h1>
            <h3>{props.job ? props.job : props.character}</h3>
        </div>
    )
})

