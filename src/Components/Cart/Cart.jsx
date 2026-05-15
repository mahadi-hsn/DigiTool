import CartItems from "./CartItems";

const Cart = ({ cart, setCart }) => {
    console.log(cart);
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
      <div className="flex justify-between px-3 py-5 rounded-lg bg-slate-100 font-bold text-xl">
        <h1>Total:</h1>
        <p>$46</p>
      </div>
    </div>
  );
};

export default Cart;
