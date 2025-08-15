import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import master from "../assets/master.svg";
import paypal from "../assets/paypal.svg";
import visa from "../assets/visa.svg";
const Footer = () => {
  return (
    <footer className="bg-[#F3F4F6] text-gray-800">
      <div className="w-11/12 mx-auto px-6 py-10 border-b border-gray-200">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold">
              Join our newsletter for £10 offs
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Register now to get latest updates on promotions & coupons. Don’t
              worry, we’re not spam!
            </p>
          </div>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none w-64"
            />
            <button className="bg-purple-600 text-white px-5 py-2 rounded-r-lg hover:bg-purple-700">
              SEND
            </button>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          By subscribing you agree to our
          <a href="#" className="underline">
            Terms & Conditions
          </a>{" "}
          and
          <a href="#" className="underline">
            Privacy & Cookies Policy
          </a>
          .
        </p>
      </div>

      <div className="w-11/12 mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-sm">
        <div>
          <h3 className="font-bold mb-3">Do You Need Help?</h3>
          <p className="text-gray-500 mb-4">
            Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat.
            Pressa fåmoska.
          </p>
          <p className="flex items-center gap-2 text-gray-700">
            📞 Monday-Friday: 08am–9pm
          </p>
          <p className="text-lg font-bold">0 800 300-353</p>
          <p className="mt-3 flex items-center gap-2 text-gray-700">
            📧 Need help with your order?
          </p>
          <a href="mailto:info@example.com" className="font-bold">
            info@example.com
          </a>
        </div>

        <div>
          <h3 className="font-bold mb-3">Make Money with Us</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#">Sell on Grogin</a>
            </li>
            <li>
              <a href="#">Sell Your Services on Grogin</a>
            </li>
            <li>
              <a href="#">Sell on Grogin Business</a>
            </li>
            <li>
              <a href="#">Sell Your Apps on Grogin</a>
            </li>
            <li>
              <a href="#">Become an Affiliate</a>
            </li>
            <li>
              <a href="#">Advertise Your Products</a>
            </li>
            <li>
              <a href="#">Sell-Publish with Us</a>
            </li>
            <li>
              <a href="#">Become an Blowwe Vendor</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Let Us Help You</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#">Accessibility Statement</a>
            </li>
            <li>
              <a href="#">Your Orders</a>
            </li>
            <li>
              <a href="#">Returns & Replacements</a>
            </li>
            <li>
              <a href="#">Shipping Rates & Policies</a>
            </li>
            <li>
              <a href="#">Refund and Returns Policy</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Cookie Settings</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Get to Know Us</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#">Careers for Grogin</a>
            </li>
            <li>
              <a href="#">About Grogin</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Grogin Devices</a>
            </li>
            <li>
              <a href="#">Customer reviews</a>
            </li>
            <li>
              <a href="#">Social Responsibility</a>
            </li>
            <li>
              <a href="#">Store Locations</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Download our app</h3>
          <div href="#" className="flex  gap-2 mb-3">
            <img
              src="https://klbtheme.com/grogin/wp-content/uploads/2023/11/google-play-button-dark.png"
              alt="Google Play"
              className="h-12"
            />
            <p className="text-gray-500 text-xs">
              Download App Get -10% Discount
            </p>
          </div>
          <div href="#" className="flex  gap-2 mb-3">
            <img
              src="https://klbtheme.com/grogin/wp-content/uploads/2023/10/apple-store-button-dark.png"
              alt="App Store"
              className="h-12"
            />
            <p className="text-gray-500 text-xs">
              Download App Get -20% Discount
            </p>
          </div>

          <span className="d-block text-12 mt-30 sm-mt-50 mb-10">
            Follow us on social media:
          </span>
          <div class="flex mt-2 ">
            <ul className="flex gap-2 ">
              <li>
                <a
                  href="https://www.facebook.com/"
                  className=""
                  target="_blank"
                >
                  <FaFacebookF className="text-2xl" />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/" target="_blank">
                  <FaTwitter className="text-2xl" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <FaInstagram className="text-2xl" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" target="_blank">
                  <FaLinkedin className="text-2xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-10 text-xs text-gray-500 w-11/12 mx-auto  flex flex-col md:flex-row justify-between items-center gap-3">
        <p>
          Copyright 2025 © Grogin WooCommerce WordPress Theme. All rights
          reserved. Powered by{" "}
          <a href="#" className="text-blue-500">
            KLBTheme
          </a>
          .
        </p>
        <div className="flex gap-3">
          <img src={visa} alt="Visa" className="h-4" />
          <img src={master} alt="Master" className="h-4" />
          <img src={paypal} alt="Paypal" className="h-4" />
        </div>
        <div className="flex gap-4">
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Order Tracking</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
