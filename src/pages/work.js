import React, {useState} from 'react';
import '../gallery.css'
import 'materialize-css';
import {Button, Card, Icon, CardTitle, Row, Col} from 'react-materialize';
import Img1 from '../images/mixology-home.jpg';
import Img2 from '../images/pet-home.jpg';
import Img3 from '../images/events-home.jpg';
import PageSrc from './Lazy-Mixology';




function About() {
    return (
      <Row className= "work-page">
    <Col
      m={6}
      s={6}
      className="about-card"
    >
       <Card className="about-image"
       
      //  closeIcon={<Icon>close</Icon>}
       header={<CardTitle image={Img1}></CardTitle>}
      //  revealIcon={<Icon>{Img8}</Icon>}
     >
         <Button
          href="mailto:hawa.francis@gmail.com" target="_blank"
          node="a"
          waves="light"
          className="bio-button grey darken-4 valign-center"
        >
          Contact Me
        </Button>
          </Card>
    </Col>
    <Col
      m={6}
      s={6}
      className="about-card"
    >
       <Card className="about-image"
       
      //  closeIcon={<Icon>close</Icon>}
       header={<CardTitle image={Img2}></CardTitle>}
      //  revealIcon={<Icon>{Img8}</Icon>}
     >
         <Button
          href="mailto:hawa.francis@gmail.com" target="_blank"
          node="a"
          waves="light"
          className="bio-button grey darken-4 valign-center"
        >
          Contact Me
        </Button>
          </Card>
    </Col>
    <Col
      m={6}
      s={6}
      className="about-card"
    >
       <Card className="about-image"
       
      //  closeIcon={<Icon>close</Icon>}
       header={<CardTitle image={Img3}></CardTitle>}
      //  revealIcon={<Icon>{Img8}</Icon>}
     >
         <Button
          href="mailto:hawa.francis@gmail.com" target="_blank"
          node="a"
          waves="light"
          className="bio-button grey darken-4 valign-center"
        >
          Contact Me
        </Button>
          </Card>
    </Col>
  </Row>      
    );
  }
  
  export default About;