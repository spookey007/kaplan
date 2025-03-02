import React from 'react';
import backgroundImg from '../assets/images/services/background.jpeg'; // Adjust this path to your background image
const About = () => {
  return (
    <section 
      className="flex bg-gray-800 py-10" 
      // style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-10">Kaplan & Kaplan</h2>
        <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto">
          At <strong>Kaplan & Kaplan Law</strong>, we are committed to delivering exceptional legal services with integrity, diligence, and a client-first approach. With years of experience in diverse legal fields, our firm has built a reputation for providing strategic legal solutions tailored to each client's unique needs.
        </p>
        <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto mt-6">
          Whether you are facing a complex legal dispute, need guidance in business law, or require expert counsel for personal matters, our team is here to help. We specialize in civil litigation, corporate law, family law, real estate transactions, estate planning, and more—offering sound legal advice and steadfast representation.
        </p>
        <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto mt-6">
          Legal matters can be overwhelming, but with Kaplan & Kaplan Law by your side, you don’t have to navigate them alone. Our attorneys take the time to understand your situation, explain your options clearly, and advocate fiercely on your behalf. We prioritize communication, transparency, and personalized strategies to achieve the best possible outcomes.
        </p>
        <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto mt-6">
          Our firm believes that justice should be accessible to all. That’s why we work diligently to protect your rights, secure your interests, and provide legal solutions that make a real difference. Whether in the courtroom, at the negotiation table, or through meticulous legal planning, Kaplan & Kaplan Law stands as a pillar of trust and expertise.
        </p>
        <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto mt-6">
          If you are seeking dedicated legal representation or simply need legal advice, we are here to assist you. Contact <strong>Kaplan & Kaplan Law</strong> today to schedule a consultation and take the first step toward resolving your legal matters with confidence.
        </p>
      </div>
    </section>
  );
};

export default About;
