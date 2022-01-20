import React from "react";
import 'materialize-css';
// import { Footer, NavItem, Icon, } from 'react-materialize';
import Resume from '../images/Hawa Resume January 2022.pdf';
import '../App.css'

const footer = () => {
  

  return (
<div class="footer-fixed">
<footer
  
//   links={<ul><li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li></ul>}
//   moreLinks={<a className="grey-text text-lighten-4 right" href="#!">More Links</a>}
>
  <h5 className="white-text">
    My Resume
  </h5> 
  <a href={Resume} download="Hawa-Resume.pdf" target="blank" class="white-text"> Download </a>
 
  {/* <p className="grey-text text-lighten-4">
    You can use rows and columns here to organize your footer content.
  </p> */}
</footer>
    </div>
  );
}

export default footer;