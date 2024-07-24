import React from 'react';

const Gallery = () => {
  return (
    <section className="py-12 mb-[80px] bg-[#CCD3CA]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        <div className="flex justify-center mb-4">
          <input 
            type="text" 
            placeholder="Filter by event type or date" 
            className="p-2 border rounded-lg w-full max-w-sm" 
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img 
              src="https://via.placeholder.com/600x400?text=Event+1" 
              alt="Event 1" 
              className="w-full rounded-lg"
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img 
              src="https://via.placeholder.com/600x400?text=Event+2" 
              alt="Event 2" 
              className="w-full rounded-lg"
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img 
              src="https://via.placeholder.com/600x400?text=Event+3" 
              alt="Event 3" 
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
