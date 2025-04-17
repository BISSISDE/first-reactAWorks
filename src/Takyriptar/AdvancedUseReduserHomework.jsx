// import React, { useReducer, useEffect } from "react";
// import "./App.css";

// const initialState = {
//   name: "",
//   savedName: "",
//   loading: false,
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "SET_NAME":
//       return { ...state, name: action.payload };
//     case "SAVE_START":
//       return { ...state, loading: true };
//     case "SAVE_SUCCESS":
//       return { ...state, loading: false, savedName: action.payload };
//     default:
//       return state;
//   }
// }

// export default function NameSaver() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     const storedName = localStorage.getItem("username");
//     if (storedName) {
//       dispatch({ type: "SAVE_SUCCESS", payload: storedName });
//     }
//   }, []);

//   const handleSave = () => {
//     dispatch({ type: "SAVE_START" });
//     setTimeout(() => {
//       localStorage.setItem("username", state.name);
//       dispatch({ type: "SAVE_SUCCESS", payload: state.name });
//     }, 1000);
//   };

//   return (
//     <div className="container">
//       <h2>Ат сақтау</h2>
//       <input
//         type="text"
//         value={state.name}
//         onChange={(e) =>
//           dispatch({ type: "SET_NAME", payload: e.target.value })
//         }
//         placeholder="Атыңды жаз"
//         className="input"
//       />
//       <button onClick={handleSave} disabled={state.loading} className="button">
//         {state.loading ? "Сақталып жатр..." : "Сақтау"}
//       </button>
//       {state.savedName && (
//         <p className="result">
//           Соңгы жазылған ат: <strong>{state.savedName}</strong>
//         </p>
//       )}
//     </div>
//   );
// }
