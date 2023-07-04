import React from 'react'
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image } from 'react-bootstrap';




function Home() {
  return (
    <div className='mainnavdiv' >
    <Navbar>
      <Container className='navbarcontainer' >
       <img src="https://i.postimg.cc/Nfk452v3/ninologo.jpg" alt="" className='logo' />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link className='me-4 a1' href="#link">Section 1</Nav.Link>
            <Nav.Link className='me-4 a1' href="#link">Section 2</Nav.Link>
            <Nav.Link className='me-4 a1' href="#link">Section 3</Nav.Link>
            <Nav.Link style={{backgroundColor:"red"}} className='me-4 a1' href="#link">shop</Nav.Link>
            <Nav.Link className='' href="#link">Blog</Nav.Link>
            {/* <Nav.Link href="#link">Sign Up</Nav.Link> */}
            <img className='p-1' src="https://i.postimg.cc/MTfxd8YS/Sign-Up.jpg" alt="" />
            <Nav.Link className='me-4 ' style={{backgroundColor:"blue",color:"white"}}  href="#link">Log In</Nav.Link>
            <img className='me-2' src="https://i.postimg.cc/sxhZ78L6/Group-637.jpg" alt="" />
            <img src="https://i.postimg.cc/XvBx7VKm/Group-638.jpg" alt="" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Home