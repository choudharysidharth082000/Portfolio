import '../Navbar/NavbarStyle.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

//framer 
import {motion} from 'framer-motion'

const Navbar = () =>
{
    return (
        <div className="containorNavbar mw-100">
            <div className="innerContent d-flex justify-content-between align-items-center">
                <motion.div
                animate={{ x: [0, 100, 0] }}
                    
                transition={{ ease: "easeOut", duration: 2 }}    className="logoImage mw-100 d-flex align-items-center">
                    <img className='img-fluid' src="logos/LogoUsed.svg" alt="" />                   
                    
                    
                </motion.div>

             


            </div>

            
            
        </div>
    )
}


export default Navbar