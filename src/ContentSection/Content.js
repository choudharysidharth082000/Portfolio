import "./ContentStyle.css";
import WOW from "wowjs";
import { useEffect } from "react";

const Content = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <div className="containorContent">
      <div className="haeder">
        <h1
          className="wow slideInLeft"
          data-wow-iteration="1"
          data-wow-offset="80"
          data-wow-delay="0.5"
        >
          Better Equiped. <br />
        </h1>
        <h1
          className="wow slideInRight"
          data-wow-iteration="1"
          data-wow-offset="80"
          data-wow-delay="0.7"
        >
          Better Prepared.{" "}
        </h1>
      </div>
    </div>
  );
};
export default Content;
