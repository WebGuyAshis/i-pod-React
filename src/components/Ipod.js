import ZingTouch from 'zingtouch';

import React from 'react';
import '../assets/styles/Ipod.css'
import Next from '../assets/images/next-track.png'
import back from '../assets/images/previous-track.png'
import pause from '../assets/images/pause.png'
import Display from './Display';
class Ipod extends React.Component {
    constructor() {
        super();
        this.state = {
            navItem: 'Ipod',
            navigationActive: 'Music',
            prevAngle: 0,
            coverDisplay: {
                url: 'url(""https://9to5mac.com/wp-content/uploads/sites/6/2021/08/apple-music-logo-2021-9to5mac.jpg?quality=82&strip=all&w=1000")'
            }
        }
    }
    componentDidMount() {
        let wheel = document.querySelector('.buttons');
        let touchRegion = ZingTouch.Region(wheel);

        touchRegion.bind(wheel, 'rotate', function (e) {
            console.log("Gesture Working");

            let angle = Math.floor(e.detail.distanceFromOrigin);
            let prevAngle = this.state.prevAngle;
            // console.log("Angle:", angle);

            if (angle % 15 === 0 && angle > 0) {
                console.log("Rotating ClockWise:", angle);
                
                
                
                
                
                
                
                
                
                
                // let nav = this.state.navigationActive;
                // this.setState({
                //     navigationActive: nav === 'Music' ? 'Photos'
                //         :nav === 'Photos'? 'Games'
                //         :nav === 'Games' ? 'Appstore'
                //         :nav ==='Appstore'? 'Settings'
                //         :'Music',
                // })
            } else if (angle % 15 === 0 && angle < 0) {
                console.log("Rotating AntiClockWise:", angle);
                let nav = this.state.navigationActive;

                this.setState({
                    navigationActive: nav === 'Settings' ? 'Appstore'
                        :nav === 'Appstore'? 'Games'
                        :nav === 'Games' ? 'Photos'
                        :nav ==='Photos'? 'Music'
                        :'Settings',
                })
            }

        }.bind(this));
    }
    render() {
        return (
            <div className="ipod-container">
                <div className="displayContainer">
                    <Display />
                </div>
                <div className="scrollButton">
                    <div className="buttons">
                        <div className="menu-btn scroll-btn">
                            <h3 id="menu" className='src-btn'>
                                MENU
                            </h3>
                        </div>
                        <div className="forward-skip-btn scroll-btn">
                            <img src={Next} alt="" id="forward" className='src-btn' />
                        </div>
                        <div className="back-skip-btn scroll-btn">
                            <img src={back} alt="" id="back" className='src-btn' />
                        </div>
                        <div className="play-pause-btn scroll-btn">
                            <img src={pause} alt="" id="pause" className='src-btn' />
                        </div>
                        <div className="main-btn">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ipod;