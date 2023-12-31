import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

import { Link } from "react-router-dom";
import { useCategory } from '../../hooks/useCategory';


const NavBarComponent = () => {

  const { category } = useCategory();

    return (
    <Navbar bg="light" data-bs-theme="light" expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to='/'>Pontoporia</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#nosotros">Conocenos</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              {
                category.map((item, index) => {
                  return ( 
                    <NavDropdown.Item key={index}>
                    <Link to={`/category/${item}`}>{item}</Link>
                    </NavDropdown.Item>
                  )
                })
              }
              <NavDropdown.Divider />
              <NavDropdown.Item href="metodos-pago">
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