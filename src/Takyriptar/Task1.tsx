// // day 1 Homework
// function UserCard (props:any) {

//     return (
//       <div>
//         <h1>
//           Hello, My name is {props.name}, I'm {props.age} and I live in {props.city}
//         </h1>
//       </div>
//     );
// }

// export default UserCard;

// // day2 Home&Class work

// function User ({name,age,email}:any){
//   return(
//     <div>
//       <h1>{name}</h1>
//       <p>{age}</p>
//       <p>{email}</p>
//     </div>
//   )
// }
// function UserList() {
//   const users = [
//     { name: "Aigan", age: "14", email: "aiganur@gmail.com" },
//     { name: "Ayaulym", age: "23", email: "ajganymnrkadyr@gmail.com" },
//     { name: "Aruzhan", age: "19", email: "arulwkmvr@gmail.com"}
//   ]
//   return(
//     <div className="UserList">
//       <h1 className="UsersText">Users</h1>
//       {users.map((user , index)=>(
//           <User key={index} name={user.name} age={user.age} email={user.email}/>
//       ))}
//     </div>
//   )
// }
// export default UserList;

// day3 Classwork 

// import { useState } from "react";

// function Appp() {
//   const [color, setColor] = useState("white");

//   function ColorApp() {
//     setColor((color) => {
//       if (color == "white") {
//         return "darkgreen";
//       } else {
//         return "white";
//       }
//     });

//   }

//   return (
//     <div
//       style={{
//         backgroundColor: color,
//         width: '300px',
//         padding: '30px',
//         borderRadius: '20px',
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <button onClick={ColorApp}>Exchange Color</button>
//     </div>
//   );
// }

// export default Appp;

