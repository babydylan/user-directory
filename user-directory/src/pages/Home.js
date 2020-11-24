// import React, { Component } from "react";
// import API from "../utils/Api"
// import Table from "../components/Table";


import './App.css';


function Home() {

  const styles = {
    header: {
      backgroundColor: "#6495ED",
      padding: "1rem",
      margin: "0"
    },
    input: {
      marginLeft: "1rem",
      marginRight: "auto",
      padding: "5px",
    },
    search: {
      marginLeft: "1rem"
    }


  }; return (
    <div>
      <div className="App">
        <header>
          <h1 style={styles.header}>Search for Employee</h1>
        </header>
      </div>

      <div>
        <h2 style={styles.search}>
          Search:
        </h2>
        <input style={styles.input}></input>
      </div>
    </div>
  );
}

export default Home;