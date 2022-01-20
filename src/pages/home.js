import React from "react";
import 'materialize-css';
import {Button, Card, Icon, CardTitle, Row, Col} from 'react-materialize';
// import Img from '../images/Img.jpg';
import Img from '../images/hawa-portfolio-pic.jpg';


function Home() {
  return (
    <Row>
  <Col
    m={4}
    s={8}
    className="about-card"
  >
     <Card className="about-image"
     
    //  closeIcon={<Icon>close</Icon>}
     header={<CardTitle image={Img}></CardTitle>}
    //  revealIcon={<Icon>{Img}</Icon>}
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
      <h1>Hello...</h1>
     <h5>My name is Hawa and I am a full stack web developer located in New York, NY</h5>
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
</Row>    
  );
}


export default Home;