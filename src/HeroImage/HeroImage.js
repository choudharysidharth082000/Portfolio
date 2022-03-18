import "./Hero.css";
import { motion } from "framer-motion";

function HeroImage() {
  return (
    <div className="containorHero">
      <div className="innerContainor ">
        <motion.div className="leftContainor">
          <div className="heading">
            <h1>Hi There! My name's Sidharth. I am a Software Developer</h1>
            <div className="buttons d-flex align-items-center">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.8 }}
                className="button1 btn btn-dark m-2"
              >
                Resume
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.8 }}
                className="button btn btn-dark m-2"
              >
                LinkedIn
              </motion.button>
            </div>
          </div>
        </motion.div>
        <div className="rightContainor">
          <div className="mainImage">
            <motion.img
              animate={{ scale: [0, 1.2, 1.1] }}
              transition={{ ease: "easeOut", duration: 2 }}
              className="img-fluid"
              src="/svg images/main.gif"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
