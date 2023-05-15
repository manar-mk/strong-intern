import users from '../../images/users.png';
import list from '../../images/list.png';
import download from '../../images/download.png';
import settings from '../../images/settings.png';

function Menu() {
    return (
        <div className="menu">
            <img src={users} alt="users " />
            <img src={list} alt="list" />
            <img src={download} alt="download" />
            <img src={settings} alt="settings" />
        </div>
    );
}

export default Menu;