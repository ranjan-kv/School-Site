import React from 'react';
import Slider from 'react-slick';
import './Home.css';

// I know this is not a good practice puttibg  data like , but this is for example only....
const images = [
  'https://scoonews.com/wp-content/uploads/2022/07/doonschool314960491901496049190.jpg',
  'https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2017/07/25115637/250717_Library%40Home.jpg',
  'https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2016/01/12010491_818845248213367_1641036429557126366_o.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7DUHYFWsXNswYi7NZAC9tiQHvLTSWYGTmadc3a_rVx6sLJkEwO1aVUW0IEDQEc6hC-Xw&usqp=CAU',
  'https://media.bizj.us/view/img/11523110/grant-high-school*280xx3000-2000-0-115.jpg'
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-gray-100 mt-[-20px] mb-[40px] text-gray-800">

      <section className="bg-[#CCD3CA] text-white py-12">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="animated-text text-container">WELCOME To</span> <br />
            <span className="animated-text text-container">SPRINGDALE PUBLIC SCHOOL</span>
          </h1>
          <p className="text-base md:text-lg text-gray-500 mb-6">Nurturing young minds for a brighter future</p>

          
          <div className="slider-container w-full flex justify-center">
            <Slider {...settings} className="w-full max-w-[1000px]">
              {images.map((img, index) => (
                <div key={index} className="flex justify-center">
                  <img 
                    src={img} 
                    alt={`School Banner ${index + 1}`} 
                    className="w-full max-w-[1000px] h-auto max-h-[400px] rounded-lg shadow-lg object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      
      <section className="py-12 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Infrastructure and Facilities</h2>
          <div className="flex justify-center">
            <ul className="list-disc list-inside space-y-4 w-full max-w-4xl">
              <li className="bg-white hover:scale-110 p-6 rounded-lg shadow-md">
                <div className="flex items-center">
                  <img 
                    src="https://www.learningspacesolutions.com/wp-content/uploads/2024/01/guidelines-designing-safe-school-science-labs.png" 
                    alt="Labs" 
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-4"
                  />
                  <p>State-of-the-art science and computer labs</p>
                </div>
              </li>
              <li className="bg-white hover:scale-110 p-6 rounded-lg shadow-md">
                <div className="flex items-center">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Elementary_classroom_in_Alaska.jpg/1200px-Elementary_classroom_in_Alaska.jpg" 
                    alt="Classrooms" 
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-4"
                  />
                  <p>Spacious and well-equipped classrooms</p>
                </div>
              </li>
              <li className="bg-white hover:scale-110 p-6 rounded-lg shadow-md">
                <div className="flex items-center">
                  <img 
                    src="https://assets-global.website-files.com/604a97c70aee09eed25ce991/61897a35583a9b51db018d3e_MartinPublicSeating-97560-Importance-School-Library-blogbanner1.jpg" 
                    alt="Library" 
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-4"
                  />
                  <p>Library with a vast collection of books and digital resources</p>
                </div>
              </li>
              <li className="bg-white hover:scale-110 p-6 rounded-lg shadow-md">
                <div className="flex items-center">
                  <img 
                    src="https://rohanbopannatennis.com/wp-content/uploads/2018/02/dsc08350_orig.jpeg" 
                    alt="Sports" 
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-4"
                  />
                  <p>Sports facilities including a playground, gymnasium, and swimming pool</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
