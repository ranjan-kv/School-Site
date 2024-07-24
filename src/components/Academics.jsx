import React from 'react';

const Academics = () => {
  return (
    <section className="mt-[-30px] mb-[30px]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Academics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#CCD3CA]  p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Curriculum Overview</h3>
            <p>
              At Springdale Public School, we offer a comprehensive curriculum designed to cater to the needs of students at various levels. Our curriculum is divided into primary, secondary, and senior secondary stages to ensure a well-rounded education. Our curriculum is divided into primary, secondary, and senior secondary stages to ensure a well-rounded education.
            </p>
            <img 
              src="https://fiitjeeglobalschool.com/images/curriculum-m.jpg" 
              alt="Curriculum Overview" 
              className="mt-4 w-[500px] h-[300px] object-cover rounded-lg shadow-lg" 
            />
          </div>
          <div className="bg-[#CCD3CA] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Subjects Offered</h3>
            <p>
              We offer a diverse range of subjects to help students develop a broad knowledge base. At the primary level, students are introduced to fundamental subjects such as Mathematics, Science, English, and Social Studies. As they progress to secondary and senior secondary levels, they can choose from a variety of elective subjects including Computer Science, Economics, and Arts.
            </p>
            <img 
              src="https://as1.ftcdn.net/v2/jpg/04/45/77/54/1000_F_445775426_yx3Wl5UCTJOom5lSryjYYQjDkes0X23i.jpg" 
              alt="Subjects Offered" 
              className="mt-4 w-[500px] h-[300px] object-cover rounded-lg shadow-lg" 
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-[#CCD3CA] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Teaching Methodologies</h3>
            <p>
              Our teaching methodologies are designed to engage students and foster a love for learning. We employ a mix of traditional and modern teaching techniques, including interactive lessons, project-based learning, and digital resources to enhance the learning experience.
            </p>
            <img 
              src="https://www.netscribes.com/wp-content/uploads/2019/06/Technology-Watch.jpg" 
              alt="Teaching Methodologies" 
              className="mt-4 w-[500px] h-[300px] object-cover rounded-lg shadow-lg" 
            />
          </div>
          <div className="bg-[#CCD3CA] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Educational Resources</h3>
            <p>
              Our school is equipped with a variety of educational resources to support student learning. These include well-stocked libraries, science laboratories, computer labs, and interactive smartboards. We also provide access to online learning platforms to supplement classroom instruction.
            </p>
            <img 
              src="https://ies.ed.gov/ncee/edlabs/regions/appalachia/blogs/images/blog20_1.jpg" 
              alt="Educational Resources" 
              className="mt-4 w-[500px] h-[300px] object-cover rounded-lg shadow-lg" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
