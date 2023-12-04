
//Estilos
//import './App.css';
//importacion de estilos de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './component/NavBarComponent/NavBarComponent';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
// import CountComponent from './component/CountComponent/Countcomponent';
//CountComponent se encuentra comentado ya que no forma parte de la primera entrega
const App = () => {
  return (
    <div style={{width: '100vw', height: '100vh', backgroundColor: "lightblue"}}>
      <NavBarComponent />
      <ItemListContainer greeting="Hola a todos" />
      <ItemListContainer greeting="Gracias por visitarnos" />
      {/* <CountComponent /> */}
    </div>
  );
};

export default App;
