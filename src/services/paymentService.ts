export const createRazorpayOrder = async () => {
  throw new Error('Razorpay checkout is not configured yet. Provide a secure server-side Razorpay setup and test keys.');
};

export const verifyPayment = async () => {
  throw new Error('Payment verification is not configured yet. Use Firebase Functions with Razorpay signature validation.');
};
