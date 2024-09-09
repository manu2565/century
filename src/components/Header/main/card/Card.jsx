import React from "react";
import "./Card.css";

function Card() {
  return (
    // <div className="card-container">

    //   <div className="card-column">

    //     <img alt="Airtel" src="	https://www.centurypackersmovers.in/images/airtel.jpg" />
    //     <img alt="Ford" src="	https://www.centurypackersmovers.in/images/ford.jpg" />
    //     <img alt="Idea" src="	https://www.centurypackersmovers.in/images/king.jpg" />
    //     <img alt="Kingfisher" src="images/king.jpg" />
    //   </div>
    //   <div className="card-column">
    //     <img alt="Vodafone" src="https://www.centurypackersmovers.in/images/vodaphone.jpg" />
    //     <img alt="Wipro" src="https://www.centurypackersmovers.in/images/wipro.jpg" />
    //     <img alt="" src="	https://www.centurypackersmovers.in/images/westernunoin.png" />
    //   </div>
    // </div>

    <div class="card-container">
      <div class="card">
        <img
          src="	https://www.centurypackersmovers.in/images/airtel.jpg"
          alt="Image 1"
        />
      </div>
      <div class="card">
        <img
          src="https://www.centurypackersmovers.in/images/ford.jpg"
          alt="Image 2"
        />
      </div>
      <div class="card">
        <img
          src="https://www.centurypackersmovers.in/images/idea.jpg"
          alt="Image 3"
        />
      </div>
      <div class="cards">
        <img
          src="https://www.centurypackersmovers.in/images/king.jpg"
          alt="Image 3"
        />
      </div>

      <div class="card">
        <img
          src="https://www.centurypackersmovers.in/images/idea.jpg"
          alt="Image 3"
        />
      </div>
  
      <div class="cardss">
        <img
          src="https://www.centurypackersmovers.in/images/wipro.jpg"
          alt="Image 3"
        />
      </div>
      <div class="cardsss">
        <img
          src="https://www.centurypackersmovers.in/images/westernunoin.png"
          alt="Image 3"
        />
      </div>
    </div>
  );
}

export default Card;
