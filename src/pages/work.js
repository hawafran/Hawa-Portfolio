import React, {useState} from 'react';
import '../gallery.css'
import 'materialize-css';
// import CloseIcon from '@mui/icons-material/Close';
import Img1 from '../images/mixology-home.jpg';
import Img2 from '../images/pet-home.jpg';
import Img3 from '../images/events-home.jpg';
// import Img4 from '../images/img4.jpg';
// import Img5 from '../images/img5.jpg';
// import Img6 from '../images/img6.jpg';
// import Img7 from '../images/img7.jpg';
// import Img7 from '../images/img7.jpg';



function Work (){


    let data =[
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
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
                    <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                        <img src={item.imgSrc} style={{width: '100%', height:'100%'}}/>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Work