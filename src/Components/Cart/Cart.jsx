import CartItems from "./CartItems";

const Cart = ({ cart, setCart }) => {
  console.log(cart);
  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price || 0),
    0,
  );

  const handleProceedToCheckout = () =>{
    setCart([]);
  }

  return (
    <div className="border rounded-lg p-5">
      <h2 className="font-bold text-2xl mb-8">Your Cart</h2>
      {cart.map((cartItem) => (
        <CartItems
          cart={cart}
          setCart={setCart}
          key={cartItem.id}
          cartItem={cartItem}
        ></CartItems>
      ))}
      <div className="flex justify-between px-3 py-5 mb-5 rounded-lg bg-slate-100 font-bold text-xl">
        <h1>Total:</h1>
        <p>${totalPrice}</p>
      </div>
      <button
        onClick={handleProceedToCheckout}
        className="btn w-full bg-linear-to-r from-[#5f2df5] to-[#a10df5] shadow-[0_10px_25px_rgba(106,44,240,0.35) text-white rounded-full"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
