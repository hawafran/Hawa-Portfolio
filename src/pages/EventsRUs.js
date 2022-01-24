import React from 'react';
import '../gallery.css'
import 'materialize-css';
import {Card, Icon, CardTitle, Row, Col} from 'react-materialize';
import Home from '../images/Events/events-home.jpg';
import Login from '../images/Events/Events-login.jpg';


function About() {
    return (
      <Row className= "projects-page black">
    <Col
      m={6}
      s={12}
      className="projects-card"
    >
       <Card className="projects-image black"
       
      //  closeIcon={<Icon>close</Icon>}
       header={<CardTitle image={Home}></CardTitle>}
      //  revealIcon={<Icon>{Img8}</Icon>}
     >
          </Card>
    </Col>

 <Col
      m={6}
      s={12}
      className="projects-card"
    >
       <Card className="projects-image black"
       
      //  closeIcon={<Icon>close</Icon>}
       header={<CardTitle image={Login}></CardTitle>}
      //  revealIcon={<Icon>{Img8}</Icon>}
     >
          </Card>
    </Col>,
      
    <Card
      actions={[
        <a key="1" href="https://github.com/phil-garip/EventsRUs 
        " target="blank">Github Repository</a>,
        <a key="2" href="https://events-r-us.herokuapp.com/

        "target="blank">Live App</a>
      ]}
      className="bio-card black"
      closeIcon={<Icon>close</Icon>}
      revealIcon={<Icon>more_vert</Icon>}
      textClassName="bio-card black white-text"
    >
     <h3>Concept:</h3>
     <h5>Events R Us is a social media-esque site which allows users to post and share local events. Events R Us’ motive is to connect local community members with events that align with their interests.
 </h5>

 <h3>Directions for Future Development:</h3>
 <h5> We intend to display events happening in real time, add social functionality to comment, like, rate and share events with friends. 
 </h5>

    </Card>,
  </Row>   
     
    );
  }
  
  export default About;