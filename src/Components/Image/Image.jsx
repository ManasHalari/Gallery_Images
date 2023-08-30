import { Link } from "react-router-dom"
import "./Image.css"


// eslint-disable-next-line react/prop-types
function Image({image,id}) {
   
  return (
    <>
    <Link to={`https://api.slingacademy.com/v1/sample-data/photos/${id}`}>
    
    <img src={image} alt="Image" className="image"/>
    </Link>
    
    

    </>
  )
}

export default Image