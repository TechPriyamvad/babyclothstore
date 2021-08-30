import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price, currentUser }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JTTi2SIVdTvGFwiznQOMDAcVCrFwEINinC1fAjON0EgvXTVV9fpJjQnrI5QQjQMN7vNyRAJWKfgfJd7ZgMf2nxY00t7znwpD1";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful!");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
