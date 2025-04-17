// import React, { createContext, useReducer, useContext } from "react";
// import "./App.css";

// const MessageContext = createContext();

// const initialState = {
//   message: "",
//   type: "",
// };

// function messageReducer(state, action) {
//   switch (action.type) {
//     case "success":
//       return { message: "Сәтті", type: "success" };
//     case "error":
//       return { message: "Қате", type: "error" };
//     case "clear":
//       return { message: "", type: "" };
//     default:
//       return state;
//   }
// }

// function MessageProvider({ children }) {
//   const [state, dispatch] = useReducer(messageReducer, initialState);
//   return (
//     <MessageContext.Provider value={{ state, dispatch }}>
//       {children}
//     </MessageContext.Provider>
//   );
// }

// function useMessage() {
//   return useContext(MessageContext);
// }

// function MessageDisplay() {
//   const { state } = useMessage();
//   if (!state.message) return null;

//   return <div className={`message ${state.type}`}>{state.message}</div>;
// }

// function MessageButtons() {
//   const { dispatch } = useMessage();

//   return (
//     <div className="buttons">
//       <button onClick={() => dispatch({ type: "success" })}>
//         Сәтті деп шығару
//       </button>
//       <button onClick={() => dispatch({ type: "error" })}>
//         Қате деп шығару
//       </button>
//       <button onClick={() => dispatch({ type: "clear" })}>
//         Өшіру
//       </button>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <MessageProvider>
//       <div className="container">
//         <h2>Комментари көрсету</h2>
//         <MessageButtons />
//         <MessageDisplay />
//       </div>
//     </MessageProvider>
//   );
// }
