import React from 'react';

const WhyChoose = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-12 py-12 text-gray-900">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Getting You the Compensation You Deserve
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
          Insurance companies try to pay as little as possible. We make sure that doesn’t happen. Our team fights to get you full benefits for medical bills, lost wages, and any lasting injuries. We also help structure settlements so they won’t affect other benefits, like Social Security Disability.
        </p>
      </div>

      <hr className="border-t-2 border-gray-300 my-10 w-3/4 mx-auto" />

      {/* Content Section */}
      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-3">
            A Strong Advocate in Hearings and Negotiations
          </h3>
          <p className="text-lg text-gray-700">
            We stand up to insurance companies. If they deny your claim or try to reduce your benefits, we push back. Whether at hearings or in negotiations, we fight for your rights every step of the way.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-3">
            Support and Guidance When You Need It Most
          </h3>
          <p className="text-lg text-gray-700">
            Workers’ compensation cases can be stressful. We are here to guide you. Our team explains your options, answers your questions, and makes sure you feel supported throughout the process.
          </p>
        </div>
      </div>

      <hr className="border-t-2 border-gray-300 my-10 w-3/4 mx-auto" />

      {/* Call to Action Section */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Let Kaplan & Kaplan Fight for You
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
          Don’t let the system take advantage of you. Get the legal help you need. Contact Kaplan & Kaplan today for a free consultation.
        </p>

        <div className="mt-6 text-lg">
          <p className="font-semibold text-gray-800">📞 973-694-8100</p>
          <p className="font-semibold text-gray-800">📍 N. Haledon Office</p>
          <p className="text-gray-700">810 Belmont Avenue Suite 201 North Haledon, NJ 07508</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
