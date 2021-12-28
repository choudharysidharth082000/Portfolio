import './MiddleStyle.css'
import { motion } from 'framer-motion'
const Middle = () =>
{
    return (
        <div className="containorMiddleElement">
            <motion.div
                
                className="innerMiddle">
               <h1>Making <br />Moments <br />Memorable.</h1>

            </motion.div>
            
        </div>
    )

}

export default Middle;