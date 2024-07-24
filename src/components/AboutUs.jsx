import React from 'react';

const AboutUs = () => {
  return (
    <section className="mt-[-30px] bg-white mb-[30px]">
      <div className="container bg-[#CCD3CA] rounded-lg mx-auto px-4">
        <h2 className="text-3xl font-bold text-center pt-[10px] mb-8">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">History</h3>
            <p>Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</p>
            <img src="https://images.theconversation.com/files/31286/original/7rpvzqvb-1379047341.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip" alt="History" className="mt-4 w-[600px] h-[400px] rounded-lg shadow-lg" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Vision</h3>
            <p>To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
            <img src="https://img.freepik.com/free-photo/kids-with-vr-glasses-abstract-futuristic-school-classroom_23-2150892638.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716595200&semt=ais_user" alt="Vision" className="mt-4 h-[400px] w-[600px]  rounded-lg shadow-lg" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Mission</h3>
            <p>To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
            <img src="https://img.jagranjosh.com/images/2023/November/3112023/Most-Educated-Countries.webp" alt="Mission" className="mt-4  w-[600px] h-[400px] rounded-lg shadow-lg" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Principal's Message</h3>
            <p>At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
            <img src="https://www.pottsmerc.com/wp-content/uploads/migration/2015/08/4049abc2b5f3aca4016ff20f5c427cda.jpg?w=620" className="mt-4  w-[600px] h-[400px] rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
