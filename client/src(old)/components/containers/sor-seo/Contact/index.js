import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {useInput} from "../../../hooks/useInput"
import { StyledContact } from "./Style";

// DO YOU REALLY WANT TO KEEP THIS USEINPUT SYNTAX??

export const Contact = () => {
  
  const {value:question, bind:bindQuestion, resetQuestion} = useInput('')
  const {value:name, bind:bindName, resetName} = useInput('')
  const {value:email, bind:bindEmail, resetEmail} = useInput('')
  
  // const dispatch = useDispatch();
  const [messageSentView, setMessageSentView] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    

    if(email.value !== '' && name.value !== ''){

    let objToSend = { question, name, email };
    console.log(objToSend);

    const { data } = await axios.post("/mailingRoutes/contactUsMail", objToSend);
    console.log(data);
    setMessageSentView(true);
    resetQuestion(); resetName(); resetEmail();
    } else{
      alert('Please fill in the form before submitting')
  }
  };


//   useEffect(() => {
//     dispatch(track(4));

//   });

  return (
    <StyledContact>
      {!messageSentView && (

        <form onSubmit={onSubmit}>
          <h2>See what <span className="gradient-color">SOR SEO</span> can do for you</h2>
          <hr />
          <p>Memorable. Scalable. Predictable.</p>

          <div>
            <label>Question / Request</label>
            <input {...bindQuestion} type="text" name="" id="question" placeholder="Hi, I'm be interested in..." />
          </div>
          
          <div>
            <label htmlFor="">Name</label>
            <input {...bindName} type="text" name="" id="name" placeholder="Andrew Michael" />
          </div>

          <div>
            <label htmlFor="">Business email</label>
            <input {...bindEmail} type="email" name="" id="business-email" placeholder="username@email.com" />
          </div>

          <input type="submit" value="Submit"></input>
        </form>
      )}

      {messageSentView && (
        <div style={{margin:'auto'}}>
          <h3 style={{ color: "green" }}>
            <i className="fas fa-check-circle"></i> Your message was sent
          </h3>
          <Link to="/">
            <i className="fas fa-long-arrow-alt-left"></i> Back to Home
          </Link>
        </div>
      )}
    </StyledContact>
  );
};
