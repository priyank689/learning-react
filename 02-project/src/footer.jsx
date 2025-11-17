import react from "react";
import "../styles.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  console.log(currentYear);

  return (
    <>
      <footer className="footer">
        <p className="footer-text">
          copyright {currentYear} Tanush Dey all right reserved{" "}
        </p>
      </footer>
    </>
  );
}
