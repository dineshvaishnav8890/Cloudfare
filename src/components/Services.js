import React from 'react';
import service1 from '../assets/service1.jpg';
import service2 from '../assets/service2.jpg';
import service3 from '../assets/service3.jpg';
import service4 from '../assets/service4.jpg';
import service5 from '../assets/service5.jpg';
import entertainment from '../assets/entertainment.jpg'; // new image

const services = [
  {
    title: 'Wedding Planning',
    description: 'End-to-end wedding planning tailored to your vision.',
    image: service1,
  },
  {
    title: 'Photography',
    description: 'Capture every moment with our professional photographers.',
    image: service2,
  },
  {
    title: 'Decoration',
    description: 'Beautiful, custom-themed decor for every ceremony.',
    image: service3,
  },
  {
    title: 'Hotel Booking',
    description: 'Comfortable and luxurious accommodations for guests.',
    image: service4,
  },
  {
    title: 'Catering',
    description: 'Delicious menus customized to your event and taste.',
    image: service5,
  },
  {
    title: 'Entertainment',
    description: 'Live music, DJs, and performances to light up your celebration.',
    image: entertainment,
  },
];

function Services() {
  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-pink-600">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-pink-600">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

