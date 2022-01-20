import React from "react";
import 'materialize-css';
import {Button, Card, Icon, CardTitle, Row, Col} from 'react-materialize';
import Img8 from '../images/img8.jpg';


function About() {
  return (
    <Row>
  <Col
    m={5}
    s={10}
    className="about-card"
  >
     <Card className="about-image"
     
    //  closeIcon={<Icon>close</Icon>}
     header={<CardTitle image={Img8}></CardTitle>}
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
      <h3>I am Xavier Banks</h3>
     <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime cumque ea porro eaque quibusdam aut obcaecati earum enim fugit aspernatur, quasi, officiis animi aliquam laboriosam repellat natus neque inventore hic?</h5>
     <h6>Questions?</h6>
     <Button
        href="https://www.instagram.com/xavierbanks__/" target="_blank"
        node="a"
        waves="light"
        className="bio-button grey darken-4 valign-center"
      >
        Instagram
      </Button>
      <Button
        href="mailto:bookingxbanks@gmail.com" target="_blank"
        node="a"
        waves="light"
        className="bio-button grey darken-4 valign-center"
      >
        Email
      </Button>
    </Card>
  </Col>
</Row>
</Row>      
  );
}

export default About;