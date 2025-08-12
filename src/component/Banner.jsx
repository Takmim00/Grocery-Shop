import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";

const slides = [
  {
    img: banner1,
    title1: "Shopping with us for",
    title2: "better quality and the",
    title3: "best price",
    price: "$21.67",
    oldPrice: "$26.07",
  },
  {
    img: banner2,
    title1: "The one supermarket",
    title2: "That makes your life",
    title3: "easy and better",
    price: "$37.67",
    oldPrice: "$26.07",
  },
];

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2 text-2xl text-gray-800 p-3 rounded-full shadow "
  >
    <FaChevronLeft size={20} />
  </button>
);

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2 text-2xl text-gray-800 p-3 rounded-full shadow "
  >
    <FaChevronRight size={20} />
  </button>
);

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full">
            <img
              src={slide.img}
              alt="Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center px-6 md:px-16">
              <div className="space-y-4 p-4 rounded-lg">
                <div className="inline-block px-4 py-1 rounded-lg bg-gradient-to-r from-green-400 to-transparent text-green-800 font-semibold">
                  Weekend Discount
                </div>
                <h2 className="text-2xl md:text-6xl font-bold text-purple-900 drop-shadow-md">
                  {slide.title1} <br /> {slide.title2} <br /> {slide.title3}
                </h2>
                <p className="text-gray-700">
                  We have prepared special discounts for you on grocery
                  products.
                  <br />
                  Don't miss these opportunities...
                </p>
                <div className="flex items-center space-x-4">
                  <a
                    href="#shop"
                    className="bg-purple-600 text-white px-5 py-3 rounded-md hover:bg-purple-700 transition"
                  >
                    Shop Now →
                  </a>
                  <div className="flex flex-col">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-bold text-red-600">
                        {slide.price}
                      </span>
                      <span className="text-2xl line-through text-gray-500">
                        {slide.oldPrice}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">
                      Don't miss this limited offer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
