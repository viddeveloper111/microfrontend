import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="home-container">
     
      <section className="about">
        <h2>About Us</h2>
        <p>
          We are a leading provider of high-quality products tailored to your
          needs. Our mission is to deliver excellence and build lasting
          relationships with our customers.
        </p>
      </section>

      <section className="products">
        <h2>Our Products</h2>
        <p>
          Explore a wide variety of products, carefully crafted to meet your
          expectations and budget.
        </p>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>Email: contact@Vidhema.com</p>
        <p>Phone: +91-1234567890</p>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} MicroFrontends. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
