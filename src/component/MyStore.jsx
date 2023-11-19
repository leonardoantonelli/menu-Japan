import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Mycarrello from "./Mycarrello";
import Mylist from "./Mylist";
import Mycard from "./Mycard";
import url from "../assets/json.json";
const Shop = () => {
  const [piatto, setPiatto] = useState([]);
  // const [bookSelected, setBookSelected] = useState(null);
  useEffect(() => {
    getPiatto();
  }, []);

  const getPiatto = async () => {
    try {
      let resp = await fetch(url);
      if (resp.ok) {
        let fetchPiatto = await resp.json();
        setPiatto(fetchPiatto);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <h1 className="d-flex justify-content-center align-content-center myTextRed mt-5">
          {" "}
          Seleziona il piatto
        </h1>
        <Row className="center-row">
          <Col className="center-row d-flex">
            <Mylist
              // shoeSelected={shoeSelected}
              // changeBook={changeBook}
              // shoes={shoes}
              piatto={piatto}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Shop;
