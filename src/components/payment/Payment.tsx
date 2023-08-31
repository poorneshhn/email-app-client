import { useAppDispatch } from "@/component/custom-hooks/typedReactReduxHooks";
import { handleToken } from "@/component/redux/slices/paymentSlice";
import StripeCheckout, { Token } from "react-stripe-checkout";

const Payment = () => {
  const dispatch = useAppDispatch();
  const handleCallBack = (token: Token) => {
    dispatch(handleToken(token));
  };
  return (
    // @ts-ignore
    <StripeCheckout
      name="Email App"
      description="Paying 5$ for Email service"
      stripeKey={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""}
      token={handleCallBack}
      amount={500}
      //   billingAddress={true}
    >
      <button className="btn">Add Credits</button>
    </StripeCheckout>
  );
};

export default Payment;
