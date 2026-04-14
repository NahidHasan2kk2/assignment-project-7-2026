import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import footerImg from '../../../assets/images/logo-xl.png'
const Footer = () => {
 return (
  <footer className="bg-gray-900 text-white mt-10">
   <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col items-center text-center">

    {/* Logo / Image */}
    <img
     src={footerImg}
     className="mb-2"
    />

    {/* Description */}
    <p className="opacity-35">
     Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
    </p>

    {/* Social Icons */}
    <div className=" text-xl mb-6">
     <h1 className="font-bold text-2xl mt-3">Social Links</h1>
     <div className="w-full border-t border-gray-700 my-4"></div>
     <div className="flex gap-5 ">
      <a href="#" className="hover:text-blue-500 transition">
       <FaFacebook />
      </a>
      <a href="#" className="hover:text-sky-400 transition">
       <FaTwitter />
      </a>
      <a href="#" className="hover:text-pink-500 transition">
       <FaInstagram />
      </a>
      <a href="#" className="hover:text-gray-400 transition">
       <FaGithub />
      </a>
     </div>
    </div>

    {/* Divider */}
    <div className="w-full border-t border-gray-700 my-4"></div>

    {/* Bottom Section */}
    <div className="text-sm text-gray-400 flex  flex-col md:flex-row gap-2 md:gap-6 items-center">
     <p>© {new Date().getFullYear()} My Website. All rights reserved.</p>

     <div className="flex gap-4">
      <a href="#" className="hover:text-white">
       Terms
      </a>
      <a href="#" className="hover:text-white">
       Privacy
      </a>
     </div>
    </div>

   </div>
  </footer >
 );
};

export default Footer;