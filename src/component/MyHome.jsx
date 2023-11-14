import img from "../assets/fotopromo/masterclass_daruma.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import pic1 from "../assets/fotopromo/8cc45833c34a4bc99d85375ecfde18f6.jpg";
import { Link, useLocation } from "react-router-dom";
function MyHome() {
  return (
    <>
      <Container>
        <Row className=" position-absolute top-50 start-50 translate-middle text-center">
          <Col
            xs={12}
            lg={6}
            className="d-flex
          flex-column justify-content-center align-items-center"
          >
            <h2 className="myTextRed fw-bolder"> Ordina</h2>
            <p>
              {" "}
              Sfoglia il menù per scoprire tutti i prodotti disponibili e scegli
              quelli che preferisci. Assapora il sushi della migliore qualità
              direttamente a casa o pronto da ritirare in uno dei nostri
              ristoranti e take away a Roma.
            </p>
            <Link to="/store">
              <Button className="mybutton mb-5 mb-lg-1">ORDINA ORA</Button>{" "}
            </Link>
          </Col>

          <Col xs={12} lg={6}>
            <img src={pic1} alt="" className="w-100" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyHome;
