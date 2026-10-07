import "./Home.css";

function Home() {
  return (
    <div className="home">

      <section className="hero">
        <div className="hero-content">
          <h1>Fashion That Defines You</h1>
          <p>Discover the latest styles for every occasion.</p>
          <button>SHOP NOW</button>
        </div>
      </section>

      <section className="categories">
        <h2>Shop By Category</h2>

        <div className="category-container">

          <div className="category-card">
            <h3>Men</h3>
            <p>Latest fashion for men</p>
            <button>SHOP MEN</button>
          </div>

          <div className="category-card">
            <h3>Women</h3>
            <p>Trendy styles for women</p>
            <button>SHOP WOMEN</button>
          </div>

          <div className="category-card">
            <h3>Kids</h3>
            <p>Stylish outfits for kids</p>
            <button>SHOP KIDS</button>
          </div>

        </div>
      </section>

      <section className="offer">
        <h2>BIG FASHION SALE</h2>
        <p>Up to 50% OFF on selected styles</p>
        <button>EXPLORE DEALS</button>
      </section>

    </div>
  );
}

export default Home;