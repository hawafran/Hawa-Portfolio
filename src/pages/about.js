import React from "react";
import 'materialize-css';
import {Button, Card, Icon, CardTitle, Row, Col} from 'react-materialize';
import Img from '../images/hawa-portfolio-pic.jpg';


function About() {
  return (
    <Row className= "black">
  <Col
    m={5}
    s={10}
    className="about-card"
  >
     <Card className="about-image"
     
    //  closeIcon={<Icon>close</Icon>}
     header={<CardTitle image={Img}></CardTitle>}
    //  revealIcon={<Icon>{Img8}</Icon>}
   >
        </Card>
  </Col>,

  <Row>
  <Col
    m={6}
    s={12}
  >
    <Card
      // actions={[
      //   <a key="1" href="#">This is a link</a>,
      //   <a key="2" href="#">This is a link</a>
      // ]}
      className="bio-card black"
      closeIcon={<Icon>close</Icon>}
      revealIcon={<Icon>more_vert</Icon>}
      textClassName="white-text"
      // title="I am Xavier Banks"
    >
      <h3>I am Hawa</h3>
     <h5>I am a graduate from University at Buffalo and the Columbia Engineering Coding Bootcamp. I am a new web developer with a background in management and finance, and am now looking to begin my tech career. </h5>
      <Button
        href="mailto:hawa.francis@gmail.com" target="_blank"
        node="a"
        waves="light"
        className="bio-button grey darken-4 valign-center"
      >
        Contact Me
      </Button>
      <Button
        href="https://github.com/hawafran" target="_blank"
        node="a"
        waves="light"
        className="bio-button grey darken-4 valign-center"
      >
        Github
      </Button>
    </Card>
  </Col>
</Row>
</Row>      
  );
}

export default About;