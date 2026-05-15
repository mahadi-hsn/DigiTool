const CartItems = ({ cartItem, cart, setCart }) => {
  const { title, price, icon, features, description, billing, badge } =
    cartItem;

  const handleDeleteCart = () => {
    const filteredCart = cart.filter((item) => item.title != title);
    setCart(filteredCart);
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-5 p-5 rounded-xl bg-slate-100">
        <div className="flex items-center gap-5">
          <div className="p-3 rounded-full bg-white">
            <img src={icon} alt="" />
          </div>
          <div>
            <h4 className="font-bold">{title}</h4>
            <p>${price}</p>
          </div>
        </div>
        <p
          onClick={() => handleDeleteCart()}
          className="text-red-600 cursor-pointer"
        >
          Remove
        </p>
      </div>
    </div>
  );
};

export default CartItems;
