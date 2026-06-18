// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import TeamHero from "../components/TeamHero";
// import TeamMembers from "../components/TeamMembers";

// function Team() {
//   return (
//     <>
//       <Navbar />
//       <TeamHero />
//       <TeamMembers />
//       <Footer />
//     </>
//   );
// }

// export default Team;













// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// function Team() {
//   const team = [
//     {
//       name: "Aarav Mehta",
//       role: "Lead Interior Designer",
//       spec: "Luxury Residential Interiors",
//       exp: "10+ Years Experience",
//     },
//     {
//       name: "Neha Sharma",
//       role: "Senior Architect",
//       spec: "Modern Commercial Spaces",
//       exp: "8+ Years Experience",
//     },
//     {
//       name: "Rohan Patel",
//       role: "Project Manager",
//       spec: "Turnkey Execution Expert",
//       exp: "7+ Years Experience",
//     },
//     {
//       name: "Priya Desai",
//       role: "Interior Stylist",
//       spec: "Home Styling & Decor",
//       exp: "6+ Years Experience",
//     },
//     {
//       name: "Karan Shah",
//       role: "3D Visualizer",
//       spec: "Photorealistic Rendering",
//       exp: "5+ Years Experience",
//     },
//     {
//       name: "Ishita Joshi",
//       role: "Site Supervisor",
//       spec: "On-site Execution",
//       exp: "9+ Years Experience",
//     },
//   ];

//   return (
//     <>
//       <Navbar />

//       {/* HERO */}
//       <section className="relative h-[65vh] flex items-center justify-center bg-[#050505] text-white overflow-hidden">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_0%,transparent_60%)] opacity-10"></div>

//         <div className="text-center relative z-10 px-6">
//           <p className="text-[#D4AF37] uppercase tracking-[5px] text-sm mb-4">
//             Our Creative Minds
//           </p>

//           <h1 className="text-5xl md:text-7xl font-serif">
//             Meet Our Designers
//           </h1>

//           <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
//             A team of passionate designers, architects and creators who bring luxury interiors to life.
//           </p>
//         </div>
//       </section>

//       {/* TEAM GRID */}
//       <section className="py-32 bg-[#050505] text-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#D4AF37_0%,transparent_60%)] opacity-10"></div>

//         <div className="max-w-7xl mx-auto px-6 relative z-10">
          
//           <div className="grid md:grid-cols-3 gap-10">

//             {team.map((member, index) => (
//               <div
//                 key={index}
//                 className="group relative p-[1px] rounded-3xl bg-gradient-to-b from-[#D4AF37]/30 to-transparent"
//               >
//                 <div className="bg-[#0f0f0f] rounded-3xl p-8 text-center hover:scale-[1.03] transition duration-300">

//                   {/* avatar */}
//                   <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-[#D4AF37] to-yellow-200 mb-6"></div>

//                   <h3 className="text-xl font-semibold">
//                     {member.name}
//                   </h3>

//                   <p className="text-[#D4AF37] text-sm mt-1">
//                     {member.role}
//                   </p>

//                   <p className="text-gray-400 text-sm mt-3">
//                     {member.spec}
//                   </p>

//                   <p className="text-gray-500 text-xs mt-2">
//                     {member.exp}
//                   </p>

//                   {/* fake project links */}
//                   <div className="mt-6 flex flex-col gap-2 text-sm">
//                     <span className="text-gray-400 hover:text-[#D4AF37] cursor-pointer">
//                       View Projects →
//                     </span>
//                     <span className="text-gray-400 hover:text-[#D4AF37] cursor-pointer">
//                       Design Portfolio →
//                     </span>
//                   </div>

//                   {/* hover line */}
//                   <div className="mt-6 w-0 group-hover:w-full h-[1px] bg-[#D4AF37] transition-all duration-300"></div>

//                 </div>
//               </div>
//             ))}

//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

// export default Team;  

















// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// function Team() {
//   const team = [
//     {
//       name: "Aarav Mehta",
//       role: "Principal Designer",
//       spec: "Luxury Residential Interiors",
//       exp: "10+ Years Experience",
//     },
//     {
//       name: "Neha Sharma",
//       role: "Senior Architect",
//       spec: "Modern Commercial Spaces",
//       exp: "8+ Years Experience",
//     },
//     {
//       name: "Rohan Patel",
//       role: "Project Director",
//       spec: "Turnkey Execution Specialist",
//       exp: "9+ Years Experience",
//     },
//     {
//       name: "Priya Desai",
//       role: "Interior Stylist",
//       spec: "Luxury Home Styling",
//       exp: "6+ Years Experience",
//     },
//     {
//       name: "Karan Shah",
//       role: "3D Visualization Artist",
//       spec: "Photorealistic Rendering",
//       exp: "5+ Years Experience",
//     },
//     {
//       name: "Ishita Joshi",
//       role: "Site Supervisor",
//       spec: "On-Site Execution Expert",
//       exp: "7+ Years Experience",
//     },
//   ];

//   return (
//     <>
//       <Navbar />

//       {/* HERO */}
//       <section className="relative h-[75vh] flex items-center justify-center bg-[#050505] overflow-hidden text-white">

//         {/* luxury glow */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_0%,transparent_55%)] opacity-15"></div>

//         {/* gold floating lines */}
//         <div className="absolute w-[400px] h-[400px] border border-[#D4AF37]/10 rounded-full animate-pulse"></div>

//         <div className="text-center px-6 relative z-10">

//           <p className="text-[#D4AF37] uppercase tracking-[6px] text-sm mb-5">
//             Elite Creative Team
//           </p>

//           <h1 className="text-5xl md:text-7xl font-serif leading-tight">
//             Designers Who Shape Luxury
//           </h1>

//           <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
//             We are a team of architects, designers and creators crafting timeless luxury interiors with precision and passion.
//           </p>

//         </div>
//       </section>

//       {/* TEAM GRID */}
//       <section className="py-32 bg-[#050505] relative overflow-hidden text-white">

//         {/* background glow */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#D4AF37_0%,transparent_60%)] opacity-10"></div>

//         <div className="max-w-7xl mx-auto px-6 relative z-10">

//           <div className="grid md:grid-cols-3 gap-10">

//             {team.map((member, index) => (
//               <div
//                 key={index}
//                 className="group relative p-[1px] rounded-3xl bg-gradient-to-b from-[#D4AF37]/40 to-transparent"
//               >
//                 <div className="bg-[#0d0d0d] rounded-3xl p-8 text-center hover:scale-[1.04] transition duration-300 shadow-xl">

//                   {/* avatar */}
//                   <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-[#D4AF37] to-yellow-100 mb-6 shadow-lg"></div>

//                   {/* name */}
//                   <h3 className="text-2xl font-serif">
//                     {member.name}
//                   </h3>

//                   {/* role */}
//                   <p className="text-[#D4AF37] text-sm mt-1 tracking-wide">
//                     {member.role}
//                   </p>

//                   {/* specialization */}
//                   <p className="text-gray-400 text-sm mt-3">
//                     {member.spec}
//                   </p>

//                   {/* experience */}
//                   <p className="text-gray-500 text-xs mt-2">
//                     {member.exp}
//                   </p>

//                   {/* CTA */}
//                   <div className="mt-6 flex flex-col gap-2 text-sm">
//                     <span className="text-gray-400 hover:text-[#D4AF37] cursor-pointer transition">
//                       View Portfolio →
//                     </span>
//                     <span className="text-gray-400 hover:text-[#D4AF37] cursor-pointer transition">
//                       Past Projects →
//                     </span>
//                   </div>

//                   {/* hover line */}
//                   <div className="mt-6 w-0 group-hover:w-full h-[1px] bg-[#D4AF37] transition-all duration-300"></div>

//                 </div>
//               </div>
//             ))}

//           </div>
//         </div>
//       </section>

//       {/* BOTTOM CTA */}
//       <section className="py-28 text-center bg-[#050505] text-white relative overflow-hidden">

//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_0%,transparent_60%)] opacity-10"></div>

//         <div className="relative z-10">

//           <h2 className="text-5xl md:text-6xl font-serif">
//             Want to Work With Our Designers?
//           </h2>

//           <p className="text-gray-400 mt-6">
//             Let’s create something luxurious together.
//           </p>

//           <button className="mt-10 bg-[#D4AF37] text-black px-10 py-4 rounded-full font-semibold hover:scale-105 transition">
//             Contact Team
//           </button>

//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

// export default Team;















import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NehaSharma from "../assets/Neha sharma.jpg";
import RohanMehta from "../assets/Rohan mehta.jpg";
import { useNavigate } from "react-router-dom";



function Team() {

  const navigate = useNavigate();

  const team = [
    {
      image: RohanMehta,
      name: "Aarav Mehta",
      role: "Principal Designer",
      spec: "Luxury Residential Interiors",
      exp: "10+ Years Experience",
      projects: [
        "Modern Villa - Mumbai",
        "Penthouse - Delhi",
        "Luxury Apartment - Dubai"
      ]
    },
    {
      name: "Neha Sharma",
      image: NehaSharma,
      role: "Senior Architect",
      spec: "Commercial Space Design",
      exp: "8+ Years Experience",
      projects: [
        "Corporate Office - Bangalore",
        "Retail Showroom - Pune",
        "Tech Hub - Hyderabad"
      ]
    },
    {
      name: "Rohan Patel",
      image: RohanMehta,
      role: "Project Director",
      spec: "Turnkey Execution Expert",
      exp: "9+ Years Experience",
      projects: [
        "Luxury Bungalow - Surat",
        "Hotel Interior - Goa",
        "Resort Project - Kerala"
      ]
    },
    {
      name: "Priya Desai",
      image: NehaSharma,
      role: "Interior Stylist",
      spec: "Home Styling & Decor",
      exp: "6+ Years Experience",
      projects: [
        "Luxury Flat Styling - Mumbai",
        "Studio Apartment - Pune",
        "Penthouse Styling - Dubai"
      ]
    },
    {
      name: "Karan Shah",
      image: RohanMehta,
      role: "3D Visualizer",
      spec: "Photorealistic Rendering",
      exp: "5+ Years Experience",
      projects: [
        "Villa 3D Concept - Goa",
        "Apartment Render - Dubai",
        "Commercial Mockup - Mumbai"
      ]
    },
    {
      name: "Ishita Joshi",
      image: NehaSharma,
      role: "Site Supervisor",
      spec: "On-Site Execution",
      exp: "7+ Years Experience",
      projects: [
        "Residential Site - Ahmedabad",
        "Villa Execution - Surat",
        "Interior Setup - Mumbai"
      ]
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO */}
      {/* <section className="relative min-h-screen bg-[#050505] overflow-hidden text-white">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_0%,transparent_60%)] opacity-20"></div>

 <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 md:pt-40">

    <div className="text-center">

      <span className="border border-[#D4AF37]/40 px-5 py-2 rounded-full text-[#D4AF37] uppercase tracking-[4px] text-sm">
        Meet Our Experts
      </span>

    <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif leading-tight">
        The Creative
        <span className="block text-[#D4AF37]">
          Design Team
        </span>
      </h1>

   <p className="mt-6 text-gray-300 text-base md:text-lg max-w-3xl mx-auto px-2">
        Architects, interior designers and project specialists
        working together to create extraordinary luxury spaces.
      </p>

    </div>

  </div>

</section> */}


<section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center bg-orange-50 overflow-hidden text-stone-900 border-t border-orange-100/30 mt-24">
  
  {/* Modern Architectural Geometric Backdrop Accents (No heavy black shapes) */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/40 rounded-full blur-[100px] pointer-events-none"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28 w-full">
    <div className="text-center">

      {/* Modern High-End Tracking Label */}
      <span className="text-amber-600 uppercase tracking-[4px] text-xs md:text-sm font-semibold block mb-4">
        Meet Our Experts
      </span>

      {/* Luxury Serif Heading - Scaled & Balanced for Desktop Screen View */}
      <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 leading-tight tracking-wide">
        The Creative <span className="block text-amber-600 mt-2">Design Team</span>
      </h1>

      {/* Balanced Narrative Paragraph Text */}
      <p className="mt-6 text-stone-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
        Architects, interior designers, and project specialists working together 
        to translate your personal aspirations into extraordinary, bespoke luxury spaces.
      </p>

      {/* Clean Aesthetic Line to Guide Viewport Flow downwards */}
      <div className="w-[1px] h-16 bg-gradient-to-b from-orange-300/60 to-transparent mx-auto mt-12"></div>

    </div>
  </div>
</section>

      {/* TEAM GRID */}
   <section className="py-16 md:py-28 bg-orange-50 text-stone-900 -mt-45">
  <div className="max-w-7xl mx-auto px-6">
    <div className="space-y-12">

      {team.map((member, index) => (
        <div
          key={index}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 border border-orange-100/70 rounded-[32px] bg-white shadow-sm overflow-hidden group hover:shadow-md transition duration-500"
        >

          {/* Left Column: Premium Profile Side */}
          <div className="p-8 md:p-10 flex flex-col items-center justify-center lg:border-r border-orange-100/60 bg-stone-50/50">
            
            {/* High-End Architectural Profile Image Frame placeholder */}
           <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-white shadow-sm overflow-hidden mb-6 relative group-hover:scale-105 transition duration-500">
  {member.image ? (
    <img
      src={member.image}
      alt={member.name}
      className="w-full h-full object-cover"
    />
  ) : (
    <div className="w-full h-full bg-stone-200"></div>
  )}
</div>

            <h3 className="text-2xl font-serif text-stone-900 text-center tracking-wide">
              {member.name}
            </h3>

            <p className="text-amber-600 font-medium text-sm mt-1">
              {member.role}
            </p>

            <p className="text-stone-500 text-xs uppercase tracking-wider font-medium text-center mt-3 bg-orange-100/50 px-3 py-1 rounded-full">
              {member.exp}
            </p>
          </div>

          {/* Right Column: Expert Dynamic Details (Spans 2 columns) */}
          <div className="lg:col-span-2 p-8 md:p-10 flex flex-col justify-between">
            
            <div>
              {/* Specialization Box */}
              <div>
                <p className="text-amber-600 uppercase tracking-[3px] text-xs font-semibold">
                  Specialization
                </p>
                <h4 className="text-xl md:text-2xl font-serif text-stone-800 mt-2">
                  {member.spec}
                </h4>
              </div>

              {/* Featured Projects Grid */}
              <div className="mt-8">
                <p className="text-amber-600 uppercase tracking-[3px] text-xs font-semibold mb-4">
                  Featured Projects
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {member.projects.map((project, i) => (
                    <div
                      key={i}
                      className="border border-orange-100 bg-orange-50/30 rounded-xl p-4 hover:border-amber-500/30 hover:bg-white transition duration-300"
                    >
                      <p className="text-stone-600 text-sm font-medium">
                        {project}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Premium Interactive Action Button */}
            <div className="mt-8 pt-6 border-t border-orange-100/50">
              <button className="border border-stone-800 px-6 py-2.5 rounded-full text-stone-800 text-xs uppercase tracking-wider font-semibold hover:bg-stone-900 hover:text-white hover:border-stone-900 transition duration-300">
                View Designer Profile
              </button>
            </div>

          </div>

        </div>
      ))}

    </div>
  </div>
</section>


      {/* CTA */}
      {/* <section className="py-16 md:py-28 text-center bg-[#050505] text-white">

        <div className="max-w-3xl mx-auto px-6">

         <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif">
            Work With Our Experts
          </h2>

          <p className="text-gray-400 mt-6">
            Let our designers transform your space into a luxury experience.
          </p>

          <button className="mt-10 bg-[#D4AF37] text-black px-6 md:px-10 py-4 rounded-full font-semibold hover:scale-105 transition w-full sm:w-auto">
            Contact Us
          </button>

        </div>

      </section> */}


      <section className="py-20 md:py-28 bg-orange-50 text-center text-white">
  <div className="max-w-6xl mx-auto px-6">
    
    {/* Master Dark Inner Banner Card matching Process Page layout architecture */}
    <div className="relative overflow-hidden bg-stone-900 rounded-[32px] py-16 md:py-24 px-8 md:px-16 shadow-xl border border-stone-800">
      
      {/* Subtle Luxury Warm Ambient Lighting Effects */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl mx-auto">

        {/* Section Label */}
        <p className="text-amber-500 uppercase tracking-[4px] text-xs md:text-sm font-semibold mb-4">
          Start Your Journey
        </p>

        {/* Serif Editorial Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white leading-tight">
          Work With Our <span className="text-amber-500">Experts</span>
        </h2>

        {/* Narrative Paragraph */}
        <p className="text-stone-400 mt-6 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Let our award-winning designers transform your space into a seamless, highly customized luxury experience.
        </p>

        {/* Premium Brand Action Button */}
      <button
  onClick={() => navigate("/contact")}
  className="mt-10 bg-amber-500 text-stone-950 px-8 md:px-12 py-3.5 md:py-4 rounded-full font-semibold text-xs md:text-sm uppercase tracking-wider hover:bg-white hover:text-stone-950 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-md shadow-amber-500/10 w-full sm:w-auto"
>
  Contact Us
</button>

      </div>
    </div>

  </div>
</section>

      <Footer />
    </>
  );
}

export default Team;