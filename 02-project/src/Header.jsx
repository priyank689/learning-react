import react from "react";
import "../styles.css";

export default function Header() {
  return (
    <>
      <div>
        <header className="header">
          <img className="logo" src="logo.png" alt="logo" />
          <h2 className="app-subtitle">its a time for popcorn</h2>
        </header>
      </div>
    </>
  );
}
