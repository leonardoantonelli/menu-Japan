import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Mycarrello from "./Mycarrello";
import Mylist from "./Mylist";
import Mycard from "./Mycard";
import url from "../assets/json.json";
const Shop = () => {
  /* state = {
    cards: [
      {
        id: 0,
        nome: "California",
        prezzo: 11.5,
        // img: img1,
        ingredienti: "igrediants sushi",
      },
      {
        id: 1,
        nome: "Gunkan",
        prezzo: 12.5,
        //  img: img2,
        ingredienti: "igrediants sushi",
      },
      {
        id: 2,
        nome: "Tempura",
        prezzo: 8.5,
        //  img: img3,
        ingredienti: "igrediants sushi",
      },
      {
        id: 3,
        nome: "Deruma",
        prezzo: 7.5,
        // img: img4,
        ingredienti: "igrediants sushi",
      },
      {
        id: 4,
        nome: "Spicy",
        prezzo: 10.5,
        // img: img5,
        ingredienti: "igrediants sushi",
      },
      {
        id: 5,
        nome: "Salmon sushi",
        prezzo: 11.5,
        // img: img6,
        ingredienti: "igrediants sushi",
      },
    ],
  }; */

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
