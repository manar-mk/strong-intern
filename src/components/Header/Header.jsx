import search from '../../images/search.jpg';
import gift from '../../images/gift.png';
import bell from '../../images/bell.png';
import avatar from '../../images/avatar.png';

function Header({setSearchValue}) {
    const onClick = (e) => {
        setSearchValue(e.target.previousSibling.value);
    }

    return (
        <div className="header">
            <div className="header-left">
                <a href={`/`}><span className="logo">Dramatic</span></a>
                <div className='header-links'>
                    <a href="/#">HOME</a>
                    <a href="/#">TV SHOW</a>
                    <a href="/#">MOVIES</a>
                    <a href="/#">NEW</a>
                </div>
            </div>
            <div className="header-right">
                <div className="header-input">
                    <input type="text" placeholder="SEARCH"/>
                    <img src={search} alt='/' onClick={onClick}/>
                </div>
                <a href="/#"> <img src={gift} alt='/'/> </a>
                <a href="/#"> <img src={bell} alt='/'/> </a>
                <a href="/#"> <img src={avatar} alt='/'/> </a>
                <div>
                </div>
            </div>
        </div>
    );
}

export default Header;