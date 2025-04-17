// import React, { useReducer } from "react";

// const initialState = {
//   name: "",
//   password: "",
//   error: "",
// };

// function FormReducer(state, action) {
//   switch (action.type) {
//     case "name":
//       return {
//         ...state,
//         name: action.payload,
//       };
//     case "password":
//       return {
//         ...state,
//         password: action.payload,
//       };
//     case "error":
//       return {
//         ...state,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// }

// export default function FormInput() {
//   const [state, dispatch] = useReducer(FormReducer, initialState);

//   const handleClick = (e) => {
//   e.preventDefault();

//   const password = state.password;

//   if (password.length < 6) {
//     dispatch({
//       type: "error",
//       payload: "Password is less than 6 letters",
//     });
//   } else if (!/[a-zA-Z]/.test(password)) {
//     dispatch({
//       type: "error",
//       payload: "Password must have a Strings",
//     });
//   }else if (!(/\d/.test(password))) {
//     dispatch({
//       type: "error",
//       payload: "Password must have a Numbers",
//     });
//   }else if (!(/[^a-zA-Z0-9]/.test(password))) {
//     dispatch({
//       type: "error",
//       payload: "Password must have a symbols",
//     });
//   } else {
//     dispatch({ type: "error", payload: "" });
//     console.log("Submitted:", state);
//   }

//   };

//   return (
//     <form onSubmit={handleClick}>
//       <label>Name:</label>
//       <input
//         onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
//         type="text"
//         placeholder="Write name"
//       />
//       <label>Password:</label>
//       <input
//         onChange={(e) =>
//           dispatch({ type: "password", payload: e.target.value })
//         }
//         type="password"
//         placeholder="Write password"
//       />
//       <p>Password must contain at least 6 letters</p>
//       <p style={{ color: "red" }}>{state.error}</p>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// import { useReducer, useEffect } from "react";
// import "./App.css";

// const initialState = {
//   loading: false,
//   data: null,
//   error: "",
//   show: false,
// };

// function FetchReducer(state, action) {
//   switch (action.type) {
//     case "start":
//       return { ...state, loading: true, error: "", show: true };
//     case "success":
//       return { ...state, data: action.payload, loading: false };
//     case "error":
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// }

// export default function App() {
//   const [state, dispatch] = useReducer(FetchReducer, initialState);
//     async function fetchData() {
//       try {
//         dispatch({ type: "start" });
//         const response = await fetch("https://fakestoreapi.com/products");
//         const data = await response.json();
//         dispatch({ type: "success", payload: data });
//       } catch (error) {
//         dispatch({ type: "error", payload: "Something went wrong" });
//       }
//       fetchData();
//     }
//   return (
//     <div>
//       <h1>Fetching API</h1>
//       {!state.show && <button onClick={fetchData}>Show</button>}
//       {state.loading && <h2>Loading...</h2>}
//       {state.error && <h2 style={{ color: "red" }}>{state.error}</h2>}
//       {state.data && (
//         <div className="cards">
//           {state.data.map((item) => (
//             <div key={item.id} className="card">
//               <h2>{item.title}</h2>
//               <img src={item.image} alt={item.title} width={100} />
//               <p>{item.category}</p>
//               <p>${item.price}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
