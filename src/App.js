import React, { Component } from 'react'
import LoginForm from "./components/LoginForm";
// import TwitterMessage from "./components/TwitterMessage";

function App(){

  const handleSubmit = ({firstName, lastName, dob}) => {
    console.log("Submitted on Parent Component")
    console.log(firstName);
    console.log(lastName);
    console.log(dob);
  }

  return (
    <div className="App">
      <LoginForm handleSubmit={handleSubmit}></LoginForm>
    </div>
  );
}

export default App;
