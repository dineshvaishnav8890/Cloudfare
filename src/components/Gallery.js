import React from 'react';
import galleryImages from '../assets/gallery/galleryImages';

function Gallery() {
  return (
    <section id="gallery" className="py-16 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Gallery ${idx + 1}`}
              className="rounded shadow"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;

