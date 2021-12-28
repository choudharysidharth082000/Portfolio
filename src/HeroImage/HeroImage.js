import "./Hero.css";
function HeroImage() {
  return (
    <div className="containorHero">
      <div className="innerContainor ">
        <div className="leftContainor">
          <div className="heading">
            <h1>Hi There! <br /> My name's Sidharth. I am a Software Developer</h1>
            <div className="buttons d-flex align-items-center">
              <button className="button1 btn btn-dark m-2">Resume</button>
              <button className="button btn btn-dark m-2">LinkedIn</button>
            </div>
          </div>
        </div>
        <div className="rightContainor">
          <div className="mainImage">
            <img
              className="img-fluid"
              src="https://opendoodles.s3-us-west-1.amazonaws.com/ballet.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
