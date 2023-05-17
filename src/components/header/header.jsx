import { useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function Header ({setSearchValue, searchValue, fetchMovies}){

    const searchMovies = (e) =>{
        e.preventDefault()
        fetchMovies(searchValue)
    }

    
    return (
        <div className='header'>
            <div className="menu">
                <div className="menu__logo">
                    <span>Dramatic</span>
                </div>
                <nav className="menu__link">
                    <Link to="/">Home</Link>
                    <a href="#">Tv Show</a>
                    <a href="#">Movies</a>
                    <a href="#">New</a>
                </nav>
                <form onSubmit={searchMovies} className="menu__search"> 
                    <input className="search__text" type="text" name="name" placeholder="SEARCH" onChange={(e) => setSearchValue(e.target.value)}/>
                    <button type='sumbit'><i className='fas fa-search'></i></button>
                </form>
                <i className='fas fa-gift'></i>
                <i className='far fa-bell'></i>

                <Profile/>
            </div>

            <div className="sidebar">
                <i className='fas fa-user-friends'></i>
                <i className='fas fa-list-ul'></i>
                <i className='fas fa-download'></i>
                <i className='fas fa-cog'></i>
            </div>
        </div>
    )
}

export const Profile = () =>{
    const [user, setUser] = useState(false)

    return (
        <div className='profile'> 
            {user ? <div className="profile__icon"></div> : <i className='fas fa-door-open'></i> }   
        </div>
    )
}

export default Header;