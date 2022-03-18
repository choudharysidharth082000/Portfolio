import "./FooterStyle.css";
import { useState,useEffect } from "react";
import axios from 'axios';


const Footer = () => {
  const [message, setMessage] = useState(
    {
      name: '',
      message: '',
      email: ''
    }
  )
  let name, value;
const handleInput = (e) =>
{
  name = e.target.name;
  value = e.target.value;
  console.log(name);
  console.log(value);

  setMessage({...message, [name]: value});
}
const submitMessage = async (e) =>
{
  e.preventDefault();
  try {
    const postMessage = await axios.post('https://sidharthserver.herokuapp.com/v1/messsage/postMessage', message);
    if(!postMessage)
    {
      alert('Message Not Posted');
    }
    else 
    {
      if(postMessage.status === false)
      {
        alert('Something went Wrong');
      }
      else 
      {
        alert('Message Posted Successfully!!');
      }
    }
    
  } catch (error) {
    
    console.log(error);
  }
  
}


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
                name= "name"   
                value={message.name} 
                onChange={handleInput}            
                className="name form-control m-2"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Name"
              />
              <input
                type="email"
                name= "email"
                value={message.email}
                onChange={handleInput}
                className="name email form-control m-2"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
              <input
                type="email"
                name = "message"
                value={message.message}
                onChange={handleInput}
                class="message form-control m-2"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Message"
              />
              <button className="button2 btn btn-light" onClick={submitMessage}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
