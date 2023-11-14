import { Col, Row, Button, ListGroup, Image, Container } from "react-bootstrap";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Mycartpage = () => {
  const cart = useSelector((state) => state.cart.content);
  const dispatch = useDispatch();
  // cart sarà l'array contenuto in state.cart.content

  return (
    <Container>
      <Row lg={12} className="width100">
        <Col sm={12} className="mb-5">
          <Col sm={12} className="font-weight-bold mb-5 ms-3">
            {cart.length > 0 ? (
              cart.map((piatto, i) => (
                <Row
                  key={i}
                  className=" d-flex justify-content-center align-content-center my-3 py-3"
                >
                  <Col>
                    {" "}
                    <img
                      className="imgcart"
                      src={piatto.img}
                      alt="shoe selected"
                    />{" "}
                  </Col>
                  <Col className=" d-flex flex-column justify-content-center align-content-center">
                    {" "}
                    <h5 className=" myTextWhite"> {piatto.nome}</h5>
                    <p className=" myTextWhite">{piatto.prezzo} $</p>
                  </Col>
                  <Col
                    s={1}
                    className="d-flex flex-column  justify-content-center "
                  >
                    {" "}
                    <Button
                      variant="danger"
                      className="d-flex flex-column widbutt  justify-content-center align-items-center"
                      onClick={() => {
                        dispatch({ type: "REMOVE_FROM_CART", payload: i });
                      }}
                    >
                      <FaTrash />
                    </Button>
                  </Col>
                </Row>
              ))
            ) : (
              <Row>
                <ListGroup.Item className="lead  ">
                  <h4 className="myTextWhite"> IL TUO CARRELLO È VUOTO</h4>
                  <h5 className="myTextWhite">
                    {" "}
                    Quando aggiungerai il primo prodotto al carrello, apparirà
                    qui. Inizia ad esplorare!
                  </h5>
                  <Button>Inizia</Button>
                </ListGroup.Item>
              </Row>
            )}
          </Col>
        </Col>
      </Row>{" "}
      <hr></hr>
    </Container>
  );
};

export default Mycartpage;
