import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import img1 from "../assets/baby-care.png";
import img5 from "../assets/bakery.png";
import img2 from "../assets/beverages.png";
import img6 from "../assets/dairy.png";
import img7 from "../assets/frozen-foods.png";
import img8 from "../assets/grocery.png";
import img3 from "../assets/meat-fish.png";
import img4 from "../assets/organic.png";
import img9 from "../assets/pet.png";
import img10 from "../assets/home-cleaning.png";
import img11 from "../assets/fruits-vegetables.png";


const categories = [
  {
    title: "Baby & Pregnancy",
    img: img1,
  },
  {
    title: "Beverages",
    img: img2,
  },
  {
    title: "Meats & Seafood",
    img: img3,
  },
  {
    title: "Biscuits & Snacks",
    img: img4,
  },
  {
    title: "Breads & Bakery",
    img: img5,
  },
  {
    title: "Breakfast & Dairy",
    img: img6,
  },
  {
    title: "Frozen Foods",
    img: img7,
  },
  {
    title: "Grocery & Staples",
    img: img8,
  },
  {
    title: "Healthcare",
    img: img9,
  },
  {
    title: "Household Need",
    img: img10,
  },
  {
    title: "Fruits & Vegetables",
    img: img11,
  },
];

export default function CategoryCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000, 
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="w-11/12 mx-auto  py-16">
      <Slider {...settings}>
        {categories.map((cat, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center">
              <div className=" rounded-full flex items-center justify-center bg-gray-100 overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="object-cover w-40"
                />
              </div>
            </div>
            <p className="mt-2 font-semibold">{cat.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
