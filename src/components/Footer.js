import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-yellow-200 text-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About */}
        <div>
          <h3 className="font-bold mb-2 border-b-2 border-black inline-block">ABOUT</h3>
          <ul className="mt-4 space-y-2">
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Wedding Destination */}
        <div>
          <h3 className="font-bold mb-2 border-b-2 border-black inline-block">WEDDING DESTINATION</h3>
          <ul className="mt-4 space-y-2">
            <li><Link to="/wedding-in-india">Wedding in India</Link></li>
            <li><Link to="/wedding-in-jaipur">Wedding in Jaipur</Link></li>
            <li><Link to="/wedding-in-pushkar">Wedding in Pushkar</Link></li>
            <li><Link to="/wedding-in-ranthambore">Wedding in Ranthambore</Link></li>
            <li><Link to="/wedding-in-udaipur">Wedding in Udaipur</Link></li>
            <li><Link to="/wedding-in-jodhpur">Wedding in Jodhpur</Link></li>
            <li><Link to="/wedding-in-bikaner">Wedding in Bikaner</Link></li>
            <li><Link to="/wedding-in-jaisalmer">Wedding in Jaisalmer</Link></li>
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

