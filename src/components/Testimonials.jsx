import React from 'react';
import Slider from 'react-slick'; // Import react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; // Import slick carousel CSS

const testimonialsData = [
  {
    name: 'Sarah W.',
    review: 'Absolutely amazing!! My house has never been this clean.',
  },
  {
    name: 'John D.',
    review: 'I can\'t say enough about them',
  },
  {
    name: 'Emily R.',
    review: 'I don\'t think my house has been this clean since it was built',
  },
  {
    name: 'Michael T.',
    review: 'My house feels brand new after every cleaning session! The team is efficient and leaves no stone unturned.',
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show two reviews at a time (adjust based on design)
    slidesToScroll: 1,
    autoplay: true,  // Auto-play enabled
    autoplaySpeed: 3000, // Change slides every 3 seconds
    responsive: [
      {
        breakpoint: 1024, // For medium-sized screens, show 2 slides
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // For small screens, show 1 slide at a time
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-100 py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        {/* Section Title */}
        <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-8 md:mb-10">
          Here's what Angie's List subscribers have to say:
        </h2>
        <p className="text-2xl font-bold text-blue-900 mb-8 md:mb-10">
          A Ratings on Angie's List
        </p>
        
        {/* Slider */}
        <Slider {...settings}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-white shadow-lg p-4 md:p-6 rounded-lg">
                {/* Generate avatar using UI Avatars */}
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&size=100`}
                  alt={testimonial.name}
                  className="mx-auto rounded-full h-20 w-20 md:h-24 md:w-24 mb-4"
                />
                <p className="text-gray-700 italic mb-2 md:mb-4">
                  "{testimonial.review}"
                </p>
                <h3 className="text-lg md:text-xl font-semibold text-yellow-500">
                  {testimonial.name}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
