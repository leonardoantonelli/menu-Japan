import { Col, Container, Image, Row } from "react-bootstrap";
import img1 from "../../assets/fotopromo/pagamenti_alla_consegna.gif";
import img2 from "../../assets/fotopromo/pagamenti_sicuri.gif";
import img3 from "../../assets/fotopromo/scegli_orario.gif";
const Bannerpagamento = () => {
  return (
    <>
      {" "}
      <Row className="text-center myBgPink">
        <Col xs={12} lg={4}>
          <img src={img1} alt="" className="mygif rounded" />
          <p> Pagamenti sicuri con carta di credito</p>
        </Col>
        <Col xs={12} lg={4}>
          <img src={img2} alt="" className="mygif" />
          <p> Pagamenti in contanti alla consegna o ritiro</p>
        </Col>
        <Col xs={12} lg={4}>
          <img src={img3} alt="" className="mygif" />
          <p> Scegli tu l’orario di consegna o ritiro</p>
        </Col>
      </Row>{" "}
    </>
  );
};

export default Bannerpagamento;
