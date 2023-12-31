import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home.jsx"
import NavBarComponent from "../component/NavBarComponent/NavBarComponent.jsx"
import ItemDetailContainer from "../pages/ItemDetailContainer.jsx"
import { Category } from "../pages/Category.jsx"


export const MainRouter = () => {
    return (
        <BrowserRouter>
            <NavBarComponent/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/item/:productId' element={<ItemDetailContainer />} />
                <Route path='/category/:id' element={<Category />} />
            </Routes>
        </BrowserRouter>
    )
}   

//1:33:00