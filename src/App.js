import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <Card />

      {/* <nav className="Navbar">Home</nav>
      <h1 className="Name" />
      <ul className="">
        <li className="From" />
        <li className="Job-title" />
        <li className="Employer" />
        <br />
        <li className="Favorite Movies" />
      </ul> */}
    </div>
  );
}

export default App;
