
import {  useNavigate } from "react-router-dom"
import "./Image.css"


// eslint-disable-next-line react/prop-types
function Image({image,id}) {
  const navigate=useNavigate()
  function redirectToPage() {
    navigate(`/image/${id}`)
  }
  return (
    <>

    <img src={image} alt="Image" className="image" onClick={redirectToPage}/>
   
    
    

    </>
  )
}

export default Image