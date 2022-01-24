import React from 'react'
import {Card, Icon, CardTitle, Row, Col} from 'react-materialize';
import 'materialize-css';
import Resume from '../images/resume.jpg';



function About() {
    return (
      <Row className= "resume black">
    <Col
      m={10}
      s={20}
      className="resume-card"
    >
       <Card className="resume-image"
       
      //  closeIcon={<Icon>close</Icon>}
       header={<CardTitle image={Resume}></CardTitle>}
      //  revealIcon={<Icon>{Img8}</Icon>}
     >
          </Card>
    </Col>,
  </Row>      
    );
  }
  
  export default About;