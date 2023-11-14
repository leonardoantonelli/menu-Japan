import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartIndicator from "./Cartindicator";
import { BrowserRouter } from "react-router-dom";
import logo from "../assets/fotopromo/Asset 12.png";
function ColorSchemesExample() {
  return (
    <>
      <BrowserRouter>
        <Navbar data-bs-theme="dark" className=" fixed-top myBlackBg">
          <Container>
            <img src={logo} alt="" className="imglogo" />
            <Navbar.Brand href="/menu-Japan" className="mx-3">
              Daruma
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/menu-Japan">Home</Nav.Link>

              <Nav.Link href="/store">Shop</Nav.Link>

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
