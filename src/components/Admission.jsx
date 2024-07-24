import React from 'react';

const Admissions = () => {
  return (
    <section className="bg-[#CCD3CA] mb-[70px] py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Admissions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Admission Process</h3>
            <p>
              Our admission process is designed to be straightforward and transparent. Please follow the steps below to apply:
            </p>
            <ul className="list-decimal list-inside mt-4">
              <li>Fill out the online application form.</li>
              <li>Submit the required documents.</li>
              <li>Attend an admission interview if applicable.</li>
              <li>Receive admission decision and complete enrollment.</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Admission Criteria</h3>
            <p>
              We consider various factors when reviewing applications. The criteria include:
            </p>
            <ul className="list-disc list-inside mt-4">
              <li>Academic performance and records.</li>
              <li>Extracurricular activities and achievements.</li>
              <li>Personal statement or interview performance.</li>
              <li>Recommendations from teachers or mentors.</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Downloadable Forms</h3>
            <p>
              You can download the admission forms using the links below:
            </p>
            <ul className="list-disc list-inside mt-4">
              <li>
                <a href="/path-to-application-form.pdf" className="text-blue-500 hover:underline" download>Application Form</a>
              </li>
              <li>
                <a href="/path-to-medical-form.pdf" className="text-blue-500 hover:underline" download>Medical Form</a>
              </li>
              <li>
                <a href="/path-to-consent-form.pdf" className="text-blue-500 hover:underline" download>Consent Form</a>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Important Dates</h3>
            <p>
              Please take note of the following important dates for the admission process:
            </p>
            <ul className="list-disc list-inside mt-4">
              <li><strong>Application Deadline:</strong> June 30, 2024</li>
              <li><strong>Interview Dates:</strong> July 15-20, 2024</li>
              <li><strong>Final Decision Notification:</strong> August 5, 2024</li>
              <li><strong>Enrollment Deadline:</strong> August 15, 2024</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
