import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
const CartIndicator = () => {
  const cartLength = useSelector((state) => state.cart.content.length);
  // cartLength è inizialmente 0, ma rispecchierà in qualsiasi momento la lunghezza di state.cart.content
  const navigate = useNavigate();
  return (
    <div className="text-end ">
      <Button
        className="d-inline-flex align-items-center py-2 px-3 border-0 myindicator "
        onClick={() => navigate("/cart")}
      >
        <FaShoppingCart className="" />
        <span className="ms-2">{cartLength}</span>
      </Button>
    </div>
  );
};

export default CartIndicator;
