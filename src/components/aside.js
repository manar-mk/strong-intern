import users from '../assets/users.svg';
import list from '../assets/list.svg';
import download from '../assets/download.svg';
import settings from '../assets/settings.svg';


function Aside(){
    return(
        <aside className="aside">
            <a><img src={users} alt="users"/></a>
            <a><img src={list} alt="lists"/></a>
            <a><img src={download} alt="Download"/></a>
            <a><img src={settings} alt="Settings"/></a>
        </aside>
    )
}

export default Aside;