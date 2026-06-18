// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import ProcessHero from "../components/ProcessHero";
// import ProcessTimeline from "../components/ProcessTimeline";

// function Process() {
//   return (
//     <>
//       <Navbar />
//       <ProcessHero />
//       <ProcessTimeline />
//       <Footer />
//     </>
//   );
// }

// export default Process;











// function ProcessTimeline() {
//   const steps = [
//     "Consultation",
//     "Planning",
//     "Design",
//     "Execution",
//     "Final Delivery",
//   ];

//   return (
//     <section className="py-24">
//       <div className="max-w-5xl mx-auto px-8">

//         {steps.map((step, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-lg p-8 rounded-xl mb-8"
//           >
//             <h2 className="text-2xl font-bold">
//               Step {index + 1}
//             </h2>

//             <p className="mt-3 text-gray-600">
//               {step}
//             </p>
//           </div>
//         ))}

//       </div>
//     </section>
//   );
// }

// export default ProcessTimeline;










// function ProcessHero() {
//   return (
//     <section className="h-[60vh] bg-gray-900 text-white flex items-center justify-center">
//       <div className="text-center">
//         <h1 className="text-6xl font-bold">Our Process</h1>
//         <p className="mt-4">How we bring your dream space to life</p>
//       </div>
//     </section>
//   );
// }

// export default ProcessHero;




import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Interior1 from "../assets/interior1.jpg";
import { useNavigate } from "react-router-dom";

function Process() {

  const navigate = useNavigate();
  const steps = [
    {
      number: "01",
      title: "Consultation",
      desc: "We begin by understanding your vision, lifestyle, space requirements and design goals through a detailed consultation.",
      icon: "🤝",
    },
    {
      number: "02",
      title: "Design & Planning",
      desc: "Our team creates layouts, mood boards, material selections and detailed concepts tailored to your project.",
      icon: "📐",
    },
    {
      number: "03",
      title: "Execution",
      desc: "From procurement to site supervision, every detail is executed with precision and craftsmanship.",
      icon: "🏗️",
    },
    {
      number: "04",
      title: "Handover",
      desc: "We deliver a beautifully finished space ready for you to enjoy, complete with final styling touches.",
      icon: "✨",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      {/* <section className="relative min-h-[90vh] md:min-h-screen overflow-hidden text-white">
  <img
    src={Interior1}
    alt=""
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/80"></div>

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_0%,transparent_60%)] opacity-20"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 md:pt-40">

    <div className="max-w-4xl">

      <span className="border border-[#D4AF37]/40 px-5 py-2 rounded-full text-[#D4AF37] uppercase tracking-[4px] text-sm">
        Our Design Process
      </span>

      <h1 className="mt-8 text-4xl sm:text-5xl md:text-8xl font-serif leading-none">
        From Idea
        <span className="block text-[#D4AF37]">
          To Reality
        </span>
      </h1>

    <p className="mt-8 text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed">
        Every successful interior begins with a clear process.
        From understanding your vision to delivering the final
        space, we ensure a seamless and luxurious experience.
      </p>

    </div>

  </div>

</section> */}


<section className="relative bg-orange-50 text-stone-900 overflow-hidden">

  {/* soft background glow */}
  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-200/30 rounded-full blur-[120px] -translate-y-40 -translate-x-40"></div>
  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-200/30 rounded-full blur-[120px]"></div>

  <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT CONTENT */}
      <div>
        <span className="text-amber-600 uppercase tracking-[6px] text-xs font-semibold">
          Our Process
        </span>

        <h1 className="mt-4 text-4xl md:text-6xl font-serif leading-tight">
          Designed with <span className="text-amber-600">Precision</span><br />
          Built with Emotion
        </h1>

        <p className="mt-6 text-stone-600 max-w-lg leading-relaxed">
          We don’t just design spaces — we craft experiences. Every project follows a refined
          3-step journey that ensures clarity, creativity and flawless execution.
        </p>

        {/* Timeline */}
        <div className="mt-10 space-y-6">

          {[
            {
              num: "01",
              title: "Discovery & Vision",
              desc: "Understanding your lifestyle, taste and space requirements."
            },
            {
              num: "02",
              title: "Concept & Design",
              desc: "We transform ideas into detailed luxury design concepts."
            },
            {
              num: "03",
              title: "Execution & Delivery",
              desc: "Precision execution with premium finishing and detailing."
            }
          ].map((step, i) => (
            <div key={i} className="flex gap-5 group">

              {/* number badge */}
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-white border border-orange-100 flex items-center justify-center font-bold text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition">
                  {step.num}
                </div>

                {/* connecting line */}
                {i !== 2 && (
                  <div className="absolute left-1/2 top-12 w-[2px] h-10 bg-orange-100"></div>
                )}
              </div>

              {/* content */}
              <div>
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-sm text-stone-600 mt-1">{step.desc}</p>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* RIGHT VISUAL STACK */}
      <div className="relative">

        {/* main image */}
        <div className="rounded-[30px] overflow-hidden shadow-xl">
          <img
            src={Interior1}
            alt="design process"
            className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
          />
        </div>

        {/* floating card 1 */}
        <div className="absolute -top-10 -left-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-orange-100 w-40">
          <p className="text-xs text-stone-500">Projects</p>
          <h4 className="text-xl font-bold text-amber-600">200+</h4>
        </div>

        {/* floating card 2 */}
        <div className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-orange-100 w-44">
          <p className="text-xs text-stone-500">Design Rating</p>
          <h4 className="text-xl font-bold text-amber-600">4.9 ★</h4>
        </div>

      </div>

    </div>
  </div>

</section>
      {/* Intro */}
     {/* <section className="py-16 md:py-24 bg-[#050505] text-white">

        <div className="max-w-4xl mx-auto text-center px-6">

         <h2 className="text-3xl md:text-5xl font-serif mb-6">
            How We Work
          </h2>

          <p className="text-gray-400 leading-8">
            Every successful interior begins with a structured process.
            Our approach ensures transparency, creativity and flawless execution
            from the first consultation to the final handover.
          </p>

        </div>

      </section> */}


      <section className="bg-[#FAF6F1] py-28 -mt-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="text-center max-w-3xl mx-auto">
      <span className="uppercase tracking-[6px] text-amber-600 text-xs font-semibold">
        Our Process
      </span>

      <h2 className="mt-4 text-5xl md:text-6xl font-serif text-stone-900">
        How We Work
      </h2>

      <p className="mt-6 text-stone-600 leading-8">
        From the first conversation to the final reveal, every detail is
        carefully considered to create interiors that are elegant,
        functional, and timeless.
      </p>
    </div>

    {/* Process */}
    <div className="grid md:grid-cols-4 gap-6 mt-20">

      <div className="bg-white rounded-[32px] p-8 border border-orange-100">
        <span className="text-6xl font-serif text-amber-600/20">
          01
        </span>

        <h3 className="font-serif text-2xl mt-4">
          Discover
        </h3>

        <p className="mt-4 text-stone-600">
          Understanding your vision, lifestyle,
          requirements and aspirations.
        </p>
      </div>

      <div className="bg-white rounded-[32px] p-8 border border-orange-100">
        <span className="text-6xl font-serif text-amber-600/20">
          02
        </span>

        <h3 className="font-serif text-2xl mt-4">
          Design
        </h3>

        <p className="mt-4 text-stone-600">
          Developing layouts, concepts,
          materials and visual direction.
        </p>
      </div>

      <div className="bg-white rounded-[32px] p-8 border border-orange-100">
        <span className="text-6xl font-serif text-amber-600/20">
          03
        </span>

        <h3 className="font-serif text-2xl mt-4">
          Execute
        </h3>

        <p className="mt-4 text-stone-600">
          Coordinating every detail with
          precision and craftsmanship.
        </p>
      </div>

      <div className="bg-[#C89B6D] rounded-[32px] p-8 text-white">
        <span className="text-6xl font-serif text-white/20">
          04
        </span>

        <h3 className="font-serif text-2xl mt-4">
          Reveal
        </h3>

        <p className="mt-4 text-white/90">
          Presenting a beautifully finished
          space tailored to your lifestyle.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* Luxury Timeline */}
     {/* <section className="py-20 md:py-32 bg-[#050505] text-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-20">

      <p className="text-[#D4AF37] uppercase tracking-[5px] text-sm">
        Step By Step
      </p>

      <h2 className="text-3xl md:text-5xl font-serif mt-4">
        Our Design Journey
      </h2>

    </div>

    <div className="grid lg:grid-cols-4 gap-8 relative">

      <div className="hidden lg:block absolute top-20 left-0 w-full h-[2px] bg-[#D4AF37]/20"></div>

      {steps.map((step, index) => (

    <div
  key={index}
  className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 hover:border-[#D4AF37]/40 transition duration-500"
>

          <div className="w-16 h-16 rounded-full bg-[#D4AF37] text-black flex items-center justify-center text-2xl">
            {step.icon}
          </div>

          <h3 className="text-4xl md:text-5xl font-bold text-[#D4AF37]/20 mt-6">
            {step.number}
          </h3>

        <h4 className="text-xl md:text-2xl font-serif mt-3">
            {step.title}
          </h4>

          <p className="text-gray-400 mt-4 leading-7">
            {step.desc}
          </p>

        </div>

      ))}

    </div>

  </div>

</section> */}


<section className="py-16 md:py-24 bg-orange-50 text-stone-900 -mt-17">
  <div className="max-w-7xl mx-auto px-6">

    {/* Section Title Header */}
    <div className="text-center mb-20">
      <p className="text-amber-600 uppercase tracking-[4px] text-xs md:text-sm font-semibold">
        Step By Step
      </p>

      <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mt-3">
        Our Design <span className="text-amber-600">Journey</span>
      </h2>
    </div>

    {/* Luxury Timeline Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
      
      {/* Horizontal Connector Line for Large Screen Architecture */}
      <div className="hidden lg:block absolute top-[64px] left-0 w-full h-[1px] bg-orange-200/60 z-0"></div>

      {steps.map((step, index) => (
        <div
          key={index}
          className="relative z-10 bg-white border border-orange-100/70 rounded-[28px] p-6 md:p-8 shadow-sm hover:shadow-md hover:border-amber-500/30 transition duration-500 group flex flex-col justify-between"
        >
          <div>
            {/* Minimalist Floating Icon Container with Hover Scale */}
            <div className="w-14 h-14 rounded-2xl bg-orange-50 text-amber-600 border border-orange-100 flex items-center justify-center text-xl group-hover:bg-amber-600 group-hover:text-white transition duration-300 shadow-sm">
              {step.icon}
            </div>

            {/* Giant Graphic Step Number Accent */}
            <h3 className="text-5xl md:text-6xl font-serif font-bold text-stone-100 tracking-tighter mt-6 transition duration-500 group-hover:text-amber-600/5 select-none">
              {step.number}
            </h3>

            {/* Step Title */}
            <h4 className="text-xl font-serif text-stone-900 mt-2 tracking-wide">
              {step.title}
            </h4>

            {/* Step Description */}
            <p className="text-stone-600 mt-3 text-sm leading-relaxed">
              {step.desc}
            </p>
          </div>

          {/* Bottom subtle bar accent on hover */}
          <div className="w-0 h-[2px] bg-amber-600 mt-6 rounded-full group-hover:w-12 transition-all duration-300"></div>
        </div>
      ))}

    </div>

  </div>
</section>


{/* <section className="py-20 md:py-32 bg-black text-white">

  <div className="max-w-6xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      <div>

        <p className="text-[#D4AF37] uppercase tracking-[5px]">
          Why Our Process Works
        </p>

       <h2 className="text-3xl md:text-5xl font-serif mt-4">
          Designed Around Your Lifestyle
        </h2>

        <p className="text-gray-400 mt-6 leading-8">
          We believe every project is unique.
          Our collaborative process ensures your
          personality, requirements and aspirations
          are reflected in every detail.
        </p>

      </div>

      <div className="space-y-6">

        <div className="border border-white/10 rounded-2xl p-6">
          ✓ Transparent Communication
        </div>

        <div className="border border-white/10 rounded-2xl p-4 md:p-6">
          ✓ Personalized Design Solutions
        </div>

        <div className="border border-white/10 rounded-2xl p-6">
          ✓ Timely Project Execution
        </div>

        <div className="border border-white/10 rounded-2xl p-6">
          ✓ Premium Quality Assurance
        </div>

      </div>

    </div>

  </div>

</section> */}



<section className="py-20 md:py-32 bg-orange-50 text-stone-900 border-t border-orange-100/30 -mt-18">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* Left Content Column */}
      <div>
        <p className="text-amber-600 uppercase tracking-[4px] text-xs md:text-sm font-semibold">
          Why Our Process Works
        </p>

        <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mt-3 leading-tight">
          Designed Around <span className="text-amber-600">Your Lifestyle</span>
        </h2>

        <p className="text-stone-600 mt-6 text-sm md:text-base leading-relaxed md:leading-8">
          We believe every project is unique. Our collaborative process ensures your
          personality, requirements, and aspirations are reflected in every single detail.
        </p>
      </div>

      {/* Right Value Cards Column */}
      <div className="space-y-4">

        {/* Feature 1 */}
        <div className="bg-white border border-orange-100/70 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md hover:border-amber-500/20 transition duration-300 flex items-center gap-4 group">
          <div className="w-10 h-10 rounded-xl bg-orange-50 text-amber-600 border border-orange-100 flex items-center justify-center text-sm font-bold flex-shrink-0 group-hover:bg-amber-600 group-hover:text-white transition duration-300">
            ✓
          </div>
          <span className="font-serif text-stone-800 text-base md:text-lg font-medium">Transparent Communication</span>
        </div>

        {/* Feature 2 */}
        <div className="bg-white border border-orange-100/70 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md hover:border-amber-500/20 transition duration-300 flex items-center gap-4 group">
          <div className="w-10 h-10 rounded-xl bg-orange-50 text-amber-600 border border-orange-100 flex items-center justify-center text-sm font-bold flex-shrink-0 group-hover:bg-amber-600 group-hover:text-white transition duration-300">
            ✓
          </div>
          <span className="font-serif text-stone-800 text-base md:text-lg font-medium">Personalized Design Solutions</span>
        </div>

        {/* Feature 3 */}
        <div className="bg-white border border-orange-100/70 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md hover:border-amber-500/20 transition duration-300 flex items-center gap-4 group">
          <div className="w-10 h-10 rounded-xl bg-orange-50 text-amber-600 border border-orange-100 flex items-center justify-center text-sm font-bold flex-shrink-0 group-hover:bg-amber-600 group-hover:text-white transition duration-300">
            ✓
          </div>
          <span className="font-serif text-stone-800 text-base md:text-lg font-medium">Timely Project Execution</span>
        </div>

        {/* Feature 4 */}
        <div className="bg-white border border-orange-100/70 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md hover:border-amber-500/20 transition duration-300 flex items-center gap-4 group">
          <div className="w-10 h-10 rounded-xl bg-orange-50 text-amber-600 border border-orange-100 flex items-center justify-center text-sm font-bold flex-shrink-0 group-hover:bg-amber-600 group-hover:text-white transition duration-300">
            ✓
          </div>
          <span className="font-serif text-stone-800 text-base md:text-lg font-medium">Premium Quality Assurance</span>
        </div>

      </div>

    </div>
  </div>
</section>

      {/* Stats */}
      {/* <section className="py-16 md:py-24 bg-[#050505] text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">

          <div>
           <h3 className="text-3xl md:text-5xl font-serif text-[#D4AF37]">
              250+
            </h3>
            <p className="text-gray-400 mt-3">
              Projects Completed
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-serif text-[#D4AF37]">
              12+
            </h3>
            <p className="text-gray-400 mt-3">
              Years Experience
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-serif text-[#D4AF37]">
              98%
            </h3>
            <p className="text-gray-400 mt-3">
              Client Satisfaction
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-serif text-[#D4AF37]">
              24/7
            </h3>
            <p className="text-gray-400 mt-3">
              Project Support
            </p>
          </div>

        </div>

      </section> */}



      <section className="py-16 md:py-24 bg-orange-50 text-stone-900 border-t border-orange-100/30 -mt-17">
  <div className="max-w-6xl mx-auto px-6">
    
    {/* Grid System with Responsive Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">

      {/* Stat Block 1 */}
      <div className="bg-white border border-orange-100/70 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition duration-300 group">
        <h3 className="text-4xl md:text-5xl font-serif text-amber-600 font-bold tracking-tight group-hover:scale-105 transition duration-300">
          250+
        </h3>
        <p className="text-stone-600 font-sans font-medium uppercase tracking-wider text-xs md:text-sm mt-3">
          Projects Completed
        </p>
      </div>

      {/* Stat Block 2 */}
      <div className="bg-white border border-orange-100/70 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition duration-300 group">
        <h3 className="text-4xl md:text-5xl font-serif text-amber-600 font-bold tracking-tight group-hover:scale-105 transition duration-300">
          12+
        </h3>
        <p className="text-stone-600 font-sans font-medium uppercase tracking-wider text-xs md:text-sm mt-3">
          Years Experience
        </p>
      </div>

      {/* Stat Block 3 */}
      <div className="bg-white border border-orange-100/70 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition duration-300 group">
        <h3 className="text-4xl md:text-5xl font-serif text-amber-600 font-bold tracking-tight group-hover:scale-105 transition duration-300">
          98%
        </h3>
        <p className="text-stone-600 font-sans font-medium uppercase tracking-wider text-xs md:text-sm mt-3">
          Client Satisfaction
        </p>
      </div>

      {/* Stat Block 4 */}
      <div className="bg-white border border-orange-100/70 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition duration-300 group">
        <h3 className="text-4xl md:text-5xl font-serif text-amber-600 font-bold tracking-tight group-hover:scale-105 transition duration-300">
          24/7
        </h3>
        <p className="text-stone-600 font-sans font-medium uppercase tracking-wider text-xs md:text-sm mt-3">
          Project Support
        </p>
      </div>

    </div>

  </div>
</section>

      {/* Divider */}
      {/* <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div> */}

      {/* CTA */}
     {/* <section className="py-20 md:py-32 bg-black text-center text-white relative overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_0%,transparent_60%)] opacity-10"></div>

        <div className="relative z-10">

          <p className="text-[#D4AF37] uppercase tracking-[5px] mb-4">
            Ready To Begin?
          </p>

         <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif">
            Let's Create Your Dream Space
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Schedule a consultation and discover how our design process can transform your vision into reality.
          </p>

         <button className="mt-10 bg-[#D4AF37] text-black px-6 md:px-10 py-3 md:py-4 rounded-full font-semibold hover:scale-105 transition">
            Book Consultation
          </button>

        </div>

      </section> */}


      {/* Minimalist Divider Line */}
<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-orange-200/50 to-transparent"></div>

{/* Master Premium CTA Card Section */}
<section className="py-20 md:py-28 bg-orange-50 text-center text-white -mt-10">
  <div className="max-w-6xl mx-auto px-6">
    
    {/* High-End Dark Inner Banner Box matching image_e24f57.jpg layout */}
    <div className="relative overflow-hidden bg-stone-900 rounded-[32px] py-16 md:py-24 px-8 md:px-16 shadow-xl border border-stone-800">
      
      {/* Subtle Warm Amber Glow Ambient Element */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        
        {/* Subtitle Label */}
        <p className="text-amber-500 uppercase tracking-[4px] text-xs md:text-sm font-semibold mb-4">
          Ready To Begin?
        </p>

        {/* Serif Editorial Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
          Let's Create Your <span className="text-amber-500">Dream Space</span>
        </h2>

        {/* Narrative Paragraph */}
        <p className="text-stone-400 mt-6 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Schedule a consultation and discover how our design process can transform your vision into reality.
        </p>

        {/* Premium Brand CTA Button */}
      <button
  onClick={() => navigate("/contact")}
  className="mt-10 bg-amber-500 text-stone-950 px-8 md:px-12 py-3.5 md:py-4 rounded-full font-semibold text-xs md:text-sm uppercase tracking-wider hover:bg-white hover:text-stone-950 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-md shadow-amber-500/10"
>
  Book Consultation
</button>

      </div>
    </div>

  </div>
</section>

      <Footer />
    </>
  );
}

export default Process;