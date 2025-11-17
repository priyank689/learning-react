import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="content">
        <h1>Welcome to My App</h1>
        <p>This is the main content of the page.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
