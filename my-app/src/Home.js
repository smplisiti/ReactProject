import React from 'react';
import Footer from './Footer'
import './index.css';
import './App.css'
  
export const Home = () => (

    


<div className="row">
    <div className="feature-box col-lg-4">
     <a link="AboutUs"> <i className=" fas fa-users fa-4x"></i></a>
      <h3 className="feature-title"></h3>
      <p>We help your dog find a friendship that's better than belly rubs.</p> 
    </div>

    <div className="feature-box col-lg-4">
      <i className=" fas fa-certificate fa-4x"></i>
      <h3 className="feature-title"></h3>
      <p>Elite Clientele, meet someone unpawgettable.</p>
    </div>

    <div className="feature-box col-lg-4">
      <i className=" fas fa-tags fa-4x"></i>
      <h3 className="feature-title">
      
      </h3>
      <p>Pricing Plans for every dog's needs</p>
    </div>

    <Footer />
</div>



);

  
