import img from "../assets/fotopromo/masterclass_daruma.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import emoji1 from "../assets/fotopromo/chopsticks_1f962.png";
import emoji2 from "../assets/fotopromo/sushi-2265.png";
import { Link, useLocation } from "react-router-dom";
import Bannerpagamento from "./banners/Bannerpagamento";
import Location from "./Location";
import Schede from "./Schede";
function MyHome() {
  return (
    <>
      <Row className="  text-center mybg1  ">
        <Col lg={4} xs={2}>
          {" "}
        </Col>
        <Col
          className="text-center d-flex flex-column
       justify-content-center position-relative"
        >
          <h2 className="title">
            {" "}
            Ordina <span> </span>
            <img src={emoji2} alt="" className=" emoji1" />
          </h2>{" "}
          <p>
            Sfoglia il menù per scoprire tutti i prodotti disponibili e scegli
            quelli che preferisci. Assapora il sushi della migliore qualità
            direttamente a casa o pronto da ritirare in uno dei nostri
            ristoranti e take away a Roma.
          </p>{" "}
          <Link to="/store">
            <Button className="mybutton mb-5 mb-lg-1">ORDINA ORA</Button>{" "}
          </Link>
        </Col>
        <Col lg={4} xs={2}>
          {" "}
        </Col>
      </Row>

      <Location />
      <Bannerpagamento></Bannerpagamento>
      <Schede />
    </>
  );
}

export default MyHome;
