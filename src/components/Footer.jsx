import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-column">
          <h2>AJIO</h2>
          <p>
            Your destination for fashion,
            style and latest trends.
          </p>
        </div>

        <div className="footer-column">
          <h3>SHOP</h3>
          <p>Men</p>
          <p>Women</p>
          <p>Kids</p>
          <p>Accessories</p>
        </div>

        <div className="footer-column">
          <h3>HELP</h3>
          <p>Contact Us</p>
          <p>Shipping</p>
          <p>Returns</p>
          <p>FAQs</p>
        </div>

        <div className="footer-column">
          <h3>FOLLOW US</h3>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>YouTube</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 AJIO Clone | All Rights Reserved</p>
      </div>

    </footer>
  );
}

export default Footer;