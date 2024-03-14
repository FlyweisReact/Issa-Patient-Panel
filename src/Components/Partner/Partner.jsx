import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import partner1 from '../../img/partner1.png'
import partner2 from '../../img/partner2.png'
import partner3 from '../../img/partner3.png'
import './Partner.css'

export default class Testimonials extends Component {
  render() {
    return (
        <>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div className="partnercarousel">
        <div className="partnercontent1">
          <img src={partner1} />
          <div className="myCarousel">
            <p>
             Throughout our engagement we continue to be impressed with Infermedica’s involvement and the level of provided
            </p>
            <h3>Dr. Matthias Kuss</h3>
            <p>Head of Health Innovation</p>
            <h5 className="rating1">&#9733;&#9733;&#9733;&#9733;&#9734;</h5>
          </div>
        </div>

        <div className="partnercontent1">
          <img src={partner2} />
          <div className="myCarousel">
          <p>
          We highly appreciate the quality of Infermedica’s technology, ease of deployment and the outstanding ability to            </p>
            <h3>Julita Czyżewska </h3>
            <p>CEO, PZU Zdrowie</p>
            <h5 className="rating1">&#9733;&#9733;&#9733;&#9733;&#9734;</h5>
          </div>
        </div>
        </div>


        <div className="partnercarousel">
        <div className="partnercontent1">
          <img src={partner3} />
          <div className="myCarousel">
          <p>
          Infermedica beats out other “elephants in the room” such as IBM Watson. Throughout our engagement we continue to be            </p>
            <h3>Ben Rosner</h3>
            <p>CMIO, Get Well Network</p>
            <h5 className="rating1">&#9733;&#9733;&#9733;&#9733;&#9734;</h5>
          </div>
        </div>
        <div>
          <img src={partner3} />
          <div className="myCarousel">
          <p>
          Infermedica beats out other “elephants in the room” such as IBM Watson. Throughout our engagement we continue to be            </p>
            <h3>Ben Rosner</h3>
            <p>CMIO, Get Well Network</p>
            <h5 className="rating1">&#9733;&#9733;&#9733;&#9733;&#9734;</h5>
          </div>
        </div>
        </div>
      </Carousel>
      </>
    );
  }
}