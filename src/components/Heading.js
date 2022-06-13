import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import firebase from '../firebase'

const Heading = () => {
  const user = useSelector((state) => state.user);
  let navigate = useNavigate();

  const logOutHandler = () => {
    firebase.auth().signOut();
    navigate("/")
  }
  return ( 
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">Community</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Link to="/" style={{ color:"white", textDecoration:"none", marginRight:"10px"}}>home</Link>
              <Link to="/upload" style={{ color:"white", textDecoration:"none", marginRight:"10px"}}>upload</Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          {user.accessToken === "" ? (
            <Link 
              to="/login" 
              style={{ 
                color: "white", 
                textDecoration: "none"
              }}
            >
              login
            </Link>
            
          ) : (
            <>
              <Navbar.Text
              onClick={logOutHandler}
              style={{
                color: "white",
                cursor: "pointer",
                marginRight: "20px"
              }}
            >
              Logout
              </Navbar.Text>
              <Navbar.Text>
                <Link to = "/Mypage"
                  style={{
                    color: "white",
                    cursor: "pointer",
                    textDecoration: "none"
                }}>
                  My page
                </Link>
              </Navbar.Text>
            </>
          )} 
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Heading


