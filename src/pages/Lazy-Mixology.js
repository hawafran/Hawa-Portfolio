import React from 'react';
import 'materialize-css';
import '../App.css';
import {Button, Card, Icon, CardTitle, Row, Col} from 'react-materialize';
import Home from '../images/mixology-home.jpg'
import Demo from '../images/mixology-ingredients.jpg'

function Mixology() {
    return (
            <Row classNmae="projects-page">
          <Col
            m={6}
            s={12}
            className="mixology-card"
          >
             <Card className="mixology-image black"
             
            //  closeIcon={<Icon>close</Icon>}
             header={<CardTitle image={Home}></CardTitle>}
            //  revealIcon={<Icon>{Img8}</Icon>}
           >
                </Card>
          </Col>
          <Row>
        <Col
          m={6}
          s={12}
          className="mixology-card"
        >
           <Card className="mixology-image black"
           
          //  closeIcon={<Icon>close</Icon>}
           header={<CardTitle image={Demo}></CardTitle>}
          //  revealIcon={<Icon>{Img8}</Icon>}
         >
              </Card>
        </Col>
      </Row>
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
      className="bio-card black valign-center"
      closeIcon={<Icon>close</Icon>}
      revealIcon={<Icon>more_vert</Icon>}
      textClassName="white-text"
    >
     <h5>
The purpose of this project is for users to make cocktail drinks at their convenience of their home. It will also give you stores near the users home to find their missing ingredients.</h5>
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
  
  export default Mixology;