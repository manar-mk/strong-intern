import logo from '../assets/DRAMATIC.svg';
import search1 from '../assets/search.svg';
import gift from '../assets/gift.svg';
import bell from '../assets/bell.svg';
import profile from '../assets/profile.jpg';
import burger from '../assets/burger1.svg';
import { Link } from 'react-router-dom';
import Dropdown from './dropdown';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

function Header(){
    const [search, setSearch] = useState('')
    const [list, setList] = useState([])

    const dropdownRef = useRef(null)

    useEffect(() => {
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])

    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setSearch("")
            setList([])
        }
    }

    const onChange = (e) => {
        setSearch(e.target.value)
        axios.get(`https://api.themoviedb.org/3/search/multi?query=${e.target.value}&include_adult=false&language=en-US&page=1&api_key=b6c1b5a41f7ab1a8a29ad5bf4f2d5530`)
        .then(res => {
            setList(res.data.results);
        }).catch(e => console.log(e))
    }
    return(
        <header className="header">
            <div className='header-links'>
                <Link to='/'><img src={logo} alt="Logo"/></Link>
                <Link to='/'>Home</Link>
                <a href='#'>Tv Show</a>
                <a href='#'>Movies</a>
                <a href='#'>New</a>
            </div>
            <div className='header-right'  ref={dropdownRef}>
                <div className='header-search'>
                    <input type="text" name="q" placeholder='Search' value={search} onChange={onChange}/>
                    <img src={search1} alt="Search"/>
                    {list.length > 0 && <Dropdown  data={list}/>}
                </div>
                <a><img src={gift} alt="Gift" /></a>
                <a><img src={bell} alt="Bell" /></a>
                <a><img src={profile} alt="Profile" /></a>
            </div>

            <div className='burger'>
                <img src={burger} alt="Burger"/>
            </div>
        </header>
    )
}


export default Header;