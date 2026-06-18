import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Interior0 from "../assets/interior0.jpg";
import { useNavigate } from "react-router-dom";


function About() {

   const navigate = useNavigate();
  return (
    <>
      <Navbar />

  
    <section
  className="relative h-[85vh] min-h-[600px] flex items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage: `url(${Interior0})`,
  }}
>
  {/* Subtle premium dark luxury overlay - matching homepage visibility */}
  <div className="absolute inset-0 bg-stone-950/40 z-0"></div>

  {/* Content Container */}
  <div className="relative z-10 text-center px-6 max-w-5xl mx-auto"> 
    
    {/* Small Top Tag */}
    <p className="text-amber-500 uppercase tracking-[4px] text-xs md:text-sm mb-4 font-semibold">
      Interior Design Studio
    </p>

    {/* Clean, Box-less Luxury Heading - Just like your homepage style */}
    <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif leading-tight text-white drop-shadow-md">
      About Our <span className="text-amber-500">Studio</span>
    </h1>

    {/* Soft Elegant Subtitle Description */}
    <p className="mt-6 text-sm md:text-xl text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
      Creating timeless interiors where luxury, functionality and artistry meet.
    </p>
    
  </div>
</section>

    
  

  <section className="py-20 md:py-28 bg-orange-50">
  <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
    
    {/* Image Component with Luxury Rounded Corners */}
    <img
      src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
      className="rounded-[32px] shadow-md w-full object-cover h-[350px] md:h-[450px]"
      alt="Our Office Space"
    />

    {/* Text Content Block */}
    <div className="text-center md:text-left">
      <p className="text-amber-600 uppercase tracking-[4px] text-xs md:text-sm mb-4 font-semibold">
        Our Story
      </p>

      {/* Modern Serif Heading with Highlight matching your homepage syntax */}
      <h2 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight">
        Designing Spaces <br className="hidden md:block" />
        Since <span className="text-amber-600">2010</span>
      </h2>

      {/* Clean & Highly Readable Description */}
      <p className="mt-6 text-stone-600 text-sm md:text-base leading-relaxed">
        Founded with a passion for creativity and functionality,
        our studio has transformed hundreds of residential and
        commercial spaces into timeless environments that reflect
        personality and purpose.
      </p>
    </div>

  </div>
</section>


      <section className="py-20 md:py-28 bg-orange-50/50 border-t border-orange-100/40 -mt-18">
  <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-center">

    {/* Text Content Column */}
    <div className="text-center md:text-left order-2 md:order-1">
      <p className="text-amber-600 uppercase tracking-[4px] text-xs md:text-sm mb-4 font-semibold">
        Lead Designer
      </p>

      {/* Luxury Serif Name Highlight */}
      <h2 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight">
        Sarah <span className="text-amber-600">Johnson</span>
      </h2>

      {/* Elegant Bio Text */}
      <p className="mt-6 text-stone-600 text-sm md:text-base leading-relaxed">
        12+ years of experience creating luxury interiors across
        residential and commercial projects. Her design philosophy
        focuses on balance between elegance and functionality.
      </p>
    </div>

    {/* Designer Profile Image with Premium Radius */}
    <div className="order-1 md:order-2 max-w-md mx-auto md:max-w-full">
      <img
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
        className="rounded-[32px] shadow-md w-full h-[400px] object-cover object-center"
        alt="Sarah Johnson - Lead Designer"
      />
    </div>

  </div>
</section>


<section className="py-20 md:py-28 bg-orange-50/30 border-t border-orange-100/50 -mt-16">
  <div className="max-w-6xl mx-auto text-center px-6">

    {/* Recognition Tag */}
    <p className="text-amber-600 uppercase tracking-[4px] text-xs md:text-sm mb-4 font-semibold">
      Recognition
    </p>

    {/* Serif Main Heading */}
    <h2 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight">
      Awards & <span className="text-amber-600">Achievements</span>
    </h2>

    {/* Elegant Grid Layout with Premium Dark Grey Cards (Inspired by your homepage services) */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-16">

      {[
        { title: "Best Interior Studio", subtitle: "National Architecture Awards 2024" },
        { title: "Luxury Excellence", subtitle: "Elite Design & Decor Expo 2025" },
        { title: "Top Residential Space", subtitle: "Modern Living Awards 2026" }
      ].map((award, i) => (
        
        <div
          key={i}
          className="bg-[#2e2b2a] border border-stone-800 rounded-[32px] p-8 text-center shadow-lg hover:border-amber-500/40 transition duration-300 group"
        >

          {/* Subdued Premium Index instead of Emoji */}
          <div className="w-10 h-10 bg-stone-800/60 rounded-full flex items-center justify-center text-amber-500/80 mx-auto font-serif text-sm mb-6 border border-stone-700/50 group-hover:border-amber-500/30 transition">
            0{i + 1}
          </div>

          {/* Main Award Title */}
          <h3 className="text-white font-serif text-xl mb-2 tracking-wide">
            {award.title}
          </h3>

          {/* Award Subtitle/Year */}
          <p className="text-stone-400 text-xs md:text-sm tracking-wide">
            {award.subtitle}
          </p>

        </div>

      ))}

    </div>

  </div>
</section>


  <section className="relative py-24 md:py-32 bg-orange-50 text-center overflow-hidden border-t border-orange-100/30 -mt-16">
  
  {/* Elegant Background Mesh Layer - Very subtle warm glow instead of yellow radial */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.04)_0%,transparent_70%)]"></div>

  <div className="relative z-10 max-w-4xl mx-auto px-6">

    {/* Philosophy Section Tag */}
    <p className="text-amber-600 uppercase tracking-[4px] text-xs md:text-sm mb-6 font-semibold">
      Philosophy
    </p>

    {/* Elegant Title */}
    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-stone-900 tracking-wide">
      Our Design <span className="text-amber-600">Belief</span>
    </h2>

    {/* Luxury Quote Box - Inspired by your philosophy border line on homepage */}
    <div className="mt-12 md:mt-16 max-w-3xl mx-auto border-l-2 md:border-l-4 border-amber-500/80 pl-6 md:pl-8 text-left">
      <p className="text-xl md:text-3xl font-serif italic text-stone-800 leading-relaxed tracking-wide">
        “Luxury is not about decoration. It is about creating spaces
        that improve the way people live.”
      </p>
    </div>

  </div>
</section>


<section className="relative py-20 md:py-24 bg-white overflow-hidden -mt-11">

  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-80 h-80 bg-amber-500/10 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-400/10 blur-[120px] rounded-full"></div>

  <div className="max-w-5xl mx-auto px-6">

    <div className="relative z-10 text-center rounded-[32px] bg-stone-950 border border-white/10 px-8 py-14 md:py-16">

      {/* Tagline */}
      <p className="text-amber-400 uppercase tracking-[4px] text-xs md:text-sm mb-4 font-medium">
        Work With Our Design Team
      </p>

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
        Let’s Bring Your
        <span className="block text-amber-400">
          Vision to Life
        </span>
      </h2>

      {/* Description */}
      <p className="mt-5 text-stone-300 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
        Our team collaborates with you to transform ideas into elegant,
        functional and timeless interior spaces tailored to your lifestyle.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

        <button
          onClick={() => navigate("/contact")}
          className="bg-amber-500 hover:bg-amber-400 text-black px-7 py-3.5 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1"
        >
          Book Consultation
        </button>

        <button
          onClick={() => navigate("/services")}
          className="border border-white/20 text-white px-7 py-3.5 rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300"
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

export default About;




{/* 

      <section className="py-28 bg-[#050505] text-white">

      <div className="max-w-7xl mx-auto px-8">

        <p className="text-[#D4AF37] uppercase tracking-[4px] text-sm text-center mb-4">
          Our Team
        </p>

        <h2 className="text-5xl font-serif text-center">
          Meet Our Experts
        </h2>


        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {[
            { name: "Emma Wilson", role: "Senior Designer" },
            { name: "David Clark", role: "Architect" },
            { name: "Sophia Brown", role: "Project Manager" }
          ].map((t, i) => (
            <div key={i} className="text-center">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                className="rounded-3xl shadow-xl hover:scale-[1.02] transition duration-500"
              />

              <h3 className="mt-4 font-semibold text-lg">
                {t.name}
              </h3>

              <p className="text-gray-400 text-sm">
                {t.role}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section> */}


{/* 
    <section className="py-28 text-center bg-[#050505]">
  <p className="text-[#D4AF37] uppercase tracking-[4px] mb-4">
    Let’s Work Together
  </p>

  <h2 className="text-5xl md:text-6xl font-serif text-white">
    Build Your Dream Interior
  </h2>

  <button className="mt-10 bg-[#D4AF37] text-black px-10 py-4 rounded-full font-semibold">
    Book Consultation
  </button>
</section> */}


  

















// import AboutHero from "../components/AboutHero";
// import StudioStory from "../components/StudioStory";
// import LeadDesigner from "../components/LeadDesigner";
// import Awards from "../components/Awards";
// import Philosophy from "../components/Philosophy";
// import TeamPreview from "../components/TeamPreview";





      {/* <AboutHero />
      <StudioStory />
      <LeadDesigner />
      <Awards />
      <Philosophy />
      <TeamPreview /> */}