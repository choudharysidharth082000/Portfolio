import './Second.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react'
import WOW from 'wowjs';
const SecondHero = () =>
{
    useEffect(() => {
        

         new WOW.WOW({
            live: false
        }).init();


    }, []);
    
    return(
        <div className="containorSecond">
            <div className="innerSecond">
                <div className="leftside">
                    <div className="headingLeft">
                        <h1 className="wow slideInLeft" data-wow-iteration="1">Hi There, <br /> My name's <span>Sidharth</span>. I am a Software Developer</h1>
                        <div className="buttons">
                        <button className='m-2 btn btn-dark button1'>Resume</button>
                        <button className='m-2 btn btn-light button'>LinkedIn</button>
                        </div>

                    </div>
                </div>
                <div className="rightside">
                    <div className="containorImage">
                        <img className='img-fluid wow tada' data-wow-iteration="1" src="/svg images/mainImage.svg" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )

}
export default SecondHero;