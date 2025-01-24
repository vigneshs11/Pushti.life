// pages/index.js

"use client";

import Head from "next/head";
import './globals.css';
import MenuItem from './menu-item';
import  {menuItemsData, ProteinDrinks, specialOffers} from './menu-items-data'
import {Carousel} from "./carousel";
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
      <header className="bg-success text-greens text-center py-4">
        <h1 className="font-sans text-6xl font-bold">PUSHTI</h1>
        <h2 className="font-sans text-4xl"> Protein Rich Food</h2>
      </header>

      <main className="container my-5">
        {/* Protein Bowls */}
        <section className="protein-bowl section-title">
          <h1 className="text-3xl font-bold text-green-700">Protein Bowls</h1>
          <div className="gy-4">
          {menuItemsData.map(item => <MenuItem {...item}/>)}
          </div>
        </section>

        {/* Protein Drinks */}
        <section className="mt-5 protein-drink section-title">
          <h1 className="text-2xl font-bold text-green-700">Protein Drinks</h1>
          {ProteinDrinks.map(item => <MenuItem {...item}/>)}
        </section>

        {/* Freedom of Choice */}
        <section className="mt-5 protein-drink section-title">
          <h2 className="text-2xl font-bold text-green-700">Freedom of Choice</h2>
          {specialOffers.map(item => <MenuItem {...item}/>)}
        </section>

        {/* Add-Ons */}
        <section className="mt-5 protein-drink section-titl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-green-700">Add-Ons</h2>
          <span className="text-black font-bold">₹ 15</span>
          </div>
          <ul className="grid grid-cols-2 gap-4 mt-6">
            <li>Yoghurt</li>
            <li>Paneer</li>
            <li>Tofu</li>
            <li>Veggies</li>
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


export const useClient = true;