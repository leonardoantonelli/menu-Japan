import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartIndicator from "./Cartindicator";
import { BrowserRouter } from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
      <BrowserRouter>
        <Navbar data-bs-theme="dark" className=" fixed-top myBlackBg">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>

              <Nav.Link href="#pricing">Shop</Nav.Link>

              <CartIndicator />
            </Nav>
          </Container>
        </Navbar>
      </BrowserRouter>{" "}
      <br />
    </>
  );
}

export default ColorSchemesExample;
