import React from 'react';

const Students = () => {
  return (
    <section className="bg-[#CCD3CA] mt-[-10px] mb-[54px]">
      <div className="container pb-[60px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-center pt-[10px] mb-8">Students</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Extracurricular Activities</h3>
            <p>We offer a range of extracurricular activities including sports, music, drama, and various clubs.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Achievements</h3>
            <p>Our students have won numerous awards in academics, sports, and arts at regional and national levels.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Achievements</h3>
            <p>Our students have won numerous awards in academics, sports, and arts at regional and national levels.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Achievements</h3>
            <p>Our students have won numerous awards in academics, sports, and arts at regional and national levels.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Student Council</h3>
            <p>Students have opportunities to lead and represent their peers through the student council and leadership programs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Student Council</h3>
            <p>Students have opportunities to lead and represent their peers through the student council and leadership programs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Students;
