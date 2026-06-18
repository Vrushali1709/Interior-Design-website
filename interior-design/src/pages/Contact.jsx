// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import ContactHero from "../components/ContactHero";
// import ContactForm from "../components/ContactForm";

// function Contact() {
//   return (
//     <>
//       <Navbar />
//       <ContactHero />
//       <ContactForm />
//       <Footer />
//     </>
//   );
// }

// export default Contact;





import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      {/* HERO */}
    <section className="relative min-h-screen lg:h-[85vh] flex items-center bg-orange-50 overflow-hidden text-stone-900 border-t border-orange-100/30">
  
  {/* Elegant architectural background pattern spacer if needed, clean layout */}
  <div className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28 w-full">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      {/* Left Column: Heading & Key Performance Stats */}
      <div className="text-center lg:text-left">

        {/* Clean Line-free Pill Text matching top menu design */}
        <span className="text-amber-600 uppercase tracking-[4px] text-xs md:text-sm font-semibold block mb-4">
          Free Consultation
        </span>

        {/* High-End Luxury Serif Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 leading-tight">
          Let's Design <span className="block text-amber-600 mt-1">Your Dream Space</span>
        </h1>

        {/* Brand Narrative Text */}
        <p className="mt-6 text-stone-600 text-sm md:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
          Share your vision with our experts and receive a personalized
          interior design consultation tailored to your lifestyle and budget.
        </p>

        {/* Premium Data Metrics Stack */}
        <div className="flex justify-center lg:justify-start gap-10 sm:gap-14 mt-10 pt-4 border-t border-orange-200/50 max-w-md mx-auto lg:mx-0">

          <div className="space-y-1">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-amber-600">250+</h3>
            <p className="text-stone-500 text-xs uppercase tracking-wider font-medium">Projects Completed</p>
          </div>

          <div className="space-y-1">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-amber-600">98%</h3>
            <p className="text-stone-500 text-xs uppercase tracking-wider font-medium">Client Satisfaction</p>
          </div>

        </div>

      </div>

      {/* Right Column: Premium Form/Info Box Container */}
      <div className="bg-white border border-orange-100/80 rounded-[32px] p-8 md:p-12 shadow-md max-w-xl mx-auto lg:w-full lg:max-w-none">

        {/* Form Title */}
        <h3 className="text-2xl md:text-3xl font-serif text-stone-900 mb-8 tracking-wide">
          Contact Information
        </h3>

        {/* Minimal Info Fields Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">

          <div className="space-y-1">
            <p className="text-amber-600 text-xs uppercase tracking-wider font-semibold">Phone</p>
            <p className="text-stone-700 text-sm md:text-base font-medium hover:text-amber-600 transition duration-200 cursor-pointer">
              +91 98765 43210
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-amber-600 text-xs uppercase tracking-wider font-semibold">Email</p>
            <p className="text-stone-700 text-sm md:text-base font-medium hover:text-amber-600 transition duration-200 cursor-pointer break-all">
              hello@interiorstudio.com
            </p>
          </div>

          <div className="space-y-1 sm:col-span-2 border-t border-stone-100 pt-4">
            <p className="text-amber-600 text-xs uppercase tracking-wider font-semibold">Office Address</p>
            <p className="text-stone-700 text-sm md:text-base leading-relaxed">
              Ahmedabad, Gujarat, India
            </p>
          </div>

          <div className="space-y-1 sm:col-span-2 border-t border-stone-100 pt-4">
            <p className="text-amber-600 text-xs uppercase tracking-wider font-semibold">Working Hours</p>
            <p className="text-stone-700 text-sm md:text-base">
              Mon - Sat | 9:00 AM - 7:00 PM
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>
      {/* FORM */}
     <section className="py-20 md:py-32 bg-orange-50 text-stone-900 border-t border-orange-100/30">
  <div className="max-w-4xl mx-auto px-6">

    {/* Section Header */}
    <div className="text-center mb-16 -mt-18">
      <p className="text-amber-600 uppercase tracking-[4px] text-xs md:text-sm font-semibold">
        Project Inquiry
      </p>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 mt-3 leading-tight">
        Start Your <span className="text-amber-600">Interior Journey</span>
      </h2>

      <p className="text-stone-600 mt-5 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
        Tell us about your project and our experts will contact you
        with a customized consultation plan.
      </p>
    </div>

    {/* Premium Form Wrapper Box */}
    <form className="bg-white border border-orange-100/80 rounded-[32px] p-6 md:p-12 shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Full Name Input */}
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-orange-50/40 border border-stone-200 text-stone-800 placeholder-stone-400 p-4 rounded-xl outline-none focus:border-amber-600 focus:bg-white transition duration-200 text-sm md:text-base"
          />
        </div>

        {/* Email Address Input */}
        <div className="flex flex-col">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-orange-50/40 border border-stone-200 text-stone-800 placeholder-stone-400 p-4 rounded-xl outline-none focus:border-amber-600 focus:bg-white transition duration-200 text-sm md:text-base"
          />
        </div>

        {/* Phone Number Input */}
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full bg-orange-50/40 border border-stone-200 text-stone-800 placeholder-stone-400 p-4 rounded-xl outline-none focus:border-amber-600 focus:bg-white transition duration-200 text-sm md:text-base"
          />
        </div>

        {/* City / Location Input */}
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="City / Location"
            className="w-full bg-orange-50/40 border border-stone-200 text-stone-800 placeholder-stone-400 p-4 rounded-xl outline-none focus:border-amber-600 focus:bg-white transition duration-200 text-sm md:text-base"
          />
        </div>

        {/* Project Type Dropdown */}
        <div className="flex flex-col">
          <select className="w-full bg-orange-50/40 border border-stone-200 text-stone-700 p-4 rounded-xl outline-none focus:border-amber-600 focus:bg-white transition duration-200 text-sm md:text-base cursor-pointer">
            <option className="text-stone-400" disabled selected>Select Project Type</option>
            <option className="text-stone-800">Residential Design</option>
            <option className="text-stone-800">Commercial Design</option>
            <option className="text-stone-800">Kitchen Design</option>
            <option className="text-stone-800">Bathroom Design</option>
            <option className="text-stone-800">Turnkey Project</option>
            <option className="text-stone-800">3D Visualization</option>
          </select>
        </div>

        {/* Budget Range Dropdown */}
        <div className="flex flex-col">
          <select className="w-full bg-orange-50/40 border border-stone-200 text-stone-700 p-4 rounded-xl outline-none focus:border-amber-600 focus:bg-white transition duration-200 text-sm md:text-base cursor-pointer">
            <option className="text-stone-400" disabled selected>Select Budget Range</option>
            <option className="text-stone-800">₹5L - ₹10L</option>
            <option className="text-stone-800">₹10L - ₹25L</option>
            <option className="text-stone-800">₹25L - ₹50L</option>
            <option className="text-stone-800">₹50L+</option>
          </select>
        </div>

      </div>

      {/* Requirements Textarea */}
      <div className="mt-6">
        <textarea
          rows="5"
          placeholder="Describe your project requirements..."
          className="w-full bg-orange-50/40 border border-stone-200 text-stone-800 placeholder-stone-400 p-4 rounded-xl outline-none focus:border-amber-600 focus:bg-white transition duration-200 text-sm md:text-base resize-none"
      	></textarea>
      </div>

      {/* Solid High-Contrast Submit Button */}
      <button
        type="submit"
        className="mt-8 w-full bg-stone-900 text-white py-4 rounded-xl font-medium tracking-wide text-sm md:text-base hover:bg-amber-600 transition duration-300 shadow-sm"
      >
        Book Free Consultation →
      </button>

    </form>

  </div>
</section>



      <Footer />
    </>
  );
}

export default Contact; 