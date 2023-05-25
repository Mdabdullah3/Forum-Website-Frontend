import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";

const CheckoutForm = ({ custom, serviceId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const amount = 350;

  useEffect(() => {
    if (amount) {
      fetch("https://forum-server-zoem.onrender.com/create-payment-intent", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ amount }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.clientSecret) {
            setClientSecret(data.clientSecret);
          }
        });
    }
  }, [amount]);

  // if (setProcessing === false) {
  //   return <Loading></Loading>
  // }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");

    // confrim card payment
    setProcessing(true);
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
      setSuccess("");
      setProcessing(false);
    } else {
      setCardError("");
      setTransactionId(paymentIntent.id);

      setSuccess(`Congrats! Your Payment is completed`);
      setProcessing(false);
      event.target.reset();
      const req = {
        studentId: custom.studentId,
        email: custom.email,
        serviceName: serviceId.serviceName,
        name: custom.name,
        phone: custom.phone,
        payment: paymentIntent.id,
      };
      fetch(`https://forum-server-zoem.onrender.com/custom`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(req),
      }).then((res) => res.json());
      toast("Succesfully Joined");
    }
  };

  return (
    <>
      <form
        className="p-0 "
        style={{ display: "inline" }}
        onSubmit={handleSubmit}
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "18px",
                color: "black",
                "::placeholder": {
                  color: "black",
                },
              },
              invalid: {
                color: "blue",
              },
            },
          }}
        />

        <div className="mt-10 mb-5">
          <button
            className="pay-btn bg-rose-600 text-white font-bold p-1 px-5 rounded"
            type="submit"
            disabled={!stripe}
          >
            Pay
          </button>
        </div>
      </form>

      {processing && <div className="mx-auto">Loading</div>}
      {cardError && <p style={{ color: "blue" }}>{cardError}</p>}
      {success && (
        <div style={{ color: "green" }}>
          <p> {success}</p>
          <p>
            Your TransactionId:{" "}
            <span className="text-blue-500 font-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
