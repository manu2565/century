import React from "react";
import "./About.css";
import Header from "../Header";

function About() {
  return (
    <>
    <Header/>
      <div className="Abouts">
        <div className="left-side">
          <h1>About Us</h1>

          <br />
          <p>
            <strong>Century Packers Movers</strong> was founded by a group of
            professionals. The Packers and Movers Company in Pune, has shaped
            itself into one of the world's most admired pack and move management
            enterprises. Our Company situated in India, is built on the strong
            principles of safety, integrity and reliability. We offer to our
            clients cost effective and prompt packing and moving services,
            addressing the varied needs of customers throughout India.
          </p>
          <br />

          <p>
            We have come in to being to provide enterprise logistics solutions
            that are efficient and completely reliable. We put Our Customers
            first. And we are committed to stone upturned to gain the confidence
            and trust of all our customers by conducting our business with
            honesty, integrity and humility. While we engage ourselves to this
            task - it will be our endeavor to create surpluses for our
            customers, society, our employees and our stakeholders.
          </p>
          <p>
            We at{" "}
            <a href="https://www.centurypackersmoversbangalore.in/">
              <strong>Century Packers and Movers</strong>
            </a>
            offer comprehensive solution to all your relocation needs. We have
            dedicated team of packers and movers who are professionally trained
            in their works. Entire process of relocation is done with utmost
            care so that we can make ensure you to deliver your valuable goods
            safe and secure in time.
          </p>

          <p>
            We offer comprehensive door to door packers movers and relocation
            services with a personal touch. We are big enough to handle all your
            relocation requirements to the utmost satisfaction yet small enough
            not to be complacent with our existing large client base.
          </p>
        </div>
        <div id="right">
          <img src="https://www.centurypackersmovers.in/images/sidebar.png" />
        </div>
      </div>
    </>
  );
}

export default About;
