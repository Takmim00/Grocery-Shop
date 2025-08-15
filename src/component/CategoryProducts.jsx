import { FaHeart, FaShoppingCart } from "react-icons/fa";
import apple from "../assets/apple.jpg";
import banner1 from "../assets/banner-20.jpg";
import banner2 from "../assets/banner-21.jpg";
import melon from "../assets/melon.jpg";
import orange from "../assets/orange.jpg";
import pizza from "../assets/pizza.jpg";
import rising from "../assets/rising.jpg";
import paper from "../assets/toilet.jpg";
import { RatingStars } from "./EditorPicks";

export default function CategoryProducts() {
  const products = [
    {
      id: 1,
      discount: "11%",
      img: rising,
      title: "Great Value Rising Crust Frozen Pizza, Supreme",
      price: 8.99,
      oldPrice: 9.99,
      stock: false,
      rating: 3,
    },
    {
      id: 2,
      discount: "13%",
      img: melon,
      title: "Simple Kitchen FD Sliced Strawberries – 1.08lb",
      price: 21.9,
      oldPrice: 24.9,
      stock: true,
      rating: 3,
    },
    {
      id: 3,
      discount: "26%",
      img: orange,
      title: "Red Baron Frozen Hand Tossed Ultimate Pepperoni Pizza",
      price: 14.99,
      oldPrice: 19.99,
      stock: true,
      rating: 3,
    },
    {
      id: 4,
      discount: "8%",
      img: pizza,
      title: "Oscar Mayer Ham & Swiss Melt Scrambler – 3oz",
      price: 11.9,
      oldPrice: 12.9,
      stock: true,
      rating: 3,
    },
    {
      id: 5,
      discount: "16%",
      img: apple,
      title: "Large Garden Spinach & Herb Wrap Tortillas – 15oz, 6ct",
      price: 27.9,
      oldPrice: 32.9,
      stock: true,
      rating: 3,
    },
    {
      id: 6,
      discount: "14%",
      img: paper,
      title: "Great Value Rising Crust Pizza, Cheese, 27.4 oz",
      price: 12.89,
      oldPrice: 14.89,
      stock: true,
      rating: 2,
    },
  ];

  return (
    <div className="bg-[#F9FAFB]">
      <section className="w-11/12 mx-auto pb-16">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold pr-4">Category Products</h2>
          <span className="text-gray-500 text-sm">
            Do not miss the current offers until the end of March.
          </span>
          <button className="ml-auto btn text-sm bg-white py-2 px-4 rounded-full border  hover:bg-gray-100">
            View All →
          </button>
        </div>

        {/* Top Banners */}
        <div className="grid md:grid-cols-2  ">
          <div className="relative w-full">
            <img
              src={banner1}
              alt="Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center ">
              <div className="space-y-4 p-8 rounded-lg">
                <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded text-xs">
                  Only This Week
                </span>
                <h3 className="text-3xl font-bold ">
                  Make your grocery <br /> shopping easy with us
                </h3>
                <p className="text-gray-500  text-sm">
                  Feed your family the best
                </p>
                <button className="mt-3 px-4 py-2 bg-white border rounded-full font-bold text-sm">
                  Shop Now →
                </button>
              </div>
            </div>
          </div>
          <div className="relative w-full">
            <img
              src={banner2}
              alt="Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center ">
              <div className="space-y-4 p-8 rounded-lg">
                <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded text-xs">
                  Only This Week
                </span>
                <h3 className="text-3xl font-bold ">
                  Get your everyday <br /> needs here with us
                </h3>
                <p className="text-gray-500  text-sm">
                  A different kind of grocery store
                </p>
                <button className="mt-3 px-4 py-2 bg-white border rounded-full font-bold text-sm">
                  Shop Now →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ">
          {products.map((p) => (
            <div
              key={p.id}
              className="border  p-3 flex flex-col relative group"
            >
              {/* Discount */}
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                {p.discount}
              </span>
              {/* Favorite */}
              <FaHeart className="absolute top-2 right-2 text-gray-400 cursor-pointer" />

              <img
                src={p.img}
                alt={p.title}
                className="w-full h-32 object-contain mb-2"
              />
              <h4 className="text-sm font-medium line-clamp-2">{p.title}</h4>
              <div className=" items-center gap-2 mt-1">
                <div className="flex text-sm  mt-1">
                  <RatingStars rating={4.5} />
                  <span className="text-sm text-gray-500 ml-1">(2)</span>
                </div>
                <span className="text-red-500 font-semibold">${p.price}</span>
                <span className="text-gray-400 line-through text-sm">
                  ${p.oldPrice}
                </span>
              </div>
              <div className="flex gap-2 mt-1">
                <button className="mt-auto bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1 rounded flex items-center gap-1 justify-center">
                  <FaShoppingCart />
                </button>
                <span
                  className={`text-xs font-medium ${
                    p.stock ? "text-green-800" : "text-red-500"
                  } mt-1`}
                >
                  {p.stock ? "IN STOCK" : "OUT OF STOCK"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
