import React from 'react';
import jaipurImg from '../assets/destinations/jaipur.jpg';
import ranthamboreImg from '../assets/destinations/ranthambore.jpg';
import pushkarImg from '../assets/destinations/pushkar.jpg';
import jaisalmerImg from '../assets/destinations/jaisalmer.jpg';
import divider from '../assets/divider.png'; // ✅ Add divider import

const destinations = [
  { name: "WEDDING IN JAIPUR", img: jaipurImg },
  { name: "WEDDING IN RANTHAMBORE", img: ranthamboreImg },
  { name: "WEDDING IN PUSHKAR", img: pushkarImg },
  { name: "WEDDING IN JAISALMER", img: jaisalmerImg }
];

const Destinations = () => {
  return (
    <section className="py-16 px-6 text-center bg-white">
      <h2 className="text-4xl font-semibold text-brown-800 mb-4 font-serif">
        Top Destination Wedding Places in Rajasthan
      </h2>

      {/* Decorative Divider Image */}
      <div className="flex justify-center mb-9">
        <img src={divider} alt="divider" className="h-20" />
      </div>

      <p className="text-lg text-gray-600 mb-8">
        My-merrige is widely recognized as a wholesome, complete events solution factory. From small intimate.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {destinations.map((dest, index) => (
          <div key={index} className="shadow-lg hover:shadow-xl transition duration-300">
            <img src={dest.img} alt={dest.name} className="w-full h-60 object-cover" />
            <div className="bg-yellow-200 py-2 font-semibold">{dest.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;

