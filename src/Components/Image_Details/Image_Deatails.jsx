import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "./Image_Details.css"
function Image_Deatails(){
    const [image,setImage]=useState([])
    const {id}=useParams()
    async function downloadImage() {
        let response=await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
        console.log(response);
        
        let photos=response.data.photo
        console.log(photos);
        setImage(photos)
               }
    useEffect(()=>{
      downloadImage()
    },)
  return (
    <div className="image-details-wrapper">
        
        <img src={image.url} alt="Image" className="image-details-image"/>
        <h3 className="image-details-header">{image.title}</h3>
        <p className="image-details-p">Description:{image.description}</p>
    </div>
  )
}

export default Image_Deatails