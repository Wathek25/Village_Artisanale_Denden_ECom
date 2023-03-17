import React, { useState, useEffect } from "react";
import "./PaymentSuccessModal.scss";

const PaymentSuccessModal = () => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const handleClickOutsideModal = (event) => {
      const modalContainer = document.querySelector(".modal-container");

      if (modalContainer && !modalContainer.contains(event.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener("click", handleClickOutsideModal);

    return () => {
      document.removeEventListener("click", handleClickOutsideModal);
    };
  }, []);

  return (
    <>
      {showModal && (
        <div className="modal-container" onClick={() => setShowModal(false)}>
          <div className="modal-content">
            <img
              src="https://urbanutilities.co.za/wp-content/uploads/2019/08/Payment-success.png"
              alt="img_payment"
              width="700px"
              height="500px"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentSuccessModal;
