import 'bootstrap/dist/css/bootstrap.min.css';
// import CountComponent from './component/CountComponent/Countcomponent';
// import UserData from './component/UserData';
import MainLayout from './layouts/MainLayout';
import { MainRouter } from './router/MainRouter';


const App = () => {
  
  return (
    <MainLayout>
      <MainRouter />

      {/* <CountComponent /> */}
      {/* <UserData firstName={"Nico"} lastName={"Perez"} age={21} birthdate={"28/10/2002"} myObject={
        {
        product: "Nuevo Producto",
        quantity:"10"
        }
      }
      /> */}
    </MainLayout>
  );
};

export default App;   


