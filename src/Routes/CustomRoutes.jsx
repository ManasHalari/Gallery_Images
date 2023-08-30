import {Routes,Route} from "react-router-dom"
import Image_List from "../Components/Image_List/Image_List"
import Image_Deatails from "../Components/Image_Details/Image_Deatails"

function CustomRoutes() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Image_List/>} />
    <Route path="image/:id" element={<Image_Deatails/>}/>

    </Routes>
    </>
  )
}

export default CustomRoutes