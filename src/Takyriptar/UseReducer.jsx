// import React, { useReducer, useState } from "react";
// import "./App.css";
// import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";
// import Content from "./LanguageSwitcher/Content";
// import LanguageContext from "./LanguageSwitcher/LanguageContext";

// let initialState = {
//   language: "ru",
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "tilaystyr":
//       return {
//         language: action.payload,
//       };
//   }
// }

// export default function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div className="App">
//       <LanguageContext.Provider value={{ state, dispatch }}>
//         <LanguageSwitcher />
//         <Content />
//       </LanguageContext.Provider>
//     </div>
//   )
// }
