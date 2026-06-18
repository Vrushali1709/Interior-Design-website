// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import PortfolioHero from "../components/PortfolioHero";
// import ProjectGallery from "../components/ProjectGallery";

// function Portfolio() {
//   return (
//     <>
//       <Navbar />
//       <PortfolioHero />
//       <ProjectGallery />  
//       <Footer />
//     </>
//   );
// }

// export default Portfolio;


import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Panthhouse from "../assets/panthhouse.jpg"
import Footer from "../components/Footer";
// import Interior1 from "../assets/interior1.jpg";
import Interior2 from "../assets/interior2.jpg";
// import Interior3 from "../assets/interior3.jpg";
// import Interior4 from "../assets/interior4.jpg";
// import Interior5 from "../assets/interior5.jpg";
// import Interior6 from "../assets/interior6.jpg";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projectsData";

function Portfolio() {

  const navigate = useNavigate();

//   const projects = [
//   {
//      id: 1,
//     title: "Luxury Living Room",
//     type: "Residential",
//     area: "2,500 sq.ft",
//     budget: "Premium",
//     before: Interior1,
//     after: Interior2,
//     desc: "A sophisticated residential transformation featuring elegant furnishings, ambient lighting and timeless aesthetics.",
//   },
//   {
//         id: 2,
//     title: "Modern Office Space",
//     type: "Commercial",
//     area: "4,000 sq.ft",
//     budget: "Luxury",
//     before: Interior3,
//     after: Interior4,
//     desc: "A productive and inspiring workplace designed with modern layouts and premium finishes.",
//   },
//   {
//       id: 3,
//     title: "Modular Kitchen",
//     type: "Kitchen",
//     area: "350 sq.ft",
//     budget: "Standard",
//     before: Interior5,
//     after: Interior6,
//     desc: "Smart storage solutions combined with contemporary materials and functional elegance.",
//   },
// ];
const [selectedCategory, setSelectedCategory] = useState("All");

  // Yahan logic add ki hai jo category ke hisaab se filter karega
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.type === selectedCategory);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
    <section className="relative min-h-screen lg:h-[90vh] flex items-center justify-center bg-orange-50 overflow-hidden text-stone-900">

  {/* Background Image Layer with Luxury Overlay */}
  <div className="absolute inset-0 z-0">
    <img
      src={Interior2}
      alt="Portfolio Hero"
      className="w-full h-full object-cover object-center"
    />
    {/* Subtle darken overlay matching your homepage image blend */}
    <div className="absolute inset-0 bg-black/50 z-0"></div>
  </div>

  {/* Main Content Area Container */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 lg:py-0 w-full">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

      {/* Left Content Side */}
      <div className="text-center lg:text-left">

        {/* Clean Top Tag - No flashy border box, matching homepage */}
        <span className="text-amber-400 text-xs md:text-sm tracking-[4px] uppercase font-semibold block mb-4">
          Our Portfolio
        </span>

        {/* Big Premium Serif Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white leading-none drop-shadow-md">
          Design <span className="block text-amber-400 mt-2">Stories</span>
        </h1>

        {/* Subtitle Description */}
        <p className="mt-6 md:mt-8 text-stone-200 text-sm md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed drop-shadow-sm">
          A curated collection of luxury residential, commercial, and bespoke interior projects 
          showcasing our passion for timeless design and exceptional craftsmanship.
        </p>

        {/* Action Buttons styled like Homepage Core Elements */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-10">
          
          {/* Primary View Projects - Matches Amber Gold Tone */}
        <button
  onClick={() =>
    document
      .getElementById("projects-section")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="w-full sm:w-auto bg-amber-500 text-stone-950 px-8 py-3.5 rounded-full font-medium hover:bg-amber-400 transition duration-300 shadow-md text-sm tracking-wide"
>
  View Projects
</button>

          {/* Secondary Explore Gallery - Matches Minimalist Glass Border */}
       <button
  onClick={() =>
    document
      .getElementById("projects-section")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="w-full sm:w-auto border border-white/40 text-white px-8 py-3.5 rounded-full backdrop-blur-sm hover:bg-white hover:text-stone-900 transition duration-300 text-sm tracking-wide"
>
  Explore Gallery
</button>

        </div>

      </div>

      {/* Right Showcase Component with Floating Card */}
      <div className="relative max-w-xl mx-auto lg:w-full lg:max-w-none pt-6 lg:pt-0">

        {/* Image Frame with Premium 32px Border Radius */}
        <div className="rounded-[32px] overflow-hidden shadow-xl border border-white/10">
          <img
            src={Panthhouse}
            alt="Featured Project"
            className="h-[320px] md:h-[480px] w-full object-cover object-center"
          />
        </div>

        {/* Floating Card - Upgraded to Premium Light Semi-Transparent Glass style to pop up nicely */}
        <div className="absolute -bottom-6 left-6 md:-bottom-8 md:-left-8 bg-white/95 border border-orange-100/80 backdrop-blur-md p-6 rounded-3xl shadow-xl max-w-[280px] md:max-w-[320px]">
          
          <p className="text-amber-600 text-xs uppercase tracking-[3px] font-semibold">
            Featured Project
          </p>

          <h3 className="text-xl md:text-2xl font-serif text-stone-900 mt-1.5">
            Luxury Penthouse
          </h3>

          {/* Minimal Clean Divider Specs Instead of Emojis */}
          <div className="flex items-center gap-4 mt-4 text-xs font-medium text-stone-500 tracking-wide border-t border-stone-100 pt-3">
            <span className="flex items-center gap-1">
              3500 SQ.FT
            </span>
            <span className="text-stone-300">•</span>
            <span className="flex items-center gap-1 text-amber-600 font-semibold uppercase">
              Premium Build
            </span>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>
      {/* Project Types */}
   {/* Section: Project Categories */}
<section className="py-12 md:py-16 bg-orange-50 text-stone-900 border-t border-orange-100/30">
  <div className="max-w-6xl mx-auto px-6">
    
    {/* Section Header */}
    <div className="text-center mb-10">
      <p className="text-amber-600 uppercase tracking-[4px] text-xs md:text-sm font-semibold">
        Browse By Category
      </p>
      <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mt-3">
        Project <span className="text-amber-600">Categories</span>
      </h2>
    </div>

    {/* Elegant Filter Pills Container */}
    <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 max-w-4xl mx-auto">
      {["All", "Residential", "Commercial", "Kitchen", "Bathroom", "Turnkey"].map((item) => (
        <button
          key={item}
         onClick={() => {
  setSelectedCategory(item);

  setTimeout(() => {
    document
      .getElementById("projects-section")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }, 100);
}} // Ye state update karega
          className={`px-6 md:px-8 py-2.5 rounded-full text-xs md:text-sm tracking-wide font-medium transition-all duration-300 shadow-sm ${
            selectedCategory === item
              ? "bg-stone-900 text-white shadow-md border border-stone-900" // Active state
              : "bg-white border border-stone-200 text-stone-600 hover:border-amber-600 hover:text-amber-600" // Normal state
          }`}
        >
          {item}
        </button>
      ))}
    </div>

  </div>
</section>
      {/* Projects */}
   <section
  id="projects-section"
  className="py-20 md:py-32 bg-orange-50 text-stone-900 border-t border-orange-100/30"
>
  <div className="max-w-7xl mx-auto px-6">

    {/* Section Title Header */}
    <div className="text-center mb-20 -mt-11">
      <p className="text-amber-600 uppercase tracking-[4px] text-xs md:text-sm font-semibold">
        Project Gallery
      </p>

      <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mt-3">
        Before & After <span className="text-amber-600">Transformations</span>
      </h2>

      <p className="text-stone-600 mt-5 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
        Explore our curated portfolio showcasing luxury residential and commercial interiors.
      </p>
    </div>

    {/* Elegant Transformations Card List */}
    <div className="space-y-20 md:space-y-28 -mt-11">
      {filteredProjects.map((project, index) => (

        <div
          key={index}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center rounded-[32px] overflow-hidden bg-white/60 border border-orange-100/70 p-4 md:p-6 shadow-sm backdrop-blur-sm"
        >

          {/* Left Block: Side-by-Side Images Grid */}
          <div className="grid grid-cols-2 gap-4">

            {/* Before Image Box */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm group ">
              <img
                src={project.before}
                alt={`${project.title} Before`}
                className="h-[280px] sm:h-[380px] w-full object-cover group-hover:scale-105 transition duration-700"
              />
              <span className="absolute top-4 left-4 bg-stone-950/80 backdrop-blur-sm text-white px-3.5 py-1 rounded-full text-[10px] tracking-widest font-semibold uppercase">
                Before
              </span>
            </div>

            {/* After Image Box */}
            <div className="relative rounded-2xl overflow-hidden shadow-md group">
              <img
                src={project.after}
                alt={`${project.title} After`}
                className="h-[280px] sm:h-[380px] w-full object-cover group-hover:scale-105 transition duration-700"
              />
              <span className="absolute top-4 left-4 bg-amber-500 text-stone-950 px-3.5 py-1 rounded-full text-[10px] tracking-widest font-bold uppercase shadow-sm">
                After
              </span>
            </div>

          </div>

          {/* Right Block: Content Info */}
          <div className="p-4 sm:p-6 lg:p-8 space-y-5">

            <span className="text-amber-600 uppercase tracking-[3px] text-xs font-semibold block">
              {project.type}
            </span>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-stone-900 tracking-wide">
              {project.title}
            </h3>

            <p className="text-stone-600 leading-relaxed text-sm md:text-base">
              {project.desc}
            </p>

            {/* Premium Light Technical Inner Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">

              <div className="bg-orange-50/50 border border-orange-100/40 rounded-2xl p-4">
                <p className="text-stone-400 text-xs uppercase tracking-wider font-semibold">Area</p>
                <h4 className="text-lg md:text-xl font-serif text-stone-800 mt-1">{project.area}</h4>
              </div>

              <div className="bg-orange-50/50 border border-orange-100/40 rounded-2xl p-4">
                <p className="text-stone-400 text-xs uppercase tracking-wider font-semibold">Budget Tier</p>
                <h4 className="text-lg md:text-xl font-serif text-amber-600 font-bold mt-1">
                  {project.budget}
                </h4>
              </div>

            </div>

            {/* Signature Underline Action Link instead of Golden Rounded Pill */}
            <div className="pt-4">
     <button
  onClick={() => navigate(`/project/${project.id}`)}
  className="text-stone-900 font-medium text-sm tracking-wider uppercase border-b-2 border-stone-900 pb-1 hover:text-amber-600 hover:border-amber-600 transition duration-300"
>
  View Project Details →
</button>
            </div>

          </div>

        </div>

      ))}
    </div>

  </div>
</section>


<section className="relative py-14 bg-white overflow-hidden -mt-14">

  {/* Soft background glow */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200/20 blur-[100px] rounded-full"></div>
  <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-200/20 blur-[100px] rounded-full"></div>

  <div className="max-w-3xl mx-auto px-6 relative z-10">

    {/* Rounded Card */}
    <div className="bg-black border border-orange-100 rounded-[28px] p-8 md:p-10 text-center shadow-md">

      {/* Tagline */}
      <p className="text-amber-600 uppercase tracking-[4px] text-[10px] md:text-xs font-semibold">
        Inspired by Our Work?
      </p>

      {/* Heading */}
      <h2 className="mt-3 text-2xl md:text-4xl font-serif text-white leading-snug">
        Let’s Create Something
        <span className="block text-amber-600">
          Similar for You
        </span>
      </h2>

      {/* Description */}
      <p className="mt-4 text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
        We design elegant, functional and timeless interiors tailored to your lifestyle.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">

        <button
          onClick={() => navigate("/contact")}
          className="bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-1"
        >
          Start Project
        </button>

        <button
          onClick={() => navigate("/services")}
          className="border border-stone-300 text-stone-700 px-6 py-3 rounded-full font-medium text-sm hover:bg-stone-900 hover:text-white transition-all duration-300"
        >
          Explore Services
        </button>

      </div>

    </div>

  </div>

</section>
      <Footer />
    </>
  );
}

export default Portfolio; 