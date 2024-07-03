import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const About = () => {
 
  return (
    <div className="about">
      <h2 id="aboutus">About Us</h2>
      <div className="sections">
        <div>
          <h3>Corporate Information</h3>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREotwOL_rJK9WyI9RCpknRxTRAckTXh_1zmg&s" alt="Corporate Information" />
          <p>ELICO Ltd is a leading Analytical Instruments Design & Manufacturing Company established in 1960 headquartered in Hyderabad, Telangana. It is the first Analytical Instrumentation Company in India.</p>
          <button type="button">More...</button>
        </div>
      </div>
      <div className="sections">
        <div>
          <h3>Research & Development</h3>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1MXAyzZX5FOIb5qKT-50OOdqfcKWNCskaYw&s" alt="Research & Development" />
          <p>A strong commitment to R&D is at the heart of every Elico employee and is the potent ingredient behind every successful Elico product. We boast of a state-of-the-art R&D Department which, we are proud to proclaim, is recognized by the Department of Scientific & Industrial Research, Govt. of India Research & Development. Our dedication and commitment to R&D has not only yielded us tremendous success but also numerous awards from the Government of India.</p>
          <button type="button">More...</button>
        </div>
      </div>
      <div className="sections">
        <div>
          <h3>Career Opportunities</h3>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVZ3nNWoog8yxoSpuLn2hRUyuqlgl3Al__-A&s" alt="Career Opportunities" />
          <p>We offer great opportunities to innovate, learn and work on challenging assignments. We have a great working environment and diverse teams with highly motivated and talented people. We offer opportunities to collaborate, learn and interact with some of the best minds in the business.</p>
          <button type="button">More...</button>
        </div>
      </div>
      <div className="sections">
        <div>
          <h3>60 years of our Journey</h3>
          <img src="https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1578916865938-eec9924ffae0" alt="60 years of our Journey" />
          <p>Technological Contribution to the Nation and to customers has been the hallmark of Elico’s six decade journey. Our core competency and domain expertise in the fields of Electrochemistry, Spectroscopy and Chromatography that is supported by contemporary digital technologies such as AI, ML, IoT and Cloud Computing assists in providing holistic solutions to our clients.</p>
          <button type="button">More...</button>
        </div>
      </div>
    </div>
  );
};
export default About;
