import { useEffect } from "react";
import ItemListContainer from "../component/ItemListContainer/ItemListContainer"
import NavBarComponent from "../component/NavBarComponent/NavBarComponent";
import { useGetProducts } from "../hooks/useProducts"


export const Home = () => {

    useEffect (()=>{
        document.title = "Pontoporia Tienda Online";
    })

    const { productsData } = useGetProducts(8);

    return (
    <NavBarComponent />,
    <ItemListContainer greetings="Hola" productsData={productsData} />
    )
}