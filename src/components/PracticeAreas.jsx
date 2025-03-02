import React from 'react';
import { FaBriefcaseMedical, FaBalanceScale, FaShieldAlt, FaGavel } from 'react-icons/fa';

const servicesList = [
  {
    name: "Workplace Injury Claims",
    icon: <FaBriefcaseMedical className="text-blue-900 text-5xl" />,
    headingone: "How We Support Injured Workers:",
    headingonedetails: [
      "Help file and navigate workers' compensation claims.",
      "Ensure you receive medical benefits and wage replacement.",
      "Handle disputes with employers and insurance providers.",
      "Represent clients in hearings and appeals for denied claims.",
      "Advocate for maximum compensation based on injury severity.",
      "Assist with permanent disability claims and settlements.",
    ],
    headingtwo: "Additional Legal Services:",
    headingtwodetails: [
      "Investigate third-party liability for additional compensation.",
      "Guide clients on workplace safety violations and negligence claims.",
      "Advise on return-to-work policies and legal rights.",
    ],
  },
  {
    name: "Personal Injury Representation",
    icon: <FaBalanceScale className="text-blue-900 text-5xl" />,
    headingone: "Legal Help for Injury Victims:",
    headingonedetails: [
      "Comprehensive case evaluation and legal consultation.",
      "Gathering evidence to build a strong personal injury claim.",
      "Handling negotiations with insurance companies to maximize compensation.",
      "Filing lawsuits for car accidents, slip-and-fall injuries, and medical malpractice.",
      "Securing settlements for medical bills, lost wages, and pain and suffering.",
    ],
    headingtwo: "Why Choose Our Law Firm?",
    headingtwodetails: [
      "Proven success in handling complex injury cases.",
      "Access to medical experts and accident reconstruction specialists.",
      "Committed to fighting for justice and fair compensation.",
    ],
  },
  {
    name: "Social Security Disability (SSDI & SSI)",
    icon: <FaShieldAlt className="text-blue-900 text-5xl" />,
    headingone: "Helping You Secure Disability Benefits:",
    headingonedetails: [
      "Step-by-step guidance for Social Security Disability applications.",
      "Assistance with gathering medical records and necessary documentation.",
      "Legal representation in appeals for denied claims.",
      "Help with long-term disability benefits and continued support.",
      "Expert advice on meeting SSDI and SSI eligibility requirements.",
    ],
    headingtwo: "Maximizing Your Disability Claim:",
    headingtwodetails: [
      "Personalized case evaluation for stronger applications.",
      "Legal strategies to overcome claim denials and delays.",
      "Representation in administrative hearings and court appeals.",
    ],
  },
  {
    name: "Wrongful Death & Catastrophic Injury",
    icon: <FaGavel className="text-blue-900 text-5xl" />,
    headingone: "Fighting for Justice After Tragedy:",
    headingonedetails: [
      "Legal action against negligent individuals or companies.",
      "Securing financial compensation for medical expenses, lost income, and funeral costs.",
      "Helping families navigate wrongful death claims with compassionate legal support.",
      "Handling complex cases involving workplace accidents, auto collisions, and medical negligence.",
    ],
    headingtwo: "Comprehensive Legal Assistance:",
    headingtwodetails: [
      "Investigating wrongful death cases to establish liability.",
      "Negotiating settlements or pursuing litigation for maximum recovery.",
      "Providing dedicated advocacy to support grieving families.",
    ],
  },
];


const PracticeAreas = () => {
  return (
    <section className="flex bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="rounded-full shadow-lg text-3xl font-bold text-center mb-8 text-blue-900 bg-gray-300 w-64 mx-auto">Practice Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-4 gap-y-8">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden text-center relative transform transition h-100 duration-300 ease-in-out hover:scale-105 hover:shadow-2xl p-4"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">{service.name}</h3>
              <h4 className="text-blue-900 font-bold mb-2">{service.headingone}</h4>
              <ul className="list-disc text-left pl-4 mt-2 space-y-1 text-blue-900">
                {service.headingonedetails.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <h4 className="text-blue-900 font-bold mt-4 mb-2">{service.headingtwo}</h4>
              <ul className="list-disc text-left pl-4 mt-2 space-y-1 text-blue-900">
                {service.headingtwodetails.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
