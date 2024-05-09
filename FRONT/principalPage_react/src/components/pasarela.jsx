import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalPayment = () => {
  const paypalOptions = {
    "client-id": "Af24EXG3-Uz3r-IHeinR2VWo52YPKqBqPWJNb6HnjO2IY4uY_o1ShSPZG_x5auggqxg8AYcHSiE8S3AT",
    currency: "USD",
  };

  const handleApprove = (data, actions) => {
    // Aquí puedes realizar acciones adicionales después de que el usuario apruebe el pago
    console.log("Pago aprobado:", data);
    return actions.order.capture();
  };

  const handleError = (err) => {
    // Manejar errores de pago
    console.error("Error de PayPal:", err);
  };

  const handleCancel = (data) => {
    // Manejar cancelaciones de pago
    console.log("Pago cancelado:", data);
  };

  return (
    <PayPalScriptProvider options={paypalOptions}>
      <PayPalButtons
        style={{ layout: "horizontal" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "10.00", // El monto del pago
                },
              },
            ],
          });
        }}
        onApprove={handleApprove}
        onError={handleError}
        onCancel={handleCancel}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalPayment;
