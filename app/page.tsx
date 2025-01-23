// pages/index.js
import Head from "next/head";
import './globals.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pushti - Protein Rich Food</title>
        <meta name="description" content="Pushti - Protein Rich Food Menu" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>

      {/* Updated Header */}
      <header className="bg-success text-green text-center py-4">
        <h1>Pushti - Protein Rich Food</h1>
        <p>New BEL Road, Below Cult Gym, Bengaluru | +91 7975021725</p>
      </header>

      <main className="container my-5">
        {/* Protein Bowls */}
        <section className="protein-bowl section-title">
          <h1 className="text-left text-red-500 text-lg my-4 ">Protein Bowls</h1>
          <div className="row gy-4">
            <div className="col-lg-6 w-full">
              <h3 className="mt-4">1. Sprouted Black Chana & Green Gram  <strong className="text-black" >₹135</strong></h3>
              <p>
                (25g Protein, 425 kcal)
              </p>
              <p>
                Black Chana Sprouts, Green Gram Sprouts, Paneer or Tofu, Mixed
                Vegetables and Lemon juice dressing
              </p>
            </div>
            <div className="col-md-6 mt-4">
              <h3 className="mt-4">2. Rajma & Chickpea Bowl <strong className="text-black">₹135</strong></h3>
              <p>
                (22g Protein, 378 kcal) 
              </p>
              <p>
                Boiled Rajma (Kidney Beans), Boiled Chickpea (Kabuli Chana),
                Paneer or Tofu, Mixed Vegetable and Lemon juice dressing
              </p>
            </div>
            <div className="col-md-6 mt-4">
              <h3 className="mt-4">3. Soybean Salad Bowl <strong className="text-black">₹120</strong></h3>
              <p>
                (34g Protein, 406 kcal) 
              </p>
              <p>
                Boiled Soybean, Sprouted Green Gram, Roasted Peanuts, Mixed
                Vegetables and Lemon juice dressing
              </p>
            </div>
            <div className="col-md-6 mt-4">
              <h3 className="mt-4">4. Soya Chunks Salad <strong className="text-black">₹130</strong></h3>
              <p>
                (37g Protein, 327 kcal) 
              </p>
              <p>
                Marinated Soya Chunks with Indian spices and cashew gravy,
                Chickpea, Mixed Vegetables and Yoghurt Dressing
              </p>
            </div>
          </div>
        </section>

        {/* Protein Drinks */}
        <section className="mt-5 protein-drink section-title">
          <h1 className="text-left text-lg text-red-500 text-danger mb-4">Protein Drinks</h1>
          <div className="row gy-4">
            <div className="col-md-6">
              <h5>1. Sattu Buttermilk</h5>
              <p>
                (11g Protein, 138 kcal) <strong>₹75</strong>
              </p>
              <p>Sattu, Curd, Fresh Mint </p>
            </div>
            <div className="col-md-6">
              <h5>2. Banana & Dates Milkshake with Sattu</h5>
              <p>
                (12g Protein, 190 kcal) <strong>₹85</strong>
              </p>
              <p>Sattu, Milk, Banana, Dates, Cardamom</p>
            </div>
          </div>
        </section>

        {/* Freedom of Choice */}
        <section className="mt-5">
          <h2 className="text-left text-lg text-red-500 mb-4 section-title">Freedom of Choice</h2>
          <div className="row gy-4">
            <div className="col-md-6">
              <h5>1. Sprouted Black Chana & Green Gram</h5>
              <p>
                (25g Protein, 425 kcal)
                <span className="price">₹135</span>
              </p>
              <p>
                Black Chana Sprouts, Green Gram Sprouts, Paneer or Tofu, Mixed
                Vegetables and Lemon juice dressing
              </p>
            </div>
          </div>
        </section>

        {/* Add-Ons */}
        <section className="mt-5 section-title">
          <h2 className="text-left text-lg text-red-500 mb-4">Add-Ons</h2>
          <ul className="grid grid-cols-2 gap-1 add-ons">
            <li>1. Yoghurt</li>
            <li>2. Paneer</li>
            <li>3. Tofu</li>
            <li>4. Veggies</li>
          </ul>
        </section>
      </main>

      <footer className="bg-dark text-white text-center py-3">
        <p>
          Visit us:{" "}
          <a href="http://www.pushti.life" target="_blank" className="text-danger">
            www.pushti.life
          </a>
        </p>
        <p>
          Follow us on Instagram:{" "}
          <a
            href="https://instagram.com/pushti.life"
            target="_blank"
            className="text-danger"
          >
            @pushti.life
          </a>
        </p>
        <p>Address: New BEL Road, Below Cult Gym, Bengaluru</p>
        <p>Phone: +91 7975021725</p>
      </footer>
    </div>
  );
}


