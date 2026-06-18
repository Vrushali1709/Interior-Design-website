import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith("/project/");
const isBlogPage = location.pathname.startsWith("/blog/");

  // Check agar current page warm ivory background wala hai ya nahi
  const isLightPage = ["/process", "/testimonials", "/team", "/blog" ,"/contact"].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic colors generate karne ke liye conditions
const textClass =
  scrolled || isProjectPage 
    ? "text-white"
    : isLightPage
    ? "text-stone-900"
    : "text-white";

const navBgClass =
  scrolled || isProjectPage || isBlogPage
    ? "bg-stone-900/95 backdrop-blur-xl shadow-lg border-b border-stone-800"
    : isLightPage
    ? "bg-orange-50/60 backdrop-blur-md border-b border-orange-100/50"
    : "bg-transparent";

  return (
    <nav className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300  ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex justify-between items-center">

        {/* Logo - Dynamic Color */}
        <Link to="/">
          <h1 className={`text-2xl md:text-3xl font-serif transition-colors duration-300 ${textClass}`}>
            Interior Design
          </h1>
        </Link>

        {/* Desktop Menu - Dynamic Color */}
        <ul className={`hidden lg:flex gap-8 font-medium transition-colors duration-300 ${textClass}`}>
          <li className="hover:text-[#D4AF37] transition-colors"><Link to="/">Home</Link></li>
          <li className="hover:text-[#D4AF37] transition-colors"><Link to="/about">About Us</Link></li>
          <li className="hover:text-[#D4AF37] transition-colors"><Link to="/services">Services</Link></li>
          <li className="hover:text-[#D4AF37] transition-colors"><Link to="/portfolio">Portfolio</Link></li>
          <li className="hover:text-[#D4AF37] transition-colors"><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Desktop Button */}
        <Link
          to="/contact"
          className="hidden lg:block bg-[#D4AF37] text-black px-6 py-3 rounded-xl font-semibold hover:bg-stone-900 hover:text-white transition-all duration-300 shadow-sm"
        >
          Free Consultation
        </Link>

        {/* Mobile Menu Button - Dynamic Color */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden text-3xl transition-colors duration-300 ${textClass}`}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

      </div>

      {/* Mobile Menu */}
     {menuOpen && (
  <div
    className={`lg:hidden border-t backdrop-blur-xl transition-all duration-300 ${
      (isLightPage && !scrolled && !isBlogPage)
        ? "bg-orange-50/95 border-orange-100"
        : "bg-[#111111]/95 border-white/10"
    }`}
  >
          <ul
  className={`flex flex-col text-center py-6 space-y-5 font-medium ${
    (isLightPage && !scrolled && !isBlogPage)
      ? "text-stone-900"
      : "text-white"
  }`}
>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-[#D4AF37] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-[#D4AF37] transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={() => setMenuOpen(false)} className="hover:text-[#D4AF37] transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={() => setMenuOpen(false)} className="hover:text-[#D4AF37] transition-colors">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-[#D4AF37] transition-colors">
                Contact
              </Link>
            </li>
            <li className="pt-2">
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="inline-block bg-[#D4AF37] text-black px-6 py-3 rounded-xl font-semibold shadow-md"
              >
                Free Consultation
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;









// import { useState, useEffect } from "react";

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-orange-50/80 backdrop-blur-md border-b border-orange-100/60 shadow-sm text-stone-900"
//           : "bg-transparent text-white"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
//         {/* Brand Logo */}
//         <div className="text-xl md:text-2xl font-serif tracking-wider font-semibold">
//           INTERIOR<span className={isScrolled ? "text-amber-600" : "text-amber-400"}>STUDIO</span>
//         </div>

//         {/* Navigation Links */}
//         <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-medium">
//           <a href="#" className="hover:text-amber-600 transition">Home</a>
//           <a href="#" className="hover:text-amber-600 transition">About</a>
//           <a href="#" className="hover:text-amber-600 transition">Portfolio</a>
//           <a href="#" className="hover:text-amber-600 transition">Contact</a>
//         </div>

//         {/* Mini Action Button */}
//         <div>
//           <button
//             className={`text-xs uppercase tracking-wider font-semibold px-6 py-2.5 rounded-full transition duration-300 ${
//               isScrolled
//                 ? "bg-stone-900 text-white hover:bg-amber-600"
//                 : "bg-white/20 text-white backdrop-blur-sm border border-white/20 hover:bg-white hover:text-stone-900"
//             }`}
//           >
//             Inquire Now
//           </button>
//         </div>

//       </div>
//     </nav>
//   );
// }