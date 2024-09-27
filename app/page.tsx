import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-white">
      <div className="background-container">
      <div className="content">

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-12">
      <h1
  className="text-8xl font-bold text-green-400
    mb-4
     bg-opacity-50
    w-2xl
    drop-shadow-7xl
    mt-24
    "
>
  Pushti
</h1>        <p className="mt-4 text-lg text-black w-1/2">
          Wholesome Protein Rich Vegetarian Meals, that ensure you meet your daily protein intake.
          Breaking the myth of "No Veg is only protein rich" one meal at a time
        </p>
        
      </section>

      {/* Feature/Value Proposition Section */}
      <section className="grid gap-8 mt-16 text-center sm:grid-cols-2 lg:grid-cols-1">
        <div className="p-6 bg-gray-100 rounded-lg ">
          <h2 className="text-2xl font-semibold text-green-400">Healthy Ingredients</h2>
          <p className="mt-2 text-black">
            We source the freshest and healthiest ingredients for every meal.
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-semibold text-green-400">Fast Delivery</h2>
          <p className="mt-2 text-black">
            Coming soon an all major food delivery Apps 
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-semibold text-green-400">Sustainable Packaging</h2>
          <p className="mt-2 text-black">
            Our packaging is eco-friendly, minimizing our environmental
            footprint.
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
