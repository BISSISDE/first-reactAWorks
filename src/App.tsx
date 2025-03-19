import React from "react";
import "./App.css"
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/profile">My Profile</Link>
      <Link to="/projects">My Projects</Link>
      <Link to="/about">About Me</Link>
    </nav>
  );
};

const Profile = () => {
  return (
    <div>
      <h2>My Profile</h2>
      <p>Name: Aigan</p>
      <p>Email: asdfgh@gmail.com</p>
      <p>Academy: 172SCHOOL</p>
      <Link to="/projects">
        <button>Go to Projects</button>
      </Link>
    </div>
  );
};

const Projects = () => {
  return (
    <div>
      <h2>My Projects</h2>
      <ul>
        <li>
          <strong>Project 1:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa recusandae rem sunt dicta ab, eveniet fuga ipsum laborum laudantium provident id mollitia. Omnis atque eaque sunt vitae, ipsum consectetur voluptatibus.
        </li>
        <li>
          <strong>Project 2:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non iusto suscipit hic enim veritatis numquam aperiam, est id laboriosam nihil doloribus labore architecto officia eligendi tempora vero vel nam sunt.
        </li>
        <li>
          <strong>Project 3:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorem nulla cumque consequuntur dolor quam quae pariatur sed eveniet nihil, quisquam amet nobis libero adipisci illum sint minus magni rerum?
        </li>
      </ul>
      <Link to="/about">
        <button>Go to About Me</button>
      </Link>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h2>About Me</h2>
      <p>
        I am a UI/UX design student passionate about creating intuitive user
        experiences.
      </p>
      <Link to="/profile">
        <button>Go to My Profile</button>
      </Link>
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
