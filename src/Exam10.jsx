import { createContext, useReducer, useContext } from "react";
import "./App.css";

const CartContext = createContext();

const initialState = { Cart: [] };

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, Cart: [...state.Cart, action.payload] };
    case "REMOVE_ITEM":
      const index = state.Cart.findIndex((item) => item.id === action.payload);
      if (index > -1) {
        const newCart = [...state.Cart];
        newCart.splice(index, 1);
        return { ...state, Cart: newCart };
      }
      return state;
    case "CLEAR_Cart":
      return { ...state, Cart: [] };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

const products = [
  { id: 1, name: "Ball", price: 2000 },
  { id: 2, name: "Bike", price: 170000 },
  { id: 3, name: "Moped", price: 80000 },
];

const ProductList = () => {
  const { dispatch } = useCart();

  return (
    <div className="Cartbox">
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="productitem">
            <span>
              {product.name} - {product.price}tg
            </span>
            <button
              className="addbutton"
              onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Cart = () => {
  const { state, dispatch } = useCart();
  const { Cart } = state;
  const total = Cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="Cartbox">
      <h2>Shopping Cart</h2>
      {Cart.length === 0 ? (
        <p>Your Cart is empty</p>
      ) : (
        <>
          <ul>
            {Cart.map((item, index) => (
              <li key={index} className="Cartitem">
                <span>
                  {item.name} - {item.price}tg
                </span>
                <button
                  className="removebutton"
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: item.id })
                  }
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="Carttotal">
            <p>
              <strong>Total: {total}tg</strong>
            </p>
            <button
              className="clearbutton"
              onClick={() => dispatch({ type: "CLEAR_Cart" })}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const App = () => {
  return (
    <CartProvider>
      <div className="container">
        <h1>Online Store</h1>
        <div className="flexrow">
          <ProductList />
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
