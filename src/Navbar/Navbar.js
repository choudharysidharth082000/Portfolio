
import './NavbarStyle.css'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const Navbar = () =>
{
    return(

       <div className="containor w-100 bg-primary d-flex justify-content-center align-items-center">
            <div className="innerContainor d-flex justify-content-between align-items-center">
                <div className="imagecontainor">
                        <img className='p-3 img-fluid' src="/LOGO.png" alt="" />

                </div>
                <div className="linksContainor d-flex  justify-content-center align-items-center">
                        <ul className='d-inline'>
                            <li><a href="#">Resume</a></li>
                            <li><a href="#">Resume</a></li>
                            <li><a href="#">Resume</a></li>
                        </ul>

                </div>
            </div>

       </div> 
        

            
        
    )

}
export default Navbar;