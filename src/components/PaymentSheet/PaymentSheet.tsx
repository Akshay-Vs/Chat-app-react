import { useState, useEffect } from "react";
import ConfettiExplosion from "react-confetti-explosion";

import PaymentSucessImage from "../../assets/images/paymentSuccess.png";
import "./PaymentSheet.scss";

interface PaymentSheetProps {
  theme: string;
  price: number;
  paymentStatus: (status: boolean) => void;
}

const PaymentSheet = ({ theme, paymentStatus }: PaymentSheetProps) => {
  const [isComplete, setIsComplete] = useState(false);
  const [isLoading, setIsLoading] = useState<undefined | boolean>(undefined);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <div
      className={`payment-sheet 
    ${theme == "dark" ? "payment-sheet--dark" : "payment-sheet--light"}
    `}
    >
      <div className="payment-sheet__container">
        {!isComplete ? (
          <>
            <div
              className={`payment-sheet__title ${
                theme == "dark"
                  ? "payment-sheet__title--dark"
                  : "payment-sheet__title--light"
              }`}
            >
              Enter Payment Details
            </div>
            <input
              className={` ${theme == "dark" ? "input--dark" : "input--light"}`}
              id="name"
              type="email"
              placeholder="Email"
              required
            />
            <input
              className={`${theme == "dark" ? "input--dark" : "input--light"}`}
              id="ccn"
              type="tel"
              autoComplete="cc-number"
              maxLength={19}
              placeholder="Card Number"
              required
            />

            <div className="payment-sheet__group">
              <input
                className={`input--small ${
                  theme == "dark" ? "input--dark" : "input--light"
                }`}
                id="exp"
                type="tel"
                autoComplete="cc-exp"
                maxLength={5}
                placeholder="MM/YY"
                required
              />
              <input
                className={`input--small ${
                  theme == "dark" ? "input--dark" : "input--light"
                }`}
                id="cvc"
                type="tel"
                autoComplete="cc-csc"
                maxLength={3}
                placeholder="CVC"
                required
              />
            </div>
            <div
              className={`payment-sheet__button ${
                theme == "dark"
                  ? "payment-sheet__button--dark"
                  : "payment-sheet__button--light"
              }`}
              onClick={() => {
                setIsComplete(true);
                setIsLoading(true);
              }}
            >
              Pay
            </div>
          </>
        ) : isLoading ? (
          <div className="payment-sheet__container">
            <div className={`payment-sheet__loading-bar`}></div>
          </div>
        ) : (
          <div className="payment-sheet__container">
            <div
              className={`payment-sheet__title ${
                theme == "dark"
                  ? "payment-sheet__title--dark"
                  : "payment-sheet__title--light"
              }`}
            >
              Payment Successful!
            </div>

            <img
              className="payment-sheet__image"
              src={PaymentSucessImage}
              alt="Payment successful"
            />

            <ConfettiExplosion zIndex={29} />

            <div
              className={`payment-sheet__button ${
                theme == "dark"
                  ? "payment-sheet__button--dark"
                  : "payment-sheet__button--light"
              }`}
              onClick={() => {
                paymentStatus(true);
                setIsComplete(false);
                setIsLoading(undefined);
              }}
            >
              Back to shop
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentSheet;
