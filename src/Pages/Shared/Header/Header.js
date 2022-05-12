import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-2">
          Home Improvement

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-0 mx-auto ">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
{/*               
              {user ? (
                <Nav.Link as={Link} to="/myitem">
                  myItem
                </Nav.Link>
              ) : (
                <Nav.Link></Nav.Link>
              )}

              {user ? (
                <Nav.Link as={Link} to="/manage-inventory">
                  Manage inventory
                </Nav.Link>
              ) : (
                <Nav.Link></Nav.Link>
              )}
              {user ? (
                <Nav.Link as={Link} to="/addproduct">
                  Add Product
                </Nav.Link>
              ) : (
                <Nav.Link></Nav.Link>
              )}

              {/* {user ? (
                  <Nav.Link as={Link} to="/myitem">My Item</Nav.Link>
                ) : (
                  <Nav.Link></Nav.Link>
                )} */}

              {/* {user ? ( */} */}

                <button
                //   onClick={handleSignOut}
                  className="btn btn-outline-warning"
                >
                  Sign out
                </button>

              {/* ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )} */}
            // </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
};

export default Header;