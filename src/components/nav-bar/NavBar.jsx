import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../nav-bar/navBar.css"
import { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function NavBars() {
  const [searchValue, setSearchValue]=useState("");
  const [results, setResults] = useState(null);
  
  const navigate = useNavigate()
  
    const handleKeyUp=(event)=>{
    setSearchValue(event.target.value)
  }
  const handleSearch = async () => {
    if (busqueda.length > 0) {
      await axios
          .get("http://localhost:8000/api/search/" + busqueda)
          .then((response) => {
            setResults(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
    } else {
      setResults(null);
    }
};
const handleLogOut = () => {
    localStorage.clear();
    Swal.fire({title:'Closed',
    text: 'Se ha cerrado la sesión con exito',
    icon: 'success',
    position: 'center'}).then(res => {
      setTimeout(3000, navigate('/'))});
};
    return (
    <Navbar className= "customnav" bg="light" expand="lg" fixed="top" data-bs-toggle="collapse">
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
            
            
          </Nav>
          {localStorage.getItem("token") ? (
                    
                    <Nav.Link><Link onClick={handleLogOut} className="link_brand danger">
                        Logout
                    </Link></Nav.Link>
                  ) : <Nav.Link className="loginCustom"><Link to={'/login'}>Login</Link>
                  
                  
                  <Link to={'/register'}>Registrate</Link>
                  
                  </Nav.Link>
                  
                  }
          
          
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