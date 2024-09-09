import React from "react";
import "./Main.css"; // Import the CSS file
import Card from "./card/Card";

function Main() {
  return (
    <>
      
      <div className="main_home">
 
        <div className="form-container">
          <h1>
            <img
              src="https://www.centurypackersmovers.in/images/quote.png"
              alt=""
            />
          </h1>
     
          <form>
            <input type="text" placeholder="Enter your Name" />
            <input type="text" placeholder="Enter Phone/Mobile" />
            <input type="email" placeholder="Enter E-mail:" />
            <input type="text" placeholder="Moving From:" />
            <input type="text" placeholder="Moving To:" />
            <input type="date" placeholder="Date of Relocation:" />
            <textarea placeholder="Additional Requirements :"></textarea>
            <button type="submit">Send Enquiry</button>
          </form>
        </div>
        
      </div>
      <Card />
    </>
  );
}

export default Main;
