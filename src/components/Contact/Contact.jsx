import React from "react";
import "./Contact.css";
import Header from "../Header/Header";

function Contact() {
  return (
    <>
    <Header/>
      <div class="contact">
        <div id="left">
          <h1>Contact Us</h1>

          <h2>Century Packers Movers .regd</h2>

          <p>
            <b>Conatct Person:</b>&nbsp;Kapil Nehra
            <br />
            <b>Address:</b> Serve No - 23/A, Samarth Nagar,Sri Siddhi Vinayaka
            Nagari Road, Transport Nagar, Nar Appu Ghar Nigdi, Pune - 411 044 -
            Maharashtra India.
            <br />
            <b>Tel:</b> +91-9341554433 / +91-7218545433
            <br />
            <b>E-Mail:</b> info@centurypakersmovers.in
          </p>

          <h2>Hadapsar Branch</h2>

          <p>
            Serve no. 18 Near Shivparvati Society Gondhale Nagar Hadapsar Pune
            28
            <br />
            <b>Mob:</b>&nbsp;+91-7218545433 / +91-7742665233
          </p>

          <h2>Bangalore Office</h2>

          <p>
            <b>Contact Person:</b>&nbsp;Amit Nehra
            <br />
            <b>Address:</b>&nbsp;B-55, 1st Floor DDUTTL Industrial Suburb Near
            Lorry Stand&nbsp; Yeshwanthpur, Bangalore - Karnataka - 560022
            <br />
            <b>Mob:</b> +91-9341554433 , Mob-9743336444
            <br />
            <b>E-Mail:</b> centurypacker@gmail.com
          </p>
        </div>

        <div id="right">
          <img
            src="	https://www.centurypackersmovers.in/images/sidebar2.jpg
"
          />
        </div>
      </div>
    </>
  );
}

export default Contact;
