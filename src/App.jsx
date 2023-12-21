import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './component/NavBarComponent/NavBarComponent';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import CountComponent from './component/CountComponent/Countcomponent';
import MainLayout from './layouts/MainLayout';
import { getProducts } from './services';

  

const App = () => {
  const [productsData, setProductsData] = useState([]);
  
  useEffect(() => {
    getProducts()
      .then((response) => {
        setProductsData(response.data.products)
      })
      .catch((error)=>{
        console.log(error);
      });
  }, []);
  
  return (
    <MainLayout>
      <NavBarComponent />
      <ItemListContainer greetings="Hola" productsData={productsData} />
      <CountComponent />
    </MainLayout>
  );
};

export default App;
