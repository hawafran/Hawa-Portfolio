import React, {useState} from 'react';
import '../gallery.css'
import 'materialize-css';
import {Button, Card, Icon, CardTitle, Row, Col} from 'react-materialize';
import Img1 from '../images/mixology-home.jpg';
import Img2 from '../images/pet-home.jpg';
import Img3 from '../images/events-home.jpg';
import Page from './Lazy-Mixology';




function Work (){


    let data =[
        {
            id: 1,
            imgSrc: Img1,
            Button:"Lazy Mixology",
            Page:'./Lazy-Mixology.js'
        },
        {
            id: 2,
            imgSrc: Img2,
            Page:"Pet App",
        },
        {
            id: 3,
            imgSrc: Img3,
            Page:"Events R Us"
        },
        // {
        //     id: 4,
        //     imgSrc: Img4,
        // },
        // {
        //     id: 5,
        //     imgSrc: Img5,
        // },
        // {
        //     id: 6,
        //     imgSrc: Img6,
        // },
        // {
        //     id: 6,
        //     imgSrc: Img7,
        // },
    ]
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return(
        <>
        <div ClassName = {model? "model open" : "model"}>
            <img src={tempimgSrc} />
            {/* <CloseIcon /> */}
            {/* <i class="material-icons">close</i> */}
        </div>
        <div className="gallery">
            {data.map((item, index)=>{
                return(
                    <div className="pics" key={index} onClick={() => (item.imgSrc)}>
                        <img src={item.imgSrc} style={{width: '100%', height:'100%'}}/>
                        <Button
        href="/Lazy-Mixology" target="_blank"
        node="a"
        waves="light"
        className="bio-button grey darken-4 valign-center"
      >
        Learn More
      </Button>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Work