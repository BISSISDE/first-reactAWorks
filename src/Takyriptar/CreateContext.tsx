// import React, { createContext, useContext } from "react";
// import "./App.css";

// const PartyContext = createContext("");

// const Director = () => {
//   const idea = "Celebrate Nauruz";

//   return (
//     <PartyContext.Provider value={idea}>
//       <div className="container">
//         <div className="card">
//           <h2>Director</h2>
//           <Zavuch />
//         </div>
//       </div>
//     </PartyContext.Provider>
//   );
// };

// function Zavuch() {
//   return (
//     <div className="card">
//       <h2>Zavuch</h2>
//       <Teacher />
//     </div>
//   );
// }

// function Teacher() {
//   return (
//     <div className="card">
//       <h2>Teacher</h2>
//       <Student />
//     </div>
//   );
// }

// function Student() {
//   const party = useContext(PartyContext);

//   return (
//     <div className="card">
//       <h2>Student</h2>
//       <p>We need to {party} 🎉</p>
//     </div>
//   );
// }

// export default Director;
