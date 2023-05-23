import '../assets/styles/display.css'
import battery from '../assets/images/battery.png'
import musicIcon from '../assets/images/music-icon.png';
import galleryIcon from '../assets/images/gallery-icon.png';
import gamesIcon from '../assets/images/game-icon.png';
import appstoreIcon from '../assets/images/appstore-icon.png';
import settingsIcon from '../assets/images/setting-icon.png';

function Display() {
    return (
        <div className="display">
            <div className="nav-list">
                <div className='heading'>
                    <p id='ipod-title'>Ipod</p>
                    <img src={battery} alt="" className='battery' />
                </div>
                <ul className='main-list'>
                    <li className='nav-cat' id='music'>
                        <img src={musicIcon} alt="" className='nav-list-img' />
                        <p className="nav-list-heading">Music</p>

                    </li>
                    <li className='nav-cat' id='photos'>
                        <img src={galleryIcon} alt="" className='nav-list-img' />
                        <p className="nav-list-heading">Photos</p>
                    </li>
                    <li className='nav-cat' id='games'>
                        <img src={gamesIcon} alt="" className='nav-list-img' />
                        <p className="nav-list-heading">Games</p>
                    </li>
                    <li className='nav-cat' id='appstore'><img src={appstoreIcon} alt="" className='nav-list-img' />
                        <p className="nav-list-heading">AppStore</p></li>
                    <li className='nav-cat' id='appstore'><img src={settingsIcon} alt="" className='nav-list-img' />
                        <p className="nav-list-heading">Settings</p></li>
                </ul>
            </div>

            <div className="display-img">

            </div>
        </div>
    );
}

export default Display;