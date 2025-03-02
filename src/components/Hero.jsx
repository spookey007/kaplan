import React, { useState } from 'react';
import heroImage from '../assets/images/hero.png';
import '../assets/css/hero.css';
import Testimonials from './Testimonials';
import WhyChoose from './WhyChoose';
import ContactModal from './ContactModal'; // Import Modal

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row bg-gray-900">
        {/* Video Section */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
          <div className="rounded-lg overflow-hidden min-h-[300px] md:min-h-[400px] flex items-center justify-center bg-blue-900 bg-opacity-60 p-6 md:p-8 lg:p-10 text-white max-w-2xl mx-auto">
            <section className="w-full">
              {/* Content */}
              <div className="rounded-b-md">
                <h3 className="text-xl md:text-2xl font-semibold mb-4">Legal Guidance for Injured Workers:</h3>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm md:text-base">
                  <li>If you’re hurt at work, the process can feel overwhelming</li>
                  <li>You may not know where to turn</li>
                  <li>The right lawyer makes all the difference in getting the benefits you need</li>
                  <li>That’s why injured workers across New Jersey trust Kaplan & Kaplan.</li>
                </ul>

                {/* Contact Info */}
                <div className="text-left mt-4">
                  <p className="text-lg mb-2">
                    <span className="font-bold">Call Now:</span>
                    <a href="tel:+19736948100" className="text-base md:text-lg font-bold text-white hover:text-yellow-400"> (973) 694-81002</a>
                  </p>
                  <p className="text-sm">Please leave a message; we'll return your call promptly.</p>
                  <p className="text-sm">
                    <span className="font-bold">Email:</span>
                    <a href="mailto:info@kaplanlaw.com" className="text-base md:text-lg font-bold text-white hover:text-yellow-400"> info@kaplanlaw.com</a>
                  </p>
                </div>
              </div>

              {/* Slogan and Info */}
              <div className="bg-blue-700 bg-opacity-70 p-4 rounded-md mt-6 text-center max-w-lg mx-auto">
                <p className="font-bold">Injured at work? We’re here to fight for you!</p>
                <p className="text-sm">Trusted Experience | FREE CONSULTATIONS | Call Today!</p>
              </div>
              <div className="flex items-center justify-center mb-4 md:mb-0">
                <p className="text-lg tilt-animation">Strong Advocacy, Proven Results!</p>
              </div>
            </section>
          </div>
        </div>

        {/* Text and Image Section */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 lg:p-10 max-w-3xl mx-auto">
          <div className="relative w-full h-full">
            {/* Ensure the image covers the full area */}
            <img
              src={heroImage}
              alt="Cleaning Service"
              className="w-full h-full object-cover md:object-contain lg:object-cover rounded-lg shadow-lg"
            />
            {/* Overlay content */}
            <div className="absolute inset-0 flex flex-col items-start justify-center bg-gray-900 bg-opacity-60 p-4 md:p-8 lg:p-12 rounded-lg">
              <h1 className="retro-text font-extrabold mb-2 md:mb-4 text-2xl md:text-4xl lg:text-5xl">
              Your Trusted Workers Compensation Lawyer in New Jersey
              </h1>
              {/* <p className="text-sm md:text-lg lg:text-xl text-white mb-4 md:mb-6 lg:mb-8">
                Experienced & Responsible!
              </p> */}
              <button
                className="bg-indigo-200 hover:bg-gray-200 text-blue-900 font-bold py-2 md:py-3 lg:py-4 px-4 md:px-6 lg:px-8 rounded-lg transition duration-300"
                onClick={openModal}
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Include Modal */}
      <ContactModal isOpen={isModalOpen} closeModal={closeModal} />

      <div className="container mx-auto px-4">
        {/* <WhyChoose /> */}
        <WhyChoose />
      </div>
    </>
  );
};

export default Hero;
