import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../nav-bar/NavBar.css"
import { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AddBoxIcon from '@mui/icons-material/AddBox';



function NavBars() {
  const [searchValue, setSearchValue]=useState("");
  const [results, setResults] = useState(null);
  
  const navigate = useNavigate()
  const [name, setName] = useState(null);
  const userName = localStorage.getItem('name');


    const handleKeyUp=(event)=>{
    setSearchValue(event.target.value)
  }
  const handleSearch = async () => {
    if (searchValue.length > 0) {
      await axios
         navigate('search/'+searchValue)
    } else {
      setResults(null);
    }
};

useEffect(() => {
  // Obtener el nombre del usuario del almacenamiento local
  const storedName = localStorage.getItem('name')
  // Actualizar el estado con el nombre del usuario
  setName(storedName);
}, []);

const handleLogOut = () => {
    localStorage.clear();
    Swal.fire({title:'Closed',
    text: 'Se ha cerrado la sesión con exito',
    icon: 'success',
    position: 'center'}).then(res => {
      setTimeout(3000, navigate('/'))});
};
    return (
    <Navbar collapseOnSelect={true} className= "customnav" bg="light" expand="lg" fixed="top" data-bs-toggle="collapse">
      <Container fluid>
        <Navbar.Brand className="customLogo"><Link to={'/'}><img src="/logo.png" alt="logo" width="200px"></img></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" linksmap me-auto my-2 my-lg-0"
            style={{ maxHeight: '155px' }}
            navbarScroll
          >
            <Nav.Link eventKey="2"><Link to={'/create'}>
            Crear receta</Link></Nav.Link>
            
          
          {localStorage.getItem("token") ? (
                    <>
                      <Nav.Link eventKey="1">
                        Hola, {userName}
                      </Nav.Link>
                      <Nav.Link eventKey="3">
                      <Link onClick={handleLogOut} className="link_brand danger">
                        Logout
                    </Link>
                    </Nav.Link>
                      </>
                  ) : (
                    <>
                    <Nav.Link className="loginCustom" eventKey="5">
                      <Link to={'/login'}>Login</Link>
                    </Nav.Link>
                    <Nav.Link eventKey="6">
                      <Link to={'/register'}>Registrate</Link>
                    </Nav.Link>
                    </>
                    )
                  
                  }
          </Nav>
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