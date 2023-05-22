import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../nav-bar/navBar.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBars() {
  const [searchValue, setSearchValue]=useState(null)
  const handleSearch=()=>{
    console.log("search clicked", searchValue)
  }

  const handleKeyUp=(event)=>{
    setSearchValue(event.target.value)
  }
  
    return (
    <Navbar className= "customnav" bg="light" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand className="customLogo"><Link to={'/'}><img src="/logo.png" alt="logo"></img></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" linksmap me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link><Link to={'/'}>Inicio</Link></Nav.Link>
            
            <Nav.Link><Link to={'/register'}>Registrate</Link></Nav.Link>
            
          </Nav>
          <Nav.Link className="loginCustom"><Link to={'/login'}>Login</Link></Nav.Link>
          <Form className="d-flex">
            <Form.Control
              onKeyUp={handleKeyUp}
              type="search"
              placeholder="Escribe la receta..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" type="button" onClick={handleSearch}>Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBars;