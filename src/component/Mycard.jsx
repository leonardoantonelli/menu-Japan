import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
const Mycard = ({ piatto }) => {
  const piattoSelected = useSelector((state) => state.piattoSelected.content);
  const navigate = useNavigate();
  const goDetails = () => {
    navigate("/cart");
  };
  const dispatch = useDispatch();
  //funzione per avere il dispacth
  const handleCart = () => {
    dispatch({ type: "SELECT_PIATTO", payload: piatto });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Card className="w-100 myheight myshadow">
      <Card.Img variant="top" src={piatto.img} className="w-100" />
      <Card.Body>
        <Card.Title>{piatto.nome}</Card.Title>

        <p className="mt-1">
          {" "}
          {piatto.prezzo} $ <strong className="myRedBg ">// </strong>{" "}
          {piatto.quantità} pz.
        </p>

        <Button
          className="shadow mybuttoncard position-absolute top-90 start-50 translate-middle "
          onClick={handleShow}
        >
          Aggiungi
        </Button>

        <Modal show={show} onHide={handleClose} className="mymodal">
          <Row>
            {" "}
            <Col className="">
              <img src={piatto.img} alt="" className="w-100" />{" "}
            </Col>{" "}
            <Col>
              <Modal.Header closeButton>
                <Modal.Title className="myTextRed fw-bolder">
                  {piatto.nome}{" "}
                </Modal.Title>
              </Modal.Header>
              <h5 className="myTextBlack mb-5">{piatto.ingredienti}</h5>
              <hr />{" "}
              <p className="myTextGrey ">
                Alcuni ingredienti che compongono i nostri menu possono variare
                in base alle disponibilità del prodotto fresco. Il sushi va
                consumato a temperatura ambiente.
              </p>
            </Col>
          </Row>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              className=""
              onClick={() => {
                dispatch({ type: "ADD_TO_CART", payload: piattoSelected });
              }}
            >
              {" "}
              Aggiungi{" "}
            </Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
  );
};

export default Mycard;
