// import { Link } from "react-router-dom";
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// function Footer() {
//   return (


    
//     <footer className="bg-stone-950 text-stone-200 border-t border-stone-900">



//        <div className="mt-16 md:mt-24 border border-stone-900 bg-stone-900/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center">
//           <h3 className="text-2xl md:text-4xl font-serif text-stone-100">
//             Ready To Transform Your Space?
//           </h3>

//           <p className="text-stone-400 mt-4 text-sm md:text-base">
//             Book a free consultation with our design experts.
//           </p>

//           <Link
//             to="/contact"
//             className="inline-block mt-6 bg-amber-500 hover:bg-amber-600 text-stone-950 px-8 py-3.5 rounded-xl font-semibold transition duration-300 shadow-md shadow-amber-500/10"
//           >
//             Get Consultation →
//           </Link>
//         </div>

//       <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20 ">

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 translate-x-[-6%]">

//           {/* Brand Column */}
//           <div className="text-center lg:text-left">
//             <h2 className="text-3xl md:text-4xl font-serif text-stone-100 tracking-wide">
//               Interior Design                                      
//             </h2>

//             <div className="w-16 h-[2px] bg-amber-500 mt-4 mx-auto lg:mx-0"></div>

//             <p className="mt-6 text-stone-400 text-sm md:text-base leading-relaxed">
//               Creating luxury interiors that blend timeless elegance,
//               functionality and exceptional craftsmanship for modern living.
//             </p>

//             {/* Social Icons with custom transitions */}
//             {/* <div className="flex justify-center lg:justify-start gap-4 mt-6">
//               <a
//                 href="#"
//                 className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-400 hover:bg-amber-500 hover:text-stone-950 hover:border-amber-500 transition-all duration-300 cursor-pointer"
//               >
//                 <FaFacebookF size={14} />
//               </a>

//               <a
//                 href="#"
//                 className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-400 hover:bg-amber-500 hover:text-stone-950 hover:border-amber-500 transition-all duration-300 cursor-pointer"
//               >
//                 <FaInstagram size={14} />
//               </a>

//               <a
//                 href="#"
//                 className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-400 hover:bg-amber-500 hover:text-stone-950 hover:border-amber-500 transition-all duration-300 cursor-pointer"
//               >
//                 <FaLinkedinIn size={14} />
//               </a>
//             </div> */}
//           </div>

//           {/* Navigation Column */}
//           <div className="text-center lg:text-left translate-x-27">
//             <h3 className="text-stone-100 font-serif font-medium tracking-wider text-lg mb-5">
//               Navigation
//             </h3>

//             <ul className="space-y-3 text-stone-400 text-sm md:text-base">
//               {['Home', 'About', 'Services', 'Portfolio', 'Process', 'Team', 'Testimonials', 'Blog', 'Contact'].map((item) => {
//                 const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`;
//                 return (
//                   <li key={item}>
//                     <Link to={path} className="hover:text-amber-400 transition duration-200">
//                       {item}
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>

//           {/* Services Column */}
         

//           {/* Contact Column */}
//           <div className="text-center lg:text-left translate-x-25">
//             <h3 className="text-stone-100 font-serif font-medium tracking-wider text-lg mb-5">
//               Contact
//             </h3>

//             <ul className="space-y-4 text-stone-400 text-sm md:text-base">
//               <li>Ahmedabad, Gujarat</li>
//               <li className="hover:text-amber-400 transition cursor-pointer">+91 98765 43210</li>
//               <li className="hover:text-amber-400 transition cursor-pointer">info@interiorstudio.com</li>
//             </ul>


//              <div className="flex justify-center lg:justify-start gap-4 mt-6">
//               <a
//                 href="#"
//                 className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-400 hover:bg-amber-500 hover:text-stone-950 hover:border-amber-500 transition-all duration-300 cursor-pointer"
//               >
//                 <FaFacebookF size={14} />
//               </a>

//               <a
//                 href="#"
//                 className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-400 hover:bg-amber-500 hover:text-stone-950 hover:border-amber-500 transition-all duration-300 cursor-pointer"
//               >
//                 <FaInstagram size={14} />
//               </a>    

//               <a
//                 href="#"
//                 className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-400 hover:bg-amber-500 hover:text-stone-950 hover:border-amber-500 transition-all duration-300 cursor-pointer"
//               >
//                 <FaLinkedinIn size={14} />
//               </a>
//             </div>
//           </div>

//         </div>

//         {/* Consultation Box (Clean design with smooth border) */}
       

//         {/* Copyright Section */}
//         <div className="border-t border-stone-900 mt-12 md:mt-16 pt-8 text-center text-stone-600 text-xs md:text-sm tracking-wide">
//           © 2026 Interior Studio. All Rights Reserved.
//         </div>

//       </div>
//     </footer>
//   );
// }

// export default Footer;










import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-200 border-t border-stone-900">

      {/* CTA Section */}
      {/* <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="mt-16 md:mt-24 border border-stone-800 bg-stone-900/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-4xl font-serif text-stone-100">
            Ready To Transform Your Space?
          </h3>

          <p className="text-stone-400 mt-4 text-sm md:text-base">
            Book a free consultation with our design experts.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-6 bg-amber-500 hover:bg-amber-600 text-stone-950 px-8 py-3.5 rounded-xl font-semibold transition"
          >
            Get Consultation →
          </Link>
        </div>
      </div> */}

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 ">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 ">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-serif text-stone-100 ">
              Interior Design
            </h2>

            <div className="w-16 h-[2px] bg-amber-500 mt-4"></div>

            <p className="mt-6 text-stone-400 text-sm leading-relaxed">
              Creating luxury interiors that blend timeless elegance,
              functionality and exceptional craftsmanship for modern living.
            </p>
          </div>

          {/* Navigation */}
          <div className="translate-x-18">
            <h3 className="text-stone-100 font-serif text-lg mb-5">Navigation</h3>

            <ul className="space-y-3 text-stone-400 text-sm">
              {['Home', 'About', 'Services', 'Portfolio', 'Process', 'Testimonials',  'Blog', 'Team', 'Contact'].map((item) => {
                const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                return (
                  <li key={item}>
                    <Link to={path} className="hover:text-amber-400 transition">
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center lg:text-left translate-x-0">
            <h3 className="text-stone-100 font-serif font-medium tracking-wider text-lg mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-stone-400 text-sm md:text-base">
              {[
                { name: 'Residential Design', slug: 'residential' },
                { name: 'Commercial Design', slug: 'commercial' },
                { name: 'Kitchen Design', slug: 'kitchen' },
                { name: 'Bathroom Design', slug: 'bathroom' },
                { name: 'Turnkey Projects', slug: 'turnkey' },
                { name: '3D Visualization', slug: 'visualization' },
              ].map((service) => (
                <li key={service.name}>
                  <Link to={`/services#${service.slug}`} className="hover:text-amber-400 transition duration-200">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-stone-100 font-serif text-lg mb-5">Contact</h3>

            <ul className="space-y-3 text-stone-400 text-sm">
              <li>Ahmedabad, Gujarat</li>
              <li className="hover:text-amber-400 cursor-pointer">
                +91 98765 43210
              </li>
              <li className="hover:text-amber-400 cursor-pointer">
                info@interiorstudio.com
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-400 hover:bg-amber-500 hover:text-stone-950 transition"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-stone-900 mt-12 pt-8 text-center text-stone-600 text-xs">
          © 2026 Interior Studio. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;