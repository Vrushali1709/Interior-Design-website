// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import BlogHero from "../components/BlogHero";
// import BlogGrid from "../components/BlogGrid";

// function Blog() {
//   return (
//     <>
//       <Navbar />
//       <BlogHero />
//       <BlogGrid />
//       <Footer />
//     </>
//   );
// }

// export default Blog;




 {/* HERO */}
     {/* <section className="relative min-h-screen bg-[#050505] overflow-hidden text-white">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_0%,transparent_60%)] opacity-20"></div>

 <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32">

   <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

      <div>

        <span className="inline-block border border-[#D4AF37]/40 px-5 py-2 rounded-full text-[#D4AF37] uppercase tracking-[4px] text-sm">
          Interior Design Journal
        </span>

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif leading-tight md:leading-none">
          Design
          <span className="block text-[#D4AF37]">
            Inspiration
          </span>
        </h1>

       <p className="mt-6 text-gray-300 text-base md:text-lg max-w-xl leading-relaxed">
          Explore luxury interiors through expert articles,
          furniture guides, styling ideas, trend forecasts
          and practical DIY tips.
        </p>

      </div>

      <div className="relative">

       <img
  src={blogs[0].image}
  alt=""
  className="rounded-[25px] md:rounded-[35px] h-[300px] sm:h-[450px] md:h-[600px] w-full object-cover"
/>

       <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-black/80 backdrop-blur-xl p-4 md:p-6 rounded-2xl md:rounded-3xl border border-[#D4AF37]/20">

          <p className="text-[#D4AF37] uppercase tracking-[3px] text-sm">
            Featured Article
          </p>

          <h3 className="text-2xl font-serif mt-2">
            Luxury Color Palettes
          </h3>

        </div>

      </div>

    </div>

  </div>

</section> */}


{/* <section className="py-10 md:py-16 bg-black">

  <div className="max-w-6xl mx-auto px-6">

    <div className="flex flex-wrap justify-center gap-4">

      {[
        "All Articles",
        "Color Palettes",
        "Furniture Guides",
        "Trends",
        "DIY Tips"
      ].map((item, index) => (

        <button
          key={index}
          className="px-5 md:px-8 py-3 rounded-full border border-[#D4AF37]/30 bg-white/5 text-white hover:bg-[#D4AF37] hover:text-black transition"
        >
          {item}
        </button>

      ))}

    </div>

  </div>

</section> */}


     {/* <section className="py-20 md:py-32 bg-[#050505] text-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-20">

      <p className="text-[#D4AF37] uppercase tracking-[5px] text-sm">
        Latest Articles
      </p>

      <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif mt-4">
        Design Insights & Ideas
      </h2>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

      {blogs.map((item, index) => (

        <article
          key={index}
          className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#D4AF37]/40 transition"
        >

          <div className="overflow-hidden">

          <img
  src={item.image}
  alt={item.title}
  className="h-56 sm:h-64 md:h-72 w-full object-coverr group-hover:scale-110 transition duration-700"
            />

          </div>

         <div className="p-6 md:p-8">

            <span className="inline-block px-4 py-2 rounded-full text-xs tracking-[2px] uppercase border border-[#D4AF37]/30 text-[#D4AF37]">
              {item.category}
            </span>

           <h3 className="text-xl md:text-2xl font-serif mt-5">
              {item.title}
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
              {item.desc}
            </p>

            <button className="mt-6 text-[#D4AF37] hover:tracking-wider transition">
              Read Article →
            </button>

          </div>

        </article>

      ))}

    </div>

  </div>

</section> */}


















import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";



export const blogs = [
  {
    id: 1,
    title: "Luxury Color Palettes for Modern Homes",
    desc: "Explore gold, beige, ivory and charcoal tones used in premium interior styling.",
    category: "Color Palettes",
    image:
      "https://plus.unsplash.com/premium_photo-1692444606767-02aace4da0fe?q=80&w=1042&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Modern Furniture Selection Guide",
    desc: "How to choose luxury sofas, tables and decor for balanced interior design.",
    category: "Furniture Guides",
    image:
      "https://images.unsplash.com/photo-1682184805271-11671b7ecf4c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Interior Design Trends 2026",
    desc: "Minimal luxury, warm textures and natural materials dominating modern homes.",
    category: "Trends Articles",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "DIY Home Styling Tips",
    desc: "Small upgrades that instantly make your home look premium and elegant.",
    category: "DIY Tips",
    image:
      "https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
{
  id: 5,
  title: "Sustainable Interior Design Ideas",
  desc: "Discover eco-friendly materials, energy-efficient lighting and sustainable decor solutions for modern homes.",
  category: "Eco Design",
  image:
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
},
  {
    id: 6,
  title: "Smart Home Technology for Luxury Spaces",
  desc: "Integrate automation, intelligent lighting and connected devices seamlessly into your interiors.",
  category: "Smart Homes",
  image:
    "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop"
},
];


function Blog() {
const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All Articles");

const articlesRef = useRef(null);


  
const filteredBlogs =
  selectedCategory === "All Articles"
    ? blogs
    : blogs.filter((blog) => blog.category === selectedCategory);
  return (
    <>
      <Navbar />

     

<section className="relative min-h-[85vh] lg:min-h-screen flex items-center bg-orange-50 overflow-hidden text-stone-900 border-t border-orange-100/30">
  
  {/* Elegant Architectural Ambient Lights */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/40 rounded-full blur-[100px] pointer-events-none"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28 w-full">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

      {/* Left Side: Brand Heading & Narrative */}
      <div className="text-center lg:text-left">
        
        {/* Minimal High-End Tracking Label */}
        <span className="text-amber-600 uppercase tracking-[4px] text-xs md:text-sm font-semibold block mb-4">
          Interior Design Journal
        </span>

        {/* Luxury Serif Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 leading-tight">
          Design <span className="block text-amber-600 mt-1">Inspiration</span>
        </h1>

        {/* Fluid Narrative Paragraph */}
        <p className="mt-6 text-stone-600 text-sm md:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
          Explore luxury interiors through expert articles, furniture guides, 
          styling ideas, trend forecasts, and practical DIY tips curation.
        </p>
      </div>

      {/* Right Side: Featured Blog Post Cover Card */}
      <div className="relative h-[320px] sm:h-[450px] lg:h-[580px] w-full rounded-[32px] overflow-hidden shadow-md group max-w-xl mx-auto lg:w-full lg:max-w-none">
        
        <img
          src={blogs[0].image}
          alt="Featured Editorial Cover"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
        />

        {/* Smooth Dark Shading for Text Legibility over Image */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent"></div>

        {/* Premium Floating Overlay Card */}
        <div className="absolute bottom-6 left-0 right-6 bg-white/95 border border-stone-800 p-5 md:p-6 rounded-2xl backdrop-blur-md max-w-xs sm:max-w-sm">
          
          <p className="text-amber-500 text-xs uppercase tracking-wider font-semibold">
            Featured Article
          </p>

          <h3 className="text-xl md:text-2xl font-serif text-stone-900 mt-1.5 tracking-wide">
            Luxury Color Palettes
          </h3>

          <div className="w-8 h-[1px] bg-amber-500/60 mt-4"></div>
        </div>

      </div>

    </div>
  </div>
</section>




{/* section 2 */}



<section className="py-8 md:py-12 bg-orange-50 border-b border-orange-100/60">
  <div className="max-w-6xl mx-auto px-6">
    
    {/* Clean, horizontally scrollable container for mobile screen support */}
    <div className="flex flex-wrap justify-center gap-2.5 md:gap-4">
      {[
        "All Articles",
        "Color Palettes",
        "Furniture Guides",
         "Trends Articles",
        "DIY Tips",
        "Eco Design",
        "Smart Homes",

      ].map((item, index) => (
        <button
  key={index}
  onClick={() => {
    setSelectedCategory(item);

    setTimeout(() => {
      articlesRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }}
  className={`px-5 md:px-7 py-2.5 rounded-full text-xs md:text-sm uppercase tracking-wider font-semibold transition-all duration-300 shadow-sm
    ${
      selectedCategory === item
        ? "bg-stone-900 text-white border border-stone-900 shadow-stone-900/10"
        : "bg-white text-stone-600 border border-orange-100 hover:border-amber-500 hover:text-amber-600 hover:bg-white"
    }`}
>
  {item}
</button>
      ))}
    </div>

  </div>
</section>

      {/* BLOG GRID */}

<section
  ref={articlesRef}
  className="py-16 md:py-28 bg-orange-50 text-stone-900"
>  <div className="max-w-7xl mx-auto px-6">

    {/* Section Header */}
    <div className="text-center mb-16 md:mb-24">
      <p className="text-amber-600 uppercase tracking-[4px] text-xs md:text-sm font-semibold">
        Latest Articles
      </p>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 mt-3">
        Design Insights <span className="text-amber-600">& Ideas</span>
      </h2>
    </div>

    {/* Articles Grid Framework */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
      {filteredBlogs.map((item, index) => ( 
        <article
          key={index}
          className="group overflow-hidden rounded-[32px] border border-orange-100/70 bg-white shadow-sm hover:shadow-md transition duration-500 flex flex-col justify-between"
        >
          
          <div>
            {/* Image Frame Holder */}
            <div className="overflow-hidden h-56 sm:h-64 relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-stone-900/[0.02] mix-blend-multiply"></div>
            </div>

            {/* Content Details Block */}
            <div className="p-6 md:p-8">
              
              {/* Category Micro Badge */}
              <span className="inline-block px-3 py-1 bg-orange-100/50 text-amber-700 text-[10px] md:text-xs font-semibold tracking-wider uppercase rounded-full">
                {item.category}
              </span>

              {/* Title with Classic Serif Typography */}
              <h3 className="text-xl md:text-2xl font-serif text-stone-900 mt-4 leading-snug group-hover:text-amber-600 transition duration-300">
                {item.title}
              </h3>

              {/* Fluid Description Paragraph */}
              <p className="text-stone-600 text-sm mt-3 leading-relaxed line-clamp-3">
                {item.desc}
              </p>
            </div>
          </div>

          {/* Read Article Action Trigger (Bottom Aligned) */}
          <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
          <button
  onClick={() => navigate(`/blog/${item.id}`)}
  className="inline-flex items-center gap-2 text-stone-800 text-xs uppercase tracking-wider font-bold group/btn hover:text-amber-600 transition-colors duration-300"
>
  <span>Read Article</span>
  <span className="transform group-hover/btn:translate-x-1.5 transition-transform duration-300">
    →
  </span>
</button>
          </div>

        </article>
      ))}
    </div>

  </div>
</section>


{/* <section className="py-20 md:py-32 bg-black text-white text-center">

  <div className="max-w-4xl mx-auto px-6">

    <p className="text-[#D4AF37] uppercase tracking-[5px]">
      Stay Inspired
    </p>

    <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif mt-5">
      Get Weekly Design Ideas
    </h2>

    <p className="text-gray-400 mt-6">
      Receive luxury interior inspiration, styling tips and
      trend forecasts directly in your inbox.
    </p>

   <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center items-center">

      <input
  type="email"
  placeholder="Enter your email"
  className="bg-white/5 border border-white/10 px-6 py-4 rounded-full w-full max-w-md md:w-[400px] outline-none"
/>

      <button className="bg-[#D4AF37] text-black px-8 py-4 rounded-full font-semibold">
        Subscribe
      </button>

    </div>

  </div>

</section> */}


<section className="py-20 md:py-28 bg-orange-50 text-center">
  <div className="max-w-5xl mx-auto px-6">
    
    {/* High-End Architectural Inner Panel Card */}
    <div className="relative overflow-hidden bg-stone-900 rounded-[32px] py-16 md:py-20 px-6 md:px-16 shadow-xl border border-stone-800">
      
      {/* Soft Luxury Warm Ambient Lighting Accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-2xl mx-auto">
        
        {/* Editorial Subtitle */}
        <p className="text-amber-500 uppercase tracking-[4px] text-xs md:text-sm font-semibold mb-4">
          Stay Inspired
        </p>

        {/* Serif Luxury Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white leading-tight">
          Get Weekly <span className="text-amber-500">Design Ideas</span>
        </h2>

        {/* Narrative Paragraph */}
        <p className="text-stone-400 mt-5 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
          Receive luxury interior inspiration, styling guides, and trend forecasts directly in your inbox.
        </p>

        {/* Premium Integrated Form Control Inputs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
          
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-stone-950/60 border border-stone-800 text-white placeholder-stone-500 px-6 py-3.5 md:py-4 rounded-full w-full outline-none focus:border-amber-500/60 focus:bg-stone-950 transition-all duration-300 text-sm"
          />

          <button className="bg-amber-500 text-stone-950 px-8 py-3.5 md:py-4 rounded-full font-semibold text-xs md:text-sm uppercase tracking-wider hover:bg-white hover:text-stone-950 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-md shadow-amber-500/10 w-full sm:w-auto shrink-0">
            Subscribe
          </button>

        </div>

      </div>
    </div>

  </div>
</section>

      <Footer />
    </>
  );
}

export default Blog;