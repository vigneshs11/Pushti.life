import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-6 bg-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-12">
        <h1 className="text-5xl font-bold text-green-600">Welcome to Pushti</h1>
        <p className="mt-4 text-lg text-gray-600">
          Bringing you nutritious and delicious food made with love and care.
        </p>
        <button className="mt-8 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-500">
          Get Started
        </button>
      </section>

      {/* Feature/Value Proposition Section */}
      <section className="grid gap-8 mt-16 text-center sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-semibold">Healthy Ingredients</h2>
          <p className="mt-2 text-gray-600">
            We source the freshest and healthiest ingredients for every meal.
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-semibold">Fast Delivery</h2>
          <p className="mt-2 text-gray-600">
            Enjoy quick delivery to your doorstep, every day of the week.
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-semibold">Sustainable Packaging</h2>
          <p className="mt-2 text-gray-600">
            Our packaging is eco-friendly, minimizing our environmental
            footprint.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-green-600">
          Join Pushti Today!
        </h2>
        <p className="mt-4 text-gray-600">
          Sign up now and start enjoying healthy, delicious meals delivered
          right to your door.
        </p>
        <button className="mt-8 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-500">
          Sign Up
        </button>
      </section>

      {/* Footer */}
      <footer className="mt-auto p-6 text-center text-gray-500">
        <p>&copy; 2024 Pushti. All rights reserved.</p>
      </footer>
    </main>
  );
}
