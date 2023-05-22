import '../assets/styles/Ipod.css'
import Next from '../assets/images/next-track.png'
import back from '../assets/images/previous-track.png'
import pause from '../assets/images/pause.png'
function Ipod(){
    return(
        <div className="ipod-container">
            <div className="displayContainer">
                <div className="screen">
                    
                </div>
            </div>
            <div className="scrollButton">
                <div className="buttons">
                    <div className="menu-btn scroll-btn">
                        <h3 id="menu" className='src-btn'>
                            MENU
                            </h3>
                    </div>
                    <div className="forward-skip-btn scroll-btn">
                        {/* <span id="forward" className='src-btn'>
                        {Next}
                        </span> */}
                        <img src={Next} alt="" id="forward" className='src-btn'/>
                    </div>
                    <div className="back-skip-btn scroll-btn">
                        {/* <span id="back" className='src-btn'>
                        Back
                        </span> */}
                        <img src={back} alt="" id="back" className='src-btn' />
                    </div>
                    <div className="play-pause-btn scroll-btn">
                        {/* <span id="play" className='src-btn'>
                        Play
                        </span> */}
                        <img src={pause} alt="" id="pause" className='src-btn'/>
                    </div>
                    <div className="main-btn">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ipod;