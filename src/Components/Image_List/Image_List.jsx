import axios from "axios"
import { useEffect, useState } from "react";
import Image from '../Image/Image.jsx'
import "./Image_List.css"

function Image_List() {
        let [imageList,setImageList]=useState([])
        let [isLoading,setIsLoading]=useState(true)
    async function downloadImages() {
      let response=await axios.get("https://api.slingacademy.com/v1/sample-data/photos?limit=20")

      console.log(response);
      
      let photos=response.data.photos
      console.log(photos);

    setImageList(photos)
      setIsLoading(false)
      
    }
   


useEffect(()=>downloadImages,[])
  return(
 <div className="image-list-wrapper">
    {(isLoading)?"Loading...":imageList.map((p,i)=><Image key={i} id={i} image={p.url}/>)}
  
 </div>
)
  }
export default Image_List