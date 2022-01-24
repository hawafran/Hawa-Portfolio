// import React from 'react';
// import 'materialize-css';
// import '../App.css';
// import {Button, Card, Icon, CardTitle, Row, Col} from 'react-materialize';
// import Home from '../images/mixology-home.jpg'
// import Demo from '../images/mixology-ingredients.jpg'

// function Mixology() {
//     return (
//             <Row classNmae="projects-page">
//           <Col
//             m={6}
//             s={12}
//             className="mixology-card"
//           >
//              <Card className="mixology-image black"
             
//             //  closeIcon={<Icon>close</Icon>}
//              header={<CardTitle image={Home}></CardTitle>}
//             //  revealIcon={<Icon>{Img8}</Icon>}
//            >
//                 </Card>
//           </Col>
//           <Row>
//         <Col
//           m={6}
//           s={12}
//           className="mixology-card"
//         >
//            <Card className="mixology-image black"
           
//           //  closeIcon={<Icon>close</Icon>}
//            header={<CardTitle image={Demo}></CardTitle>}
//           //  revealIcon={<Icon>{Img8}</Icon>}
//          >
//               </Card>
//         </Col>
//       </Row>
//       <Row>
//   <Col
//     m={6}
//     s={12}
//   >
//     <Card
//       // actions={[
//       //   <a key="1" href="#">This is a link</a>,
//       //   <a key="2" href="#">This is a link</a>
//       // ]}
//       className="bio-card black valign-center"
//       closeIcon={<Icon>close</Icon>}
//       revealIcon={<Icon>more_vert</Icon>}
//       textClassName="white-text"
//     >
//      <h5>
// The purpose of this project is for users to make cocktail drinks at their convenience of their home. It will also give you stores near the users home to find their missing ingredients.</h5>
//       <Button
//         href="mailto:hawa.francis@gmail.com" target="_blank"
//         node="a"
//         waves="light"
//         className="bio-button grey darken-4 valign-center"
//       >
//         Contact Me
//       </Button>
//     </Card>
//   </Col>
// </Row>
//         </Row>       
//           );
//   }
  
//   export default Mixology;

import React from 'react';
import '../gallery.css'
import 'materialize-css';
import {Button, Card, Icon, CardTitle, Row, Col} from 'react-materialize';
import Home from '../images/Lazy-Mixology/home.jpg';
import Recipes from '../images/Lazy-Mixology/recipes.jpg';
import Ingredients from '../images/Lazy-Mixology/ingredients.jpg';
import Search from '../images/Lazy-Mixology/map.jpg';





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
        <a key="1" href="https://github.com/jlamonade/cocktail-maker" target="blank">Github Repository</a>,
        <a key="2" href="https://jlamonade.github.io/cocktail-maker/ "target="blank">Deployed Link</a>
      ]}
      className="bio-card black"
      closeIcon={<Icon>close</Icon>}
      revealIcon={<Icon>more_vert</Icon>}
      textClassName="bio-card black white-text"
    >
     <h3>Concept:</h3>
     <h5>Lazy Mixology allows the user to enter ingredients into the app and in response will receive recipes for cocktails they can make with the  ingredients they have at home
 </h5>
 <h3>Directions for Future Development:</h3>
 <h5> We intend to allow users to exclude ingredients from the recipes they are recommended due to allergies or personal preferences, and intend for this to become a social app 

 
 </h5>

    </Card>,
  </Row>   
     
    );
  }
  
  export default About;