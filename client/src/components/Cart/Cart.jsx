import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";
import "./Cart.scss";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51MlbshLcraOUwYCTf7DoM3dkJotXnrXs6X3ZvmrmsChCmmGIanAZ6kjIQzQ5QPy2uKTSJIG7wuVnGwmILE10kzJf00jeqWylwX"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cart">
      <h1>Vos produits</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img
            src={process.env.REACT_APP_UPLOAD_URL + item.img}
            alt="imgInCart"
          />
          <div className="details">
            <h1>{item.title.substring(0, 30)}</h1>
            <p>{item.desc?.substring(0, 0)}</p>
            <div className="price">
              {item.quantity} x {item.price} DT
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>TOTAL</span>
        <span>{totalPrice()} DT</span>
      </div>
      <button onClick={handlePayment}>COMMANDER</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Réinitialiser
      </span>
    </div>
  );
};

export default Cart;
