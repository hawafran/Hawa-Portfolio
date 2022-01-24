import React from 'react';
import '../gallery.css'
import 'materialize-css';
import {Card, Icon, CardTitle, Row, Col} from 'react-materialize';
import Home from '../images/Fetch/pet-home.jpg';
import Search from '../images/Fetch/pet-search.jpg';





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
       header={<CardTitle image={Search}></CardTitle>}
      //  revealIcon={<Icon>{Img8}</Icon>}
     >
          </Card>
    </Col>,
      
    <Card
      actions={[
        <a key="1" href="https://github.com/mandellbutler/PetApp" target="blank">Github Repository</a>,
        <a key="2" href="https://fetchpetapp.herokuapp.com/
        "target="blank">Live App</a>
      ]}
      className="bio-card black"
      closeIcon={<Icon>close</Icon>}
      revealIcon={<Icon>more_vert</Icon>}
      textClassName="bio-card black white-text"
    >
     <h3>Concept:</h3>
     <h5>Fetch is an application that connects people who need company with the pets that can provide it. Users can find pets from local adoption centers or owners who have to rehouse their friends.
 </h5>
 <h3>Directions for Future Development:</h3>
 <h5> We intend on including personal details such as address for each profile. We also intend on listing pets each person is interested in adopting or putting up for addoption, and linking pet profiles to the personal profile. 
 </h5>

    </Card>,
  </Row>   
     
    );
  }
  
  export default About;