// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import TestimonialsHero from "../components/TestimonialsHero";
// import TestimonialsList from "../components/TestimonialsList";
// import TestimonialsPreview from "../components/TestimonialsPreview";

// function Testimonials() {
//   return (
//     <>
//       <Navbar />
//       <TestimonialsHero />
//       <TestimonialsList />
//       <TestimonialsPreview />
//       <Footer />
//     </>
//   );
// }

// export default Testimonials;















import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Testimonials() {

  const reviews = [
    {
      name: "Rahul Shah",
      review:
        "Absolutely stunning transformation of our home. The team understood luxury perfectly.",
      project: "Modern Villa - Mumbai",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      name: "Priya Patel",
      review:
        "From concept to execution, everything was flawless and highly professional.",
      project: "Luxury Apartment - Dubai",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    {
      name: "Amit Mehta",
      review:
        "Their design sense is world-class. Truly premium interior experience.",
      project: "Penthouse - Delhi",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    {
      name: "Neha Joshi",
      review:
        "Every detail was carefully designed. Highly recommended for luxury homes.",
      project: "Villa Interior - Goa",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    },
    {
      name: "Karan Mehta",
      review:
        "Best interior team I have worked with. Timely delivery and premium quality.",
      project: "Corporate Office - Bangalore",
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    {
      name: "Ishita Shah",
      review:
        "They turned our dream home into reality with elegance and perfection.",
      project: "Luxury Flat - Ahmedabad",
      image:
        "https://images.unsplash.com/photo-1505692794403-34d4982c5c29",
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO */}
     {/* <section className="relative min-h-screen overflow-hidden bg-[#050505] text-white">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_0%,transparent_60%)] opacity-20"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32">

   <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div>

        <span className="inline-block border border-[#D4AF37]/40 px-5 py-2 rounded-full text-[#D4AF37] uppercase tracking-[4px] text-sm">
          Client Testimonials
        </span>

        <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif leading-tight lg:leading-none">
          Spaces Loved
          <span className="block text-[#D4AF37]">
            By Our Clients
          </span>
        </h1>

       <p className="mt-6 text-gray-300 text-base md:text-lg max-w-xl leading-relaxed">
          Every project tells a story. Discover how our clients transformed
          their homes and workspaces through thoughtful design and premium craftsmanship.
        </p>

        <div className="grid grid-cols-3 gap-4 md:flex md:gap-10 mt-10 text-center">
          <div>
           <h3 className="text-2xl md:text-4xl font-bold text-[#D4AF37]">
              250+
            </h3>
            <p className="text-gray-400">
              Happy Clients
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#D4AF37]">
              98%
            </h3>
            <p className="text-gray-400">
              Satisfaction
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#D4AF37]">
              500+
            </h3>
            <p className="text-gray-400">
              Reviews
            </p>
          </div>

        </div>

      </div>

      <div className="relative">

        <img
          src={reviews[0].image}
          alt=""
         className="rounded-[35px] h-[350px] md:h-[500px] lg:h-[600px] w-full object-cover"
        />

       <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-black/80 backdrop-blur-xl border border-[#D4AF37]/20 p-4 md:p-6 rounded-3xl max-w-[250px]">

          <p className="text-[#D4AF37] text-sm uppercase tracking-[3px]">
            Featured Review
          </p>

          <h3 className="text-xl font-serif mt-2">
            Luxury Villa Project
          </h3>

          <p className="text-gray-300 mt-3 text-sm">
            ★★★★★ Client Rated Experience
          </p>

        </div>

      </div>

    </div>

  </div>

</section> */}



<section className="relative min-h-[85vh] lg:min-h-screen flex items-center bg-orange-50 overflow-hidden text-stone-900 border-t border-orange-100/30">
  
  {/* Modern Luxury Geometric Background Accents */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/40 rounded-full blur-[100px] pointer-events-none"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28 w-full">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      {/* Left Column: Heading & Trust Metrics */}
      <div className="text-center lg:text-left">

        {/* Clean Line-free Pill Text matching global design */}
        <span className="text-amber-600 uppercase tracking-[4px] text-xs md:text-sm font-semibold block mb-4">
          Client Testimonials
        </span>

        {/* High-End Luxury Serif Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 leading-tight">
          Spaces Loved <span className="block text-amber-600 mt-1">By Our Clients</span>
        </h1>

        {/* Brand Narrative Text */}
        <p className="mt-6 text-stone-600 text-sm md:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
          Every project tells a story. Discover how our clients transformed
          their homes and workspaces through thoughtful design and premium craftsmanship.
        </p>

        {/* Premium Core Trust Metrics Stack */}
        <div className="grid grid-cols-3 gap-4 md:gap-10 mt-10 pt-6 border-t border-orange-200/50 max-w-lg mx-auto lg:mx-0">

          <div className="space-y-1">
            <h3 className="text-2xl md:text-4xl font-serif font-bold text-amber-600">250+</h3>
            <p className="text-stone-500 text-xs uppercase tracking-wider font-medium">Happy Clients</p>
          </div>

          <div className="space-y-1">
            <h3 className="text-2xl md:text-4xl font-serif font-bold text-amber-600">98%</h3>
            <p className="text-stone-500 text-xs uppercase tracking-wider font-medium">Satisfaction</p>
          </div>

          <div className="space-y-1">
            <h3 className="text-2xl md:text-4xl font-serif font-bold text-amber-600">500+</h3>
            <p className="text-stone-500 text-xs uppercase tracking-wider font-medium">Reviews</p>
          </div>

        </div>

      </div>

      {/* Right Column: Premium Featured Image Card with Dark Overlap Layer */}
      <div className="relative h-[350px] sm:h-[450px] lg:h-[580px] w-full rounded-[32px] overflow-hidden shadow-md group max-w-xl mx-auto lg:w-full lg:max-w-none">
        
        {/* Main Review Image */}
        <img
          src={reviews[0].image}
          alt="Featured Review Space"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
        />

        {/* Dynamic Dark Gradient Shading over Image for High-Contrast Text Reading */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent"></div>

        {/* Asymmetric Floating Review Details Card */}
        <div className="absolute bottom-6 left-6 right-6 bg-white border border-stone-800 p-5 md:p-6 rounded-2xl backdrop-blur-md max-w-xs sm:max-w-sm">

          <p className="text-amber-500 text-xs uppercase tracking-wider font-semibold">
            Featured Review
          </p>

          <h3 className="text-xl font-serif text-black mt-1.5 tracking-wide">
            Luxury Villa Project
          </h3>

          <div className="flex items-center gap-1.5 mt-3">
            <span className="text-amber-400 text-sm tracking-widest">★★★★★</span>
            <span className="text-stone-400 text-xs font-medium uppercase tracking-wider pl-1 border-l border-stone-700">
              Client Rated Experience
            </span>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* TESTIMONIAL GRID */}
     {/* <section className="py-16 md:py-32 bg-[#050505] text-white">

  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    <div className="text-center mb-20">

      <p className="text-[#D4AF37] uppercase tracking-[5px] text-sm">
        Real Experiences
      </p>

     <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif mt-4">
        Client Success Stories
      </h2>

    </div>

    <div className="space-y-16">

      {reviews.map((item, index) => (

        <div
          key={index}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center bg-white/5 border border-white/10 rounded-[35px] overflow-hidden"
        >

          <div className={`${index % 2 !== 0 ? "lg:order-2" : ""}`}>

            <img
              src={item.image}
              alt={item.project}
              className="h-[250px] sm:h-[350px] md:h-[450px] w-full object-cover"
            />

          </div>

          <div
            className={`p-6 md:p-10 ${index % 2 !== 0 ? "lg:order-1" : ""}`}
          >

            <div className="text-[#D4AF37] text-2xl">
              ★★★★★
            </div>

            <blockquote className="text-xl md:text-2xl font-serif leading-relaxed mt-5">
              "{item.review}"
            </blockquote>

            <div className="mt-8">

              <h3 className="text-2xl font-semibold">
                {item.name}
              </h3>

              <p className="text-[#D4AF37] mt-2">
                Completed Project
              </p>

              <p className="text-gray-400 mt-1">
                {item.project}
              </p>

            </div>

            <div className="mt-8 flex flex-wrap gap-3">

              <div className="px-5 py-2 border border-white/10 rounded-full text-sm">
                Luxury Interior
              </div>

              <div className="px-5 py-2 border border-white/10 rounded-full text-sm">
                Verified Client
              </div>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

</section> */}



<section className="py-16 md:py-28 bg-orange-50 text-stone-900">
  <div className="max-w-7xl mx-auto px-6">

    {/* Section Header */}
    <div className="text-center mb-20">
      <p className="text-amber-600 uppercase tracking-[4px] text-xs md:text-sm font-semibold">
        Real Experiences
      </p>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 mt-3">
        Client Success <span className="text-amber-600">Stories</span>
      </h2>
    </div>

    {/* Alternating Testimonials List */}
    <div className="space-y-16">
      {reviews.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-orange-100/70 bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-md transition duration-500 group"
        >

          {/* Image Block with Alternating Layout Support */}
          <div className={`relative h-[300px] sm:h-[400px] md:h-[480px] lg:h-full min-h-[350px] overflow-hidden ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
            <img
              src={item.image}
              alt={item.project}
              className="w-full h-full object-cover group-hover:scale-102 transition duration-700"
            />
            {/* Subtle overlay overlay for luxury texture */}
            <div className="absolute inset-0 bg-stone-900/5 mix-blend-multiply"></div>
          </div>

          {/* Review Content Content Block */}
          <div
            className={`p-8 md:p-12 lg:p-16 flex flex-col justify-center ${index % 2 !== 0 ? "lg:order-1" : ""}`}
          >
            {/* Elegant Golden Stars */}
            <div className="text-amber-500 text-xl tracking-widest">
              ★★★★★
            </div>

            {/* High-End Quote block */}
            <blockquote className="text-lg md:text-2xl font-serif text-stone-800 italic leading-relaxed mt-5">
              "{item.review}"
            </blockquote>

            {/* Client Credentials Info */}
            <div className="mt-8 pt-6 border-t border-orange-100/60">
              <h3 className="text-xl md:text-2xl font-serif font-medium text-stone-900">
                {item.name}
              </h3>

              <div className="flex flex-wrap items-center gap-2 mt-2">
                <span className="text-amber-600 text-xs uppercase tracking-wider font-semibold">
                  Completed Project:
                </span>
                <span className="text-stone-500 text-sm font-medium">
                  {item.project}
                </span>
              </div>
            </div>

            {/* Minimalist Trust Meta Badges */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              <div className="px-4 py-1.5 bg-orange-50 text-stone-600 border border-orange-100/60 rounded-full text-xs font-medium uppercase tracking-wider">
                Luxury Interior
              </div>

              <div className="px-4 py-1.5 bg-orange-50 text-amber-700 border border-orange-100/60 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-amber-500"></span> Verified Client
              </div>
            </div>

          </div>

        </div>
      ))}
    </div>

  </div>
</section>

      {/* CTA */}
      {/* <section className="py-16 md:py-28 text-center bg-[#050505] text-white px-4">

       <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif">
          Ready to Design Your Dream Space?
        </h2>

        <p className="text-gray-400 mt-6">
          Join hundreds of happy clients who trusted our luxury interior expertise.
        </p>

        <button className="mt-10 bg-[#D4AF37] text-black px-6 md:px-10 py-4 rounded-full font-semibold hover:scale-105 transition w-full sm:w-auto">
          Start Your Project
        </button>

      </section> */}


      {/* Master Premium CTA Card Section */}
<section className="py-20 md:py-28 bg-orange-50 text-center text-white -mt-18">
  <div className="max-w-6xl mx-auto px-6">
    
    {/* High-End Dark Inner Banner Box matching global layout architecture */}
    <div className="relative overflow-hidden bg-stone-900 rounded-[32px] py-16 md:py-24 px-8 md:px-16 shadow-xl border border-stone-800">
      
      {/* Subtle Warm Amber Glow Ambient Element */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        
        {/* Subtitle Label */}
        <p className="text-amber-500 uppercase tracking-[4px] text-xs md:text-sm font-semibold mb-4">
          Next Step
        </p>

        {/* Serif Editorial Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
          Ready to Design Your <span className="text-amber-500">Dream Space?</span>
        </h2>

        {/* Narrative Paragraph */}
        <p className="text-stone-400 mt-6 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Join hundreds of happy clients who trusted our luxury interior expertise to transform their vision into reality.
        </p>

        {/* Premium Brand CTA Button */}
        <button className="mt-10 bg-amber-500 text-stone-950 px-8 md:px-12 py-3.5 md:py-4 rounded-full font-semibold text-xs md:text-sm uppercase tracking-wider hover:bg-white hover:text-stone-950 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-md shadow-amber-500/10 w-full sm:w-auto">
          Start Your Project
        </button>

      </div>
    </div>

  </div>
</section>

      <Footer />
    </>
  );
}

export default Testimonials;  