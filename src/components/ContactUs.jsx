import React from 'react';

const ContactUs = () => {
  return (
    <section className="py-12 bg-[#CCD3CA] ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p><strong>Address:</strong> 1234 School Lane, Springfield, IL</p>
            <p><strong>Phone:</strong> (555) 123-4567</p>
            <p><strong>Email:</strong> info@springdale.edu</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
            <form action="#" method="POST">
              <label className="block mb-2">
                <span className="text-gray-700">Name</span>
                <input type="text" name="name" className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
              </label>
              <label className="block mb-2">
                <span className="text-gray-700">Email</span>
                <input type="email" name="email" className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
              </label>
              <label className="block mb-2">
                <span className="text-gray-700">Message</span>
                <textarea name="message" rows="4" className="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm"></textarea>
              </label>
              <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Send Message</button>
            </form>
          </div>
        </div>
        <div className="mt-8">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.825145610518!2d-73.98196418459384!3d40.77359027932742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25854343e1f5b%3A0xbcf6d23e27f10d87!2sThe%20Metropolitan%20Museum%20of%20Art!5e0!3m2!1sen!2sus!4v1635521646205!5m2!1sen!2sus" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="Map showing The Metropolitan Museum of Art location"
>
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
