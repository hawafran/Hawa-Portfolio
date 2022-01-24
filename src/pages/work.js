import React, {useState} from 'react';
import '../gallery.css'
import 'materialize-css';
import {Button, Card, Icon, CardTitle, Row, Col} from 'react-materialize';
import Img1 from '../images/Lazy-Mixology/home.jpg';
import Img2 from '../images/pet-home.jpg';
import Img3 from '../images/events-home.jpg';
import Img4 from '../images/budget-tracker.jpg';




function About() {
    return (
      <Row className= "work-page">
    <Col
      m={6}
      s={12}
      className="work-card"
    >
       <Card className="work-image"
       
      //  closeIcon={<Icon>close</Icon>}
       header={<CardTitle image={Img1}></CardTitle>}
      //  revealIcon={<Icon>{Img8}</Icon>}
     >
         <Button
          href="/Lazy-Mixology" target="_blank"
          node="a"
          waves="light"
          className="bio-button grey darken-4 valign-center"
        >
          Learn More
        </Button>
          </Card>
    </Col>
    <Col
      m={6}
      s={12}
      className="work-card"
    >
       <Card className="work-image"
       
      //  closeIcon={<Icon>close</Icon>}
       header={<CardTitle image={Img2}></CardTitle>}
      //  revealIcon={<Icon>{Img8}</Icon>}
     >
         <Button
          href="/pet-app" target="_blank"
          node="a"
          waves="light"
          className="bio-button grey darken-4 valign-center"
        >
         Learn More
        </Button>
          </Card>
    </Col>
    <Col
      m={6}
      s={12}
      className="work-card"
    >
       <Card className="work-image"
       
      //  closeIcon={<Icon>close</Icon>}
       header={<CardTitle image={Img3}></CardTitle>}
      //  revealIcon={<Icon>{Img8}</Icon>}
     >
         <Button
          href="/EventsRus" target="_blank"
          node="a"
          waves="light"
          className="bio-button grey darken-4 valign-center"
        >
         Learn More
        </Button>
          </Card>
    </Col>
  </Row>      
    );
  }
  
  export default About;