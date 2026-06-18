import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Interior1 from "../assets/interior1.jpg"
import Interior2 from "../assets/interior2.jpg"
import Interior4 from "../assets/interior4.jpg"
import Interior5 from "../assets/interior5.jpg"
import Interior6 from "../assets/interior6.jpg"
import Interior7 from "../assets/interior7.jpg"
import Interior8 from "../assets/interior8.jpg"
import Interior9 from "../assets/interior9.jpg"
import { useNavigate } from "react-router-dom";


import { useState, useEffect } from "react";


function Home() {
  const navigate = useNavigate();

  const images = [Interior1, Interior2, Interior4];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  const philosophyImages = [Interior4, Interior5, Interior6];

const [currentPhilosophyImage, setCurrentPhilosophyImage] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentPhilosophyImage(
      (prev) => (prev + 1) % philosophyImages.length
    );
  }, 3000);

  return () => clearInterval(interval);
}, []);


  const services = [
    
    {
      title: "Residential Design",
      desc: "Custom Home Interiors",
      icon: "🏠",
    },
    {
      title: "Commercial Design",
      desc: "Office & Retail Spaces",
      icon: "🏢",
    },
    {
      title: "Lighting Design",
      desc: "Ambient Solutions",
      icon: "💡",
    },
    {
      title: "Furniture Selection",
      desc: "Curated Collections",
      icon: "🛋️",
    },
  ];

const projects = [
  {
    title: "Living Room",
    subtitle: "Modern Elegance",
    image: Interior7,
  },
  {
    title: "Kitchen",
    subtitle: "Minimal & Functional",
    image: Interior8,
  },
  {
    title: "Bedroom",
    subtitle: "Comfort & Style",
    image: Interior9,
  },
];

  return (
    <div className="bg-black text-white overflow-hidden">
      <Navbar />

      {/* HERO */}
<section
  className="relative h-screen overflow-hidden bg-cover bg-center transition-all duration-1000"
  style={{
    backgroundImage: `url(${images[currentImage]})`,
  }}
>
  {/* Brown Luxury Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#2b1d14]/70 via-[#3a2618]/40 to-[#000000]/20"></div>

  {/* Content */}
  <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">

   <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-5xl leading-tight">
      Build your dream home
    </h1>

   <p className="mt-5 text-white/90 text-base sm:text-lg md:text-2xl max-w-2xl">
      Discover and create your perfect living space with us.
    </p>

<button
  onClick={() => navigate("/contact")}
  className="mt-8 md:mt-10 bg-white text-black px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-2xl hover:bg-amber-500 transition duration-300"
>
  Get Started →
</button>
  </div>

  {/* Bottom Glass Bar */}
  <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-5xl">
    <div
      className="
      bg-white/10
      backdrop-blur-xl
      border
      border-white/20
      rounded-3xl
      px-8
      py-6"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-white text-center">
        <div>
          <p className="text-xl">★★★★★</p>
          <h3 className="text-2xl md:text-4xl font-semibold">4.8</h3>
        </div>

        <div>
          <h3 className="text-2xl md:text-4xl font-semibold">Stylish</h3>
          <p className="text-white/70">Interiors</p>
        </div>

        <div>
          <h3 className="text-2xl md:text-4xl font-bold">250k</h3>
          <p className="text-white/70">Customers served</p>
        </div>

        <div>
          <h3 className="text-2xl md:text-4xl font-bold">20%</h3>
          <p className="text-white/70">Save More</p>
        </div>

      </div>
    </div>
  </div>
</section>


{/* #0F1A17 */}
{/* bg-[#050505] */}

{/* DESIGN PHILOSOPHY */}
<section className="py-20 md:py-32 bg-orange-50 relative overflow-hidden">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_0%,transparent_70%)] opacity-10"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">

    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center -mt-4">

      {/* Left Content */}
      <div>
        <p className="text-amber-800 uppercase tracking-[4px] text-sm mb-4">
          Our Philosophy
        </p>
<h2 className="text-4xl sm:text-5xl md:text-6xl font-serif leading-tight text-stone-900">
  Designing Spaces That
  <span className="block text-amber-700">
    Inspire Living
  </span>
</h2>

        <p className="text-stone-600 mt-8 leading-relaxed text-lg">
          We believe every interior should tell a story. Our approach combines
          timeless elegance, functionality and personalized design to create
          spaces that truly reflect your lifestyle.
        </p>

     <div className="mt-10 border-l-2 border-[#D4AF37] pl-6">
  <p className="italic text-2xl text-stone-700 leading-relaxed">
    “Luxury is not about excess. It is about thoughtful design,
    comfort and timeless beauty.”
  </p>
</div>
      </div>

      {/* Right Image */}
      {/* Right Image */}
<div className="relative">

  {/* IMAGE SLIDER */}
  <div className="relative h-[350px] sm:h-[450px] md:h-[600px] w-full overflow-hidden rounded-3xl">
    {philosophyImages.map((img, index) => (
      <img
        key={index}
        src={img}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1000ms]
        ${currentPhilosophyImage === index ? "opacity-100 scale-105" : "opacity-0 scale-100"}`}
      />
    ))}

    {/* 🔥 DOTS HERE */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
      {philosophyImages.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPhilosophyImage(index)}
          className={`w-2 h-2 rounded-full transition-all ${
            currentPhilosophyImage === index
              ? "bg-[#D4AF37] scale-125"
              : "bg-white/40"
          }`}
        />
      ))}
    </div>

  </div>

  {/* EXPERIENCE CARD */}
  <div className="absolute bottom-4 left-4 md:-bottom-8 md:-left-8 bg-[#111] border border-[#D4AF37]/30 p-8 rounded-2xl">
    <h3 className="text-4xl font-bold text-[#D4AF37]">15+</h3>
    <p className="text-gray-400">Years Experience</p>
  </div>

</div>
</div>
</div>
</section>


{/* bg-[#070707] */}

      {/* SERVICES */}
     <section className="py-28 bg-orange-50 relative -mt-18">

  {/* subtle background glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#D4AF37_0%,transparent_60%)] opacity-10"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10 -mt-16">

    {/* Heading */}
    <div className="text-center mb-20">
      <div className="text-center mb-20">
  <p className="text-amber-800 uppercase tracking-[4px] text-sm mb-4">
    What We Offer
  </p>

  <h2 className="text-5xl md:text-6xl font-serif text-stone-900">
    Luxury Design
    <span className="block text-amber-600">
      Services
    </span>
  </h2>
</div>

      <p className="text-stone-600 -mt-8 max-w-xl mx-auto ">
        Luxury interior solutions crafted with precision, elegance and timeless design.
      </p>
    </div>

    {/* Cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

      {services.map((service, index) => (
        <div
          key={index}
          className="group relative p-[1px] rounded-3xl bg-gradient-to-b from-[#D4AF37]/40 to-transparent"
        >

          <div className="bg-[#0f0f0f]/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 text-center h-full
                          transition-all duration-300 group-hover:scale-[1.03] group-hover:bg-[#141414]">

            {/* icon circle */}
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full
                            bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-3xl mb-6">
              {service.icon}
            </div>

            {/* title */}
            <h3 className="text-xl font-semibold text-white mb-2">
              {service.title}
            </h3>

            {/* description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {service.desc}
            </p>

            {/* hover line */}
            <div className="mt-6 w-0 group-hover:w-full transition-all duration-300 h-[1px] bg-[#D4AF37] mx-auto"></div>

          </div>
        </div>
      ))}

    </div>

  </div>
</section>
      {/* PROJECTS */}
     <section className="py-28 bg-neutral-50 relative -mt-12">

  {/* subtle glow background */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_0%,transparent_60%)] opacity-10"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10 -mt-18">

    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="text-5xl md:text-6xl font-serif text-stone-900">
        Featured Projects
      </h2>

      <p className="text-stone-600 mt-4 max-w-xl mx-auto">
        A glimpse into our handcrafted luxury interior spaces designed with elegance and precision.
      </p>
    </div>

    {/* Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
      {projects.map((project, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-3xl cursor-pointer"
        >

          {/* Image */}
          <img
            src={project.image}
            alt=""
            className="w-full h-[350px] md:h-[480px] object-cover transition duration-700 group-hover:scale-110"
          />

          {/* dark luxury overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>


          <div className="absolute top-4 right-4 bg-stone-900/80 backdrop-blur-sm text-amber-400 text-xs px-3 py-1 rounded-full font-medium tracking-wider">
  Premium
</div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
  <button className="bg-amber-500 hover:bg-amber-600 text-stone-900 font-medium px-5 py-2 rounded-full transition shadow-lg">
    View Project
  </button>
</div>

          {/* golden blur glow on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_bottom,#D4AF37/20,transparent_60%)]"></div>

          {/* content */}
          <div className="absolute bottom-8 left-8 right-8">

            <p className="text-[#D4AF37] text-sm tracking-widest uppercase">
              Project
            </p>

            <h3 className="text-2xl md:text-3xl font-serif text-white mt-1">
              {project.title}
            </h3>

            <p className="text-stone-300 mt-1 text-sm">
              {project.subtitle}
            </p>

            {/* hover line animation */}
            <div className="w-0 group-hover:w-24 transition-all duration-500 h-[2px] bg-amber-500 mt-4"></div>

          </div>

        </div>
      ))}

    </div>
  </div>
</section>


      {/* STATS */}
      {/* bg-[#050505] */}
      {/* STATS + CTA SECTION */}
<section className="relative py-32 bg-gradient-to-b from-orange-50 via-white bg-neutral-50 overflow-hidden -mt-24">

{/* Decorative Elements */}

  <div className="absolute top-0 left-0 w-96 h-96 bbg-neutral-50 blur-[140px] rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-neutral-50 blur-[140px] rounded-full"></div>

  <div className="max-w-7xl mx-auto px-6">

```
{/* Stats Row */}
<div className="grid md:grid-cols-3 gap-8 mb-32">

  <div className="group bg-white text-stone-600 rounded-[40px] p-10 border border-orange-100 shadow-sm hover:-translate-y-2 hover:bg-black hover:text-white transition duration-600 -mt-24">
    <span className="text-stone-400 uppercase tracking-[3px] text-xs">
      Projects Delivered
    </span>

    <h3 className="text-7xl font-serif text-amber-600 mt-4">
      200+
    </h3>

    <div className="w-12 h-[2px] bg-amber-500 mt-5"></div>

    <p className="mt-5 leading-relaxed">
      Luxury residences and commercial spaces completed with exceptional craftsmanship.
    </p>
  </div>

 <div className="group bg-white text-stone-600  rounded-[40px] p-10 border border-orange-100 shadow-sm hover:-translate-y-2 hover:bg-black hover:text-white transition duration-600 -mt-24">    
    <span className="uppercase tracking-[3px] text-xs text-stone-400">
      Experience
    </span>

    <h3 className="text-7xl font-serif text-amber-600 mt-4">
      15+
    </h3>

    <div className="w-12 h-[2px] bg-amber-400 mt-5"></div>

    <p className="mt-5  leading-relaxed">
      Years designing timeless interiors that blend elegance with functionality.
    </p>
  </div>

  <div className="group bg-white text-stone-600 rounded-[40px] p-10 border border-orange-100 shadow-sm hover:-translate-y-2 hover:bg-black hover:text-white transition duration-600 -mt-24">
    <span className="text-stone-400 uppercase tracking-[3px] text-xs">
      Client Happiness
    </span>

    <h3 className="text-7xl font-serif text-amber-600 mt-4">
      98%
    </h3>

    <div className="w-12 h-[2px] bg-amber-500 mt-5"></div>

    <p className="mt-5  leading-relaxed">
      A reputation built on trust, quality execution and client satisfaction.
    </p>
  </div>

</div>

{/* Luxury CTA */}
<div className="relative overflow-hidden rounded-[50px] bg-stone-950 p-12 md:p-20 -mt-18">

  <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full"></div>

  <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">

    <div>
      <p className="text-amber-400 uppercase tracking-[4px] text-sm mb-6">
        Let's Create Something Extraordinary
      </p>

      <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">
        Your Dream
        <span className="block text-amber-400">
          Interior Awaits
        </span>
      </h2>
    </div>

    <div className="lg:text-right">
      <p className="text-stone-300 text-lg leading-relaxed max-w-lg lg:ml-auto">
        Every space has a story. We transform your vision into a luxurious and timeless environment tailored to your lifestyle.
      </p>

    <button
  onClick={() => navigate("/contact")}
  className="mt-8 bg-amber-500 hover:bg-amber-400 text-black px-10 py-4 rounded-full font-semibold transition"
>
  Schedule Consultation →
</button>
    </div>

  </div>

</div>
```

  </div>
</section>



      {/* FOOTER */}

        
      <Footer />

    </div>
  );
}

export default Home;






















{/* WHY CHOOSE US */}
{/* <section className="py-28 bg-black">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-20">
      <h2 className="text-5xl font-serif text-white">
        Why Choose Us
      </h2>

      <p className="text-gray-400 mt-4">
        Excellence in every detail.
      </p>
    </div>

    <div className="grid md:grid-cols-4 gap-8">
  {[
    {
      title: "Custom Designs",
      icon: "✨",
      desc: "Tailored interiors crafted around your lifestyle."
    },
    {
      title: "Premium Materials",
      icon: "🏆",
      desc: "Only the finest materials and finishes."
    },
    {
      title: "Expert Team",
      icon: "👨‍🎨",
      desc: "Experienced designers with luxury expertise."
    },
    {
      title: "Timely Delivery",
      icon: "⏱️",
      desc: "Projects completed on time without compromise."
    }
  ].map((item, index) => (
    <div
      key={index}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:border-[#D4AF37]/40 transition-all duration-300 hover:-translate-y-2"
    >
      <div className="text-5xl mb-4">
        {item.icon}
      </div>

      <h3 className="text-xl font-semibold mb-3">
        {item.title}
      </h3>

      <p className="text-gray-400 text-sm">
        {item.desc}
      </p>
    </div>
  ))}
</div>
</div>
</section> */}


