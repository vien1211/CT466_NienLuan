import React from "react";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import SearchBar from "../SearchBar/SearchBar";
import Badge from "react-bootstrap/Badge";
import TypeDropdown from "../TypeProduct/TypeDropdown";
import BrandDropdown from "../BrandProduct/BrandDropdown";

import { StyleBrand, NaviStyle, SearchStyle, TitleCanvas } from "./style";

const NavComponent = () => {
  const types = [{ name: "Loại 1" }, { name: "Loại 2" }];
  const brands = [{ name: "Tên 1" }, { name: "Tên 2" }];
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container>
            <StyleBrand href="#">VIEN'S ACCESSORIES</StyleBrand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <TitleCanvas id={`offcanvasNavbarLabel-expand-${expand}`}>
                  VIEN'S ACCESSORIES
                </TitleCanvas>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <SearchStyle>
                  <SearchBar
                    size="lg"
                    placeholder="Search"
                    ariaLabel="Search"
                    type="search"
                    variant="outline-success"
                    textButton="Search"
                  />
                </SearchStyle>

                <NaviStyle className="justify-content-end flex-grow-1 pe-3">
          

                  <Nav.Link href="#action1" className="position-relative">
                    <span className="material-symbols-outlined">
                      shopping_bag
                    </span>
                    <Badge
                      bg="danger"
                      className="
                        position-absolute 
                        top-25
                        end-0
                        translate-middle
                        translate-middle-y
                        p-1
                        text-center
                        "
                        style={{ 
                          fontSize: '10px',
                          borderRadius: '50%', 
                          height: '1.8em', 
                          width: '2em'
                        }}
                    >
                      9
                    </Badge>
                  </Nav.Link>

                  <BrandDropdown brands={brands} />

                  <TypeDropdown types={types} />
                  <NavDropdown
                    title="Welcome"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action5">Sign Up</NavDropdown.Item>
                    <NavDropdown.Item href="#action6">Sign In</NavDropdown.Item>
                  </NavDropdown>
                </NaviStyle>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavComponent;
