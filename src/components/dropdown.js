import { Link } from 'react-router-dom';

function Dropdown({data}) {
    const list = []
    console.log(data)
    data && data.map((item, index) => {
        data.length > 0 && 
            list.push(<li key={`item-${index}-${index}`} className="dropdown-item">
                {<Link to={`/movie/${item.id}/${item.media_type}`} className="links-movies">
                    <img src={`http://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="Poster"/>
                    <div>
                        <h1>{item.name ? item.name : item.title}</h1>
                        <h3>{item.vote_average}</h3>
                    </div>
                </Link> 
              }
            </li>)
    })
    return (
        <ul className="dropdown-list" style={{ overflowY: 'scroll', height: '400px' }}>
            {list}
        </ul>
    );
}

export default Dropdown;
