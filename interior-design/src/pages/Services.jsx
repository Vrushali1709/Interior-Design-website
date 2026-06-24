import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Interior10 from "../assets/interior10.jpg";
// import Interior11 from "../assets/interior11.jpg";
// import Interior12 from "../assets/interior12.jpg";
// import Interior13 from "../assets/interior13.jpg";
// import Interior14 from "../assets/interior14.jpg";
// import Interior15 from "../assets/interior15.jpg";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import api from "../api";

function Services() {
const [services, setServices] = useState([]);




useEffect(() => {
  api
    .get("/services")
    .then((res) => {
      setServices(res.data);
    })
    .catch((err) => console.log(err));
}, []);
   const navigate = useNavigate();

//    const services = [
//   {
//     id: "residential",
//     title: "Residential Design",
//     desc: "Custom living rooms, bedrooms, dining spaces and complete home interiors designed with luxury, comfort and functionality.",
//     icon: "🏠",
//     image: Interior10,
//     features: [
//       "Luxury Living Rooms",
//       "Custom Furniture",
//       "Space Planning",
//       "Premium Materials",
//     ],
//   },
//   {
//     id: "commercial",
//     title: "Commercial Design",
//     desc: "Modern offices, retail stores, restaurants and corporate spaces designed to enhance productivity and brand identity.",
//     icon: "🏢",
//     image: Interior11,
//     features: [
//       "Office Interiors",
//       "Retail Spaces",
//       "Corporate Design",
//       "Workspace Planning",
//     ],
//   },
//   {
//     id: "kitchen",
//     title: "Kitchen Design",
//     desc: "Custom modular kitchens with intelligent storage and elegant layouts.",
//     icon: "🍽️",
//     image: Interior12,
//     features: [
//       "Modular Kitchen",
//       "Smart Storage",
//       "Premium Finishes",
//       "Modern Layout",
//     ],
//   },
//   {
//     id: "bathroom",
//     title: "Bathroom Design",
//     desc: "Luxury bathrooms featuring premium fixtures and spa-inspired comfort.",
//     icon: "🚿",
//     image: Interior13,
//     features: [
//       "Luxury Fixtures",
//       "Modern Design",
//       "Elegant Lighting",
//       "Space Optimization",
//     ],
//   },
//   {
//     id: "turnkey",
//     title: "Turnkey Projects",
//     desc: "Complete end-to-end execution from concept to final delivery.",
//     icon: "🛠️",
//     image: Interior14,
//     features: [
//       "Design Planning",
//       "Material Procurement",
//       "Execution",
//       "Final Handover",
//     ],
//   },
//   {
//     id: "visualization",
//     title: "3D Visualization",
//     desc: "Realistic 3D renders to visualize your dream space before execution.",
//     icon: "🎨",
//     image: Interior15,
//     features: [
//       "3D Renders",
//       "Walkthrough Views",
//       "Material Preview",
//       "Client Presentation",
//     ],
//   },
// ];
  return (
    <>
      <Navbar />
{/* 
      <h1 className="text-5xl text-red-500">
  {services.length}
</h1> */}

<section className="relative min-h-screen md:h-[85vh] flex items-center justify-center overflow-hidden bg-orange-50">

  {/* Background Image with Clean Luxury Dark Overlay */}
  <div className="absolute inset-0 z-0">
    <img
      src={Interior10}
      alt="Luxury Interior Services"
      className="w-full h-full object-cover object-center"
    />
    {/* Subtle backdrop darken - exactly like homepage hero to pop white text */}
    <div className="absolute inset-0 bg-black/50 z-0"></div>
  </div>

  {/* Content Container */}
  <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

    {/* Section Top Tag matching "WHAT WE OFFER" on homepage */}
    <p className="text-amber-400 uppercase tracking-[4px] text-xs md:text-sm mb-6 font-semibold">
      What We Offer
    </p>

    {/* Luxury Box-less Serif Heading with Amber word highlight */}
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight drop-shadow-md">
      Exceptional <span className="text-amber-400 block sm:inline">Interior Services</span>
    </h1>

    {/* Soft Text Description */}
    <p className="mt-6 text-sm md:text-xl text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
      From residential interiors to commercial environments,
      we deliver elegant spaces crafted with creativity,
      functionality and timeless luxury.
    </p>

    {/* Action Buttons Aligned with Homepage Branding */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">

      {/* Primary Action Button - Inspired by "Get Started" white capsule style */}
     <button
  onClick={() =>
    document
      .getElementById("services-section")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="w-full sm:w-auto bg-white text-stone-900 px-8 py-3.5 rounded-full font-medium hover:bg-orange-50 transition duration-300 shadow-md text-sm tracking-wide"
>
  Explore Services
</button>

      {/* Secondary Action Button - Inspired by Navbar "Free Consultation" yellow/gold theme */}
     <button
  onClick={() => navigate("/contact")}
  className="w-full sm:w-auto bg-amber-500 text-stone-950 px-8 py-3.5 rounded-full font-medium hover:bg-amber-400 transition duration-300 shadow-md text-sm tracking-wide"
>
  Book Consultation →
</button>

    </div>

  </div>

</section>

<section
  id="services-section"
  className="py-20 md:py-32 bg-orange-50 text-stone-900"
>
  <div className="max-w-7xl mx-auto px-6">

    {/* Section Header */}
    <div className="text-center mb-24">
      <p className="text-amber-600 uppercase tracking-[4px] text-xs md:text-sm mb-4 font-semibold">
        Our Services
      </p>

      {/* Title matching your homepage headline format */}
      <h2 className="text-4xl md:text-6xl font-serif text-stone-900 leading-tight">
        Crafted Interior <span className="text-amber-600">Solutions</span>
      </h2>

      <p className="text-stone-600 mt-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
        Creating exceptional spaces through innovative design,
        premium craftsmanship and timeless elegance.
      </p>
    </div>

    {/* Services Alternate List */}
    <div className="space-y-24 md:space-y-36">

      {services.map((item, index) => (
        <div
          id={item.id}
          key={index}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center"
        >

          {/* Image Block - Swaps left/right on desktop screens */}
          <div
            className={`overflow-hidden rounded-[32px] shadow-sm max-w-xl mx-auto lg:w-full ${
              index % 2 !== 0 ? "lg:order-2" : ""
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[300px] sm:h-[420px] md:h-[480px] object-cover hover:scale-105 transition duration-700"
            />
          </div>

          {/* Text Content Block */}
          <div
            className={`space-y-6 ${
              index % 2 !== 0 ? "lg:order-1" : ""
            }`}
          >

            {/* Elegant Giant Numbering Watermark */}
            {/* <span className="text-6xl md:text-8xl font-serif font-bold text-amber-600/10 block -mb-4">
              0{index + 1}
            </span> */}

            {/* Icon + Title Grid */}
            <div className="flex items-center gap-4">
              {item.icon && <span className="text-2xl md:text-3xl text-amber-600">{item.icon}</span>}

              <h3 className="text-2xl md:text-4xl font-serif text-stone-900">
                {item.title}
              </h3>
            </div>

            {/* Service Long Description */}
            <p className="text-stone-600 leading-relaxed text-sm md:text-base">
              {item.desc}
            </p>

            {/* Features Bullet Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {item.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-stone-700 text-sm font-medium"
                >
                  {/* Styled Checkmark */}
                  <span className="text-amber-600 text-base">✓</span>
                  {feature}
                </div>
              ))}
            </div>

            {/* Premium Minimal Text Button - Replacing loud golden rounded pills */}
            <div className="pt-4">
              <button className="text-stone-900 font-medium text-sm tracking-wider uppercase border-b-2 border-stone-900 pb-1 hover:text-amber-600 hover:border-amber-600 transition duration-300">
                Learn More →
              </button>
            </div>

          </div>

        </div>
      ))}

    </div>

  </div>
</section>

<section className="bg-orange-50/70 border-y border-orange-100/60 text-stone-900">

  {/* STATS SECTION */}
  <div className="py-16">
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 text-center">

      <div className="space-y-2">
        <h3 className="text-4xl md:text-5xl font-serif font-bold text-amber-600 tracking-tight">
          150+
        </h3>
        <p className="text-stone-600 text-xs md:text-sm uppercase tracking-wider font-medium">
          Projects Completed
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="text-4xl md:text-5xl font-serif font-bold text-amber-600 tracking-tight">
          10+
        </h3>
        <p className="text-stone-600 text-xs md:text-sm uppercase tracking-wider font-medium">
          Years Experience
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="text-4xl md:text-5xl font-serif font-bold text-amber-600 tracking-tight">
          98%
        </h3>
        <p className="text-stone-600 text-xs md:text-sm uppercase tracking-wider font-medium">
          Client Satisfaction
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="text-4xl md:text-5xl font-serif font-bold text-amber-600 tracking-tight">
          50+
        </h3>
        <p className="text-stone-600 text-xs md:text-sm uppercase tracking-wider font-medium">
          Luxury Spaces
        </p>
      </div>

    </div>
  </div>

  {/* CTA SECTION */}
 <section className="relative py-12 md:py-14 bg-stone-950 overflow-hidden">

  {/* Glow */}
  <div className="absolute top-0 right-0 w-60 h-60 bg-amber-500/10 blur-[100px] rounded-full"></div>
  <div className="absolute bottom-0 left-0 w-60 h-60 bg-orange-400/10 blur-[100px] rounded-full"></div>

  <div className="max-w-4xl mx-auto px-6 relative z-10">

    <div className="text-center space-y-3">

      {/* Tagline */}
      <p className="text-amber-400 uppercase tracking-[4px] text-[10px] md:text-xs font-medium">
        Let's Discuss Your Project
      </p>

      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-serif text-white leading-snug">
        Get a Custom
        <span className="block text-amber-400">
          Design Proposal
        </span>
      </h2>

      {/* Description */}
      <p className="text-stone-300 max-w-lg mx-auto leading-relaxed text-sm">
        Luxury interiors tailored for your home, office, kitchen or turnkey projects —
        designed with elegance and precision.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">

        <button
          onClick={() => navigate("/contact")}
          className="bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-1"
        >
          Schedule Consultation →
        </button>

        <button
          onClick={() => navigate("/portfolio")}
          className="border border-white/20 text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-white hover:text-black transition-all duration-300"
        >
          View Projects
        </button>

      </div>

    </div>

  </div>

</section>
</section>

<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>

      <Footer />
    </>
  );
}

export default Services;






      {/* <ServicesHero />
      <ServicesGrid /> */}


      // import ServicesHero from "../components/ServicesHero";
// import ServicesGrid from "../components/ServicesGrid";