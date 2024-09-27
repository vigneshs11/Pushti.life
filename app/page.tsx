
//@ts-nocheck
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-white">
      <div className="background-container">
      <div className="content">


      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-12">
      <h1
  className="text-5xl sm:text-6xl md:text-8xl font-bold text-pink-600
    mb-4
     bg-opacity-50
    w-2xl
    drop-shadow-7xl
    mt-24
    font-sans"
>PUSHTI</h1>        
<p className="mt-4 text-lg text-white-500 w-1/2 font-bold rounded-lg">
          Wholesome high protein food, that enables you meet your daily protein intake requirement.
          Our mission is to change the protein narrative of India one bowl at a time.</p>
        
      </section>

      {/* Feature/Value Proposition Section */}
      <section className="hidden md:grid gap-8 mt-16 text-center sm:grid-cols-2 lg:grid-cols-2">
        <div className="p-6 bg-gray-100 rounded-lg ">
          <h2 className="text-2xl font-semibold text-green-400">Are you meeting your protein need?</h2>
          <p className="mt-2 text-black">
            Get 0.8x - 1.5x (gms per body weight in kg) of protein from natural food sources 
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-semibold text-green-400">Non Packaged, Non Processed, No Oil</h2>
          <p className="mt-2 text-black">
            We use whole foods that are locally sourced and in measured quantities, with every bowl served, so you know your protein and calorie intake
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-semibold text-green-400">Here to be your post work out partner</h2>
          <p className="mt-2 text-black">
            Did you know? It is essential to hydrate yourself and consume a nutritious meal within the first 20 minutes of your workout
          </p>
        </div>
        <div className="p-3 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-semibold text-green-400">Coming Soon...</h2>
          <p className="mt-2 text-black">
            On Swiggy, Zomato and a store near your gym
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="mt-16 text-center">
        
      </section>

      {/* Footer */}
      <footer className="position-fixed mt-auto p-6 text-center text-gray-500">
        <p>&copy; 2024 Pushti. All rights reserved.</p>
      </footer>
      </div>
      </div>
    </main>
  );
}
