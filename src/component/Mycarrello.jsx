import { Col, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Mycarrello = () => {
  const dispatch = useDispatch();
  const piattoSelected = useSelector((state) => state.piattoSelected.content);
  // useDispatch ci ritorna la funzione che avvierà, quando chiamata (con l'action), avvierà il processo di modifica dello Store

  return (
    <Row className="mt-3 mb-4 mb-lg-0 myBgShop d-flex myBgShop mysticky">
      {piattoSelected ? (
        <>
          <div>
            <img src={piattoSelected.img} alt="" className="w-50" />
            <div>
              <h3 className=" d-flex justify-content-center myboldTitle fs-1 mt-3 ">
                {piattoSelected.nome}
              </h3>
            </div>
          </div>
          <Button
            className=""
            onClick={() => {
              dispatch({ type: "ADD_TO_CART", payload: piattoSelected });
            }}
          >
            {" "}
            agggiungi{" "}
          </Button>
        </>
      ) : (
        <Row className="mysticky">
          <h2> Carrello </h2>
          <h4>Carrello Vuoto</h4>
          <p>Ordine minimo per la consegna 20€ </p>
        </Row>
      )}
    </Row>
  );
};

export default Mycarrello;
