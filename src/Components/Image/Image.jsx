import { Link } from "react-router-dom"
import "./Image.css"


// eslint-disable-next-line react/prop-types
function Image({image,id}) {
   
  return (
    <>
    <Link to={`http://localhost:5173/image/${id}`}>
    
    <img src={image} alt="Image" className="image"/>
    </Link>
    
    

    </>
  )
}

export default Image