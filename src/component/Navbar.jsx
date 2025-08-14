import { useState } from "react";
import {
  FaBars,
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <div className="border-b relative">
      {/* Top Navbar */}
      <div className="flex items-center justify-between w-11/12 mx-auto py-3">
        <div className="flex items-center gap-4 flex-shrink-0">
          <Link to='/'>
            <img src={logo} alt="Grogin Logo" className="h-8" />
          </Link>

          <button className="flex items-center gap-2 bg-purple-100 px-4 py-3 rounded-md text-purple-700 font-medium">
            <FaBars /> Categories
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 rounded-md px-4 flex-1 mx-4">
          <input
            type="text"
            placeholder="Search for products, categories or brands..."
            className="flex-1 bg-transparent outline-none py-4 text-sm"
          />
          <FaSearch className="text-gray-500" />
        </div>

        {/* Right  */}
        <div className="flex items-center gap-6 flex-shrink-0">
          <div className="flex items-center gap-1 cursor-pointer">
            <FaUser className="text-xl" />
            <span>Account</span>
          </div>
          <div className="relative flex items-center gap-1 cursor-pointer">
            <FaHeart className="text-xl" />
            <span>Wishlist</span>
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1">
              0
            </span>
          </div>
          <div className="relative flex items-center gap-1 cursor-pointer">
            <FaShoppingCart className="text-xl" />
            <span>Your Cart</span>
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1">
              0
            </span>
          </div>
        </div>
      </div>
      <hr />
      {/* Bottom Navbar */}
      <div className="flex items-center gap-6 w-11/12 mx-auto py-2 text-lg font-medium relative">
        <div className="cursor-pointer">Home</div>

        {/* Shop  Menu */}
        <div
          className="relative"
          onMouseEnter={() => setShopOpen(true)}
          onMouseLeave={() => setShopOpen(false)}
        >
          <div className="cursor-pointer flex items-center gap-1">
            Shop <IoIosArrowDown />
          </div>

          {shopOpen && (
            <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md p-6 w-[90vw] grid grid-cols-5 gap-6 z-50">
              {/* Column 1 */}
              <div>
                <h3 className="font-semibold mb-2  ">Shop Lists </h3>
                <ul className="space-y-1 text-sm">
                  <li>Shop Default</li>
                  <li>Shop Right Sidebar</li>
                  <li>Shop Wide</li>
                  <li>Filters Area</li>
                  <li>List Left Sidebar</li>
                  <li>Load More Button</li>
                  <li>Infinite Scrolling</li>
                  <li>Image Hover – Slider</li>
                  <li>Image Hover – Flip</li>
                  <li>Image Hover – Zoom</li>
                  <li>Product Box Variable</li>
                  <li>Sale Countdown</li>
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <h3 className="font-semibold mb-2">Product Detail</h3>
                <ul className="space-y-1 text-sm">
                  <li>Product Default</li>
                  <li>Product Variable</li>
                  <li>Product Grouped</li>
                  <li>Product External</li>
                  <li>Product Downloadable</li>
                  <li>Zoom Image</li>
                  <li>Product With Video</li>
                  <li>Thumbnails Left</li>
                  <li>Gallery 1 Column</li>
                  <li>Gallery 2 Columns</li>
                  <li>Carousel 2 Columns</li>
                  <li>Low Stock Alert</li>
                </ul>
              </div>

              {/* Column 3 */}
              <div>
                <h3 className="font-semibold mb-2">Product Features</h3>
                <ul className="space-y-1 text-sm">
                  <li>Buy Now Button</li>
                  <li>Order on WhatsApp</li>
                  <li>Stock Progress Bar</li>
                  <li>Sale Countdown</li>
                  <li>Sticky Add to Cart</li>
                  <li>Sticky Tab Titles</li>
                  <li>Reviews Without Tab</li>
                  <li>Product Full Width</li>
                  <li>Sticky Description</li>
                  <li>Product Shipping Class</li>
                  <li>Vertical Tabs</li>
                  <li>Accordion Tabs</li>
                </ul>
              </div>

              {/* Column 4 */}
              <div>
                <h3 className="font-semibold mb-2">Shop Pages</h3>
                <ul className="space-y-1 text-sm">
                  <li>Cart</li>
                  <li>Checkout</li>
                  <li>My account</li>
                  <li>Wishlist</li>
                  <li>Compare</li>
                  <li>Order Tracking</li>
                  <li>Featured Products</li>
                  <li>Best Selling Products</li>
                  <li>Catalog Mode</li>
                  <li>Stock Progress Bar</li>
                  <li>Stock Status</li>
                </ul>
              </div>

              {/* Column 5 */}
              <div>
                <h3 className="font-semibold mb-2">Shop Layouts</h3>
                <ul className="space-y-1 text-sm">
                  <li>Two Columns</li>
                  <li>Two Columns Wide</li>
                  <li>Three Columns</li>
                  <li>Three Columns Wide</li>
                  <li>Four Columns</li>
                  <li>Four Columns Wide</li>
                  <li>Five Columns Wide</li>
                  <li>Six Columns Wide</li>
                  <li>Shipping Class</li>
                  <li>Product SKU</li>
                  <li>Additional Information</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="cursor-pointer">Fruits & Vegetables</div>
        <div className="cursor-pointer">Beverages</div>
        <div className="cursor-pointer">Blog</div>
        <div className="cursor-pointer">Contact</div>

        <div className="ml-auto flex items-center gap-6">
          <div className="cursor-pointer">Trending Products</div>
          <div className="flex items-center gap-1 text-red-500 cursor-pointer">
            Almost Finished
            <span className="bg-red-500 text-white text-xs px-1 rounded">
              SALE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
