import "./FooterStyle.css";
const Footer = () => {
  return (
    <div className="containerFooter">
      <div className="innerFooter">
        <div className="brandingFooter">
          <div className="heading">
            <img className="image" src="/logos/logoUsed.svg" alt="" />
            <p className="">Embrace the change</p>
            <div className="logos"></div>
          </div>
        </div>
        <div className="formFooter">
          <form action="">
            <div className="form-group">
              <input
                type="email"
                className="name form-control m-3"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Name"
              />
              <input
                type="email"
                className="name email form-control m-3"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
              <input
                type="email"
                class="message form-control m-3"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Message"
              />
              <button className="button2 btn btn-light">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
