import "./MiddleStyle.css";
import { useEffect } from "react";
import WOW from "wowjs";
import { motion } from "framer-motion";
const Middle = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <div className="containorMiddleElement">
      <motion.div
        className="innerMiddle wow jackInTheBox"
        data-wow-offset="80"
        data-wow-delay="0.8"
      >
        <h1>
          Making <br />
          Moments <br />
          Memorable.
        </h1>
      </motion.div>
    </div>
  );
};

export default Middle;
