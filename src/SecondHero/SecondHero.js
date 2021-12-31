import './Second.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const SecondHero = () =>
{
    return(
        <div className="containorSecond">
            <div className="innerSecond">
                <div className="leftside">
                    <div className="headingLeft">
                        <h1>Hi There, <br /> My name's <span>Sidharth</span>. I am a Software Developer</h1>
                        <div className="buttons">
                        <button className='m-2 btn btn-dark button1'>Resume</button>
                        <button className='m-2 btn btn-light button'>LinkedIn</button>
                        </div>

                    </div>
                </div>
                <div className="rightside">
                    <div className="containorImage">
                        <img className='img-fluid' src="/svg images/mainImage.svg" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )

}
export default SecondHero;