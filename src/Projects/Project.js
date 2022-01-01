import "./ProjectStyle.css";
import WOW from 'wowjs';
import { useEffect } from "react";
const Projects = () => {

  useEffect(() =>
  {
    new WOW.WOW(
      {
        live: false
      }
    ).init();

  },[])
  return (
    <div className="containorProjects mt-3">
      <div className="mainContentContainor">
        <div className="testSeries wow slideInLeft" data-wow-offset="80" data-wow-delay="0.6">
          <div className="descriptiontest">
            <h1>Test Series App</h1>
            <p className="pt-3 pb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="buttons">
              <button className="button1 btn btn-dark">Preview</button>
              <button className="button1 btn btn-dark">Github</button>
            </div>
          </div>
          <div className="imagetest">
            <img
              className="img-fluid"
              src="/svg images/Testseriesapp.svg"
              alt=""
            />
          </div>
        </div>
        <div className="netflix wow slideInLeft" data-wow-offset="80" data-wow-delay="1">
          <div className="descriptionNetflix">
            <h1 className="pt-2 pb-2">Netflix Clone</h1>
            <p className="pb-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptate, vero sequi odio mollitia libero dolorem quis repellat.
              Possimus qui nisi molestias? Sint vel sit asperiores dicta ea
              sequi! Quae, velit.
            </p>
            <div className="buttons">
              <button className="pt-2 button1 btn btn-dark">Preview</button>
            </div>
          </div>
          <div className="imageNetflix">
            <img className="img-fluid" src="/svg images/Netflix.svg" alt="" />
          </div>
        </div>
        <div className="fieldo wow slideInRight" data-wow-offset="80" data-wow-delay="0.8">
          <div className="descriptionFieldo">
            <h1 className="pt-2 pb-2">Fieldlo Desk</h1>
            <p className="pt-2 pb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus provident nulla asperiores recusandae dolorum sed
              porro, hic eveniet ratione quos assumenda dolore repellat sapiente
              dicta natus ducimus ea, officiis eaque?
            </p>
            <div className="buttons">
              <button className="btn btn-dark button1">Preview</button>
            </div>
          </div>
          <div className="imagecontainor">
            <img
              className="img-fluid"
              src="/svg images/FieldoDesk.svg"
              alt=""
            />
          </div>
        </div>
        <div className="portfolio wow slideInLeft" data-wow-offset="80" data-wow-delay="1.2">
          <div className="descriptionPortfolio">
            <h1>Personal Portfolio</h1>
            <p className="pt-3 pb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="buttons">
              <button className="button1 btn btn-dark">Preview</button>
              <button className="button1 btn btn-dark">Github</button>
            </div>
          </div>
          <div className="imagePortfolio">
            <img className="img-fluid" src="/svg images/newPort.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
