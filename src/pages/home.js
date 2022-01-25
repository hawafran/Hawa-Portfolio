import React from "react";
import 'materialize-css';
import {Button} from 'react-materialize';
import '../Home.css'
import Background from '../images/portfolio-homepage.jpg';
import Hello from '../images/hello.png';


function Home() {
  return (  
    <div className = "welcome-text">
    <div className = "welcome-image">
      <img src = {Background}style={{width: '100%', height:'100%'}} alt = "welcome-page" />
    </div>
      <div class='text-on-image'>
      <img src = {Hello}style={{width: '100%', height:'100%'}} alt = "greeting" />   
         <h5 classNme='greeting-text'> I'm Hawa, a web developer </h5>
         <Button
  href="/work" target="_blank"
  node="a"
  waves="light"
  className="bio-button grey darken-4 valign-center"
>
  View my Work
</Button>
      </div>
  </div>
    
//     <Row>
//   {/* <Col
//     m={4}
//     s={8}
//     className="about-card"
//   >
//      <Card className="about-image"
     
//     //  closeIcon={<Icon>close</Icon>}
//      header={<CardTitle image={Img}></CardTitle>}
//     //  revealIcon={<Icon>{Img}</Icon>}
//    >
//         </Card>
//   </Col>, */}

//   {/* <Row> */}
  
//   <Col
//     m={6}
//     s={12}
//   >
//     <Card
//       // actions={[
//       //   <a key="1" href="#">This is a link</a>,
//       //   <a key="2" href="#">This is a link</a>
//       // ]}
//       className="bio-card black center-align"
//       closeIcon={<Icon>close</Icon>}
//       revealIcon={<Icon>more_vert</Icon>}
//       textClassName="white-text"
//       // title="I am Xavier Banks"
//     >
//       <h1>Hello...</h1>
//      <h5>My name is Hawa and I am a full stack web developer located in New York, NY</h5>
//      <Button
//         href="mailto:hawa.francis@gmail.com" target="_blank"
//         node="a"
//         waves="light"
//         className="bio-button grey darken-4 valign-center"
//       >
//         Contact Me
//       </Button>
//     </Card>
//   </Col>
// {/* </Row> */}
// </Row>    
  );
}


export default Home;