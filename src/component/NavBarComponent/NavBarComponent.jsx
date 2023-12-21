import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

const NavBarComponent = () => {

    return (
    <Navbar bg="light" data-bs-theme="light" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Libreria para Todos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home Page</Nav.Link>
            <Nav.Link href="#nosotros">Conocenos</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#producto/libros">Libros</NavDropdown.Item>
              <NavDropdown.Item href="#producto/cuadernos">Cuadernos </NavDropdown.Item>
              <NavDropdown.Item href="#producto/otros">Otros</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Metodos de Pago
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
    )
};

export default NavBarComponent; /*Lo exportamos para que sea visible para toda la aplicacion, por fuera de este archivo*/