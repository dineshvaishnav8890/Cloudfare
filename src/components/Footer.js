import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-yellow-200 text-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About */}
        <div>
          <h3 className="font-bold mb-2 border-b-2 border-black inline-block">ABOUT</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Wedding Destination */}
        <div>
          <h3 className="font-bold mb-2 border-b-2 border-black inline-block">WEDDING DESTINATION</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#">Wedding in India</a></li>
            <li><a href="#">Wedding in Jaipur</a></li>
            <li><a href="#">Wedding in Pushkar</a></li>
            <li><a href="#">Wedding in Ranthambore</a></li>
            <li><a href="#">Wedding in Udaipur</a></li>
            <li><a href="#">Wedding in Jodhpur</a></li>
            <li><a href="#">Wedding in Bikaner</a></li>
            <li><a href="#">Wedding in Jaisalmer</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold mb-2 border-b-2 border-black inline-block">OUR SERVICES</h3>
          <ul className="mt-4 space-y-2">
            <li>Wedding Planning</li>
            <li>Venues Selection / Destination</li>
            <li>Wedding Communication</li>
            <li>Save the Date</li>
            <li>Design and Decor</li>
            <li>Hospitality</li>
            <li>Entertainment</li>
            <li>Photography</li>
            <li>Catering</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold mb-2 border-b-2 border-black inline-block">CONTACT INFO</h3>
          <div className="mt-4 space-y-2 text-sm">
            <p><strong>Address:</strong> Sanchar Chandra Road, Jaipur 302001, Rajasthan</p>
            <p><strong>Phone:</strong> 24x7 : 8890577004</p>
            <p><strong>Email:</strong> Dineshvaishnav8890@gmail.com</p>
          </div>

          {/* Social Icons with links */}
          <div className="flex gap-4 mt-4 text-xl">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/lalitsaini1219" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
              <FaYoutube />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-600">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-blue-600">
        My Merrige Wedding Planners Pvt.Ltd.
      </div>
    </footer>
  );
};

export default Footer;

