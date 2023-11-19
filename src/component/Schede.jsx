import { Col, Container, Image, Row } from "react-bootstrap";
import gif1 from "../assets/fotopromo/pesce.gif";
import gif2 from "../assets/fotopromo/pin.gif";
import gif3 from "../assets/fotopromo/orologio.gif";
import cert1 from "../assets/fotopromo/c_ce.svg";
import cert2 from "../assets/fotopromo/c_cucina.svg";

const Schede = () => {
  return (
    <>
      <Row className=" ">
        <Col> </Col>
        <Col>
          <h4 className="title my-3"> Perché sceglierci?</h4>
        </Col>
        <Col> </Col>
      </Row>
      <Row className="text-center row col d-flex flex-xs-column flex-lg-row mt-3  ">
        {" "}
        <Col> </Col>
        <Col xs={12} lg={3} className="myborder text-center mx-3 ">
          <h4 className=" text-center fw-bold ">
            {" "}
            <span className="my-position-relative px-2">
              {" "}
              Freschezza certificata{" "}
            </span>
          </h4>
          <img src={gif1} alt="" className="mygif rounded-circle" />
          <p className=" pt-3">A Roma oltre 400.000 clienti soddisfatti</p>
        </Col>
        <Col xs={12} lg={3} className="myborder text-center mx-3">
          <h4 className=" text-center fw-bold">
            {" "}
            <span className="my-position-relative px-2"> Sushi Lab </span>
          </h4>
          <img src={gif2} alt="" className="mygif rounded-circle" />
          <p className=" pt-3">
            Oltre 200 analisi di laboratorio all’anno su prodotti e materie
            prime
          </p>
        </Col>
        <Col xs={12} lg={3} className=" myborder text-center mx-3 ">
          <h4 className=" text-center fw-bold">
            {" "}
            <span className="my-position-relative px-2"> Sushi on demand </span>
          </h4>
          <img src={gif3} alt="" className="mygif rounded-circle" />
          <p className=" pt-3 ">Il sushi che ami dove vuoi e quando vuoi</p>
        </Col>
        <Col> </Col>
      </Row>{" "}
      <Row className="my-4 text-center bg-light myTextBlack my-4 py-3">
        <Col></Col>{" "}
        <Col xs={12} lg={3} className="mx-3">
          <h5 className="fw-bold">Servizio Clienti</h5>
          <p> info@mysite.com</p>
        </Col>
        <Col xs={12} lg={3} className="mx-3">
          <h5 className="fw-bold">Certificazioni</h5>
          <div className="d-flex align-content-center justify-content-center">
            <img src={cert1} alt="" className="cert" />
            <img src={cert2} alt="" className="cert" />
          </div>
        </Col>
        <Col xs={12} lg={3} className="mx-3">
          <h5 className="fw-bold">PAGAMENTI </h5>
          <p>Pagamenti in contanti o con carta di credito</p>
        </Col>
        <Col></Col>{" "}
      </Row>{" "}
    </>
  );
};

export default Schede;
