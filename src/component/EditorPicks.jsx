import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaLeaf, FaRegHeart } from "react-icons/fa";
import apple from "../assets/apple.jpg";
import melon from "../assets/melon.jpg";
import orange from "../assets/orange.jpg";
import pizza from "../assets/pizza.jpg";
import rising from "../assets/rising.jpg";
import paper from "../assets/toilet.jpg";

const RatingStars = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i)
      stars.push(<BsStarFill key={i} className="text-yellow-400" />);
    else if (rating + 0.5 >= i)
      stars.push(<BsStarHalf key={i} className="text-yellow-400" />);
    else stars.push(<BsStar key={i} className="text-yellow-400" />);
  }
  return <div className="flex space-x-1">{stars}</div>;
};

export default function EditorsPickGrid() {
  return (
    <div className="bg-[#F9FAFB]">
      <section className="py-16 w-11/12 mx-auto ">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Editor’s Pick</h2>
          <span className="text-gray-500">
            New products with updated stocks.
          </span>
          <button className="ml-auto btn text-sm bg-white py-2 px-4 rounded-full border  hover:bg-gray-100">
            View All →
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-4 ">
          {/* Column 1 - Tall Card */}
          <div className="bg-white border rounded-l-lg p-4 shadow-sm relative flex flex-col justify-between">
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              75%
            </span>

            <button className="absolute top-2 right-2 text-gray-500">
              <FaRegHeart />
            </button>
            <img src={apple} alt="Apple Juice" className="object-contain" />
            <div className="">
              <div className="flex justify-between mb-1">
                <div className=" bg-[#A9ED94] text-green-800 text-xs px-2 py-1 rounded-r-full flex items-center gap-1">
                  <FaLeaf /> ORGANIC
                </div>
                <div>
                  <span className="bg-[#634C9F] text-white py-1 px-3 rounded-full text-xl">
                    +
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <RatingStars rating={4} />{" "}
                <span className="text-sm text-gray-500">(3)</span>
              </div>
              <h3 className="text-gray-800 font-medium  mb-1">
                100 Percent Apple Juice – 64 fl oz Bottle
              </h3>
              <p className="text-xs text-gray-500 mb-2">
                Vivamus adipiscing nisl ut dolor dignissim semper.
              </p>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-red-500 font-bold">$0.50</span>
                <span className="line-through text-gray-400 text-sm">
                  $1.99
                </span>
              </div>
              <div className="text-xs text-gray-500 mb-1">
                This product is about to run out
              </div>
              <div className="h-1 bg-gray-200 rounded mb-1">
                <div
                  className="h-1 bg-red-500 rounded"
                  style={{ width: "22%" }}
                ></div>
              </div>
              <div className="text-xs text-gray-500">
                available only: <span className="font-bold">22</span>
              </div>
            </div>
          </div>

          {/* Column 2 - Two stacked cards */}
          <div className="grid grid-rows-2 ">
            {/* Card 1 */}
            <div className="bg-white border p-4 shadow-sm relative ">
              <div className="flex gap-4">
                <div>
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
                    41%
                  </span>
                  <span className="absolute top-2 left-12 bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-r-full flex items-center gap-1">
                    ❄ COLD SALE
                  </span>
                  <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
                    <FaRegHeart />
                  </button>

                  <img
                    src={rising}
                    alt="Orange Juice"
                    className=" object-contain mx-auto"
                  />
                </div>

                <div>
                  <div className="flex   mt-1">
                    <RatingStars rating={4.5} />
                    <span className="text-sm text-gray-500 ml-1">(2)</span>
                  </div>
                  <h3 className="text-gray-800 font-medium   mt-2">
                    Great Value Rising Crust Frozen Pizza, Supreme
                  </h3>

                  <div className="flex  gap-2 mt-1">
                    <span className="text-red-500 font-bold text-lg">
                      $2.45
                    </span>
                    <span className="line-through text-gray-400 text-sm">
                      $4.13
                    </span>
                  </div>

                  {/* Add to Cart */}
                  <button className="border border-purple-500 text-purple-500 rounded-full px-4 py-1 text-sm font-medium mt-2 hover:bg-purple-50 w-full">
                    Add to cart
                  </button>
                </div>
              </div>

              {/* Countdown */}
              <div className="flex items-center gap-2 justify-center mt-3">
                <div className="flex gap-1">
                  {["90", "04", "02", "45"].map((t, i) => (
                    <div
                      key={i}
                      className="bg-gray-100 px-2 py-1 rounded text-sm font-medium"
                    >
                      {t}
                    </div>
                  ))}
                </div>
                <span className="text-xs text-gray-500">
                  Remains until the end of the offer
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border p-4 shadow-sm relative ">
              <div className="flex gap-4">
                <div>
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
                    41%
                  </span>

                  <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
                    <FaRegHeart />
                  </button>

                  <img
                    src={orange}
                    alt="Orange Juice"
                    className=" object-contain mx-auto"
                  />
                </div>

                <div>
                  <div className="flex   mt-1">
                    <RatingStars rating={4.5} />
                    <span className="text-sm text-gray-500 ml-1">(2)</span>
                  </div>
                  <h3 className="text-gray-800 font-medium  mt-2">
                    Simply Orange Pulp Free Juice – 52 fl oz
                  </h3>

                  <div className="flex  gap-2 mt-1">
                    <span className="text-red-500 font-bold text-lg">
                      $2.45
                    </span>
                    <span className="line-through text-gray-400 text-sm">
                      $4.13
                    </span>
                  </div>

                  <button className="border border-purple-500 text-purple-500 rounded-full px-4 py-1 text-sm font-medium mt-2 hover:bg-purple-50 w-full">
                    Add to cart
                  </button>
                </div>
              </div>

              {/* Countdown */}
              <div className="flex items-center gap-2 justify-center mt-3">
                <div className="flex gap-1">
                  {["90", "04", "02", "45"].map((t, i) => (
                    <div
                      key={i}
                      className="bg-gray-100 px-2 py-1 rounded text-sm font-medium"
                    >
                      {t}
                    </div>
                  ))}
                </div>
                <span className="text-xs text-gray-500">
                  Remains until the end of the offer
                </span>
              </div>
            </div>
          </div>

          {/* Column 3 - Tall Card */}
          <div className="bg-white border  p-4 shadow-sm relative flex flex-col justify-between">
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              21%
            </span>

            <button className="absolute top-2 right-2 text-gray-500">
              <FaRegHeart />
            </button>
            <img
              src={pizza}
              alt="California Pizza"
              className="  object-contain"
            />
            <div className="mt-3">
              <div className="flex justify-between mb-1">
                <div className=" bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-r-full flex items-center gap-1">
                  ❄ COLD SALE
                </div>
                <div>
                  <span className="bg-[#634C9F] text-white py-1 px-3 rounded-full text-xl">
                    +
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <RatingStars rating={3.5} />{" "}
                <span className="text-sm text-gray-500">(3)</span>
              </div>
              <h3 className="text-gray-800 font-medium mb-1">
                California Pizza Kitchen Margherita, Crispy Thin Crust
              </h3>
              <p className="text-xs text-gray-500 mb-2">
                Vivamus adipiscing nisl ut dolor dignissim semper.
              </p>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-red-500 font-bold">$11.77</span>
                <span className="line-through text-gray-400 text-sm">
                  $14.77
                </span>
              </div>
              <div className="text-xs text-gray-500 mb-1">
                This product is about to run out
              </div>
              <div className="h-1 bg-gray-200 rounded mb-1">
                <div
                  className="h-1 bg-red-500 rounded"
                  style={{ width: "23%" }}
                ></div>
              </div>
              <div className="text-xs text-gray-500">
                available only: <span className="font-bold">23</span>
              </div>
            </div>
          </div>

          {/* Column 4 - Two stacked cards */}
          <div className="grid grid-rows-2 ">
            {/* Card 1 */}
            <div className="bg-white border p-4 rounded-tr-lg shadow-sm relative ">
              <div className="flex gap-4">
                <div>
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
                    41%
                  </span>
                  <span className="absolute top-2 left-12 bg-[#A9ED94] text-green-800 text-xs px-2 py-1 rounded-r-full flex items-center gap-1">
                    <FaLeaf /> ORGANIC
                  </span>
                  <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
                    <FaRegHeart />
                  </button>

                  <img
                    src={melon}
                    alt="Orange Juice"
                    className=" object-contain mx-auto"
                  />
                </div>

                <div>
                  {/* Rating */}
                  <div className="flex   mt-1">
                    <RatingStars rating={4.5} />
                    <span className="text-sm text-gray-500 ml-1">(2)</span>
                  </div>
                  <h3 className="text-gray-800 font-medium   mt-2">
                    Cantaloupe Melon Fresh Organic Cut
                  </h3>

                  {/* Price */}
                  <div className="flex  gap-2 mt-1">
                    <span className="text-red-500 font-bold text-lg">
                      $2.45
                    </span>
                    <span className="line-through text-gray-400 text-sm">
                      $4.13
                    </span>
                  </div>

                  {/* Add to Cart */}
                  <button className="border border-purple-500 text-purple-500 rounded-full px-4 py-1 text-sm font-medium mt-2 hover:bg-purple-50 w-full">
                    Add to cart
                  </button>
                </div>
              </div>

              {/* Countdown */}
              <div className="flex items-center gap-2 justify-center  mt-3">
                <div className="flex gap-1">
                  {["90", "04", "02", "45"].map((t, i) => (
                    <div
                      key={i}
                      className="bg-gray-100 px-2 py-1 rounded text-sm font-medium"
                    >
                      {t}
                    </div>
                  ))}
                </div>
                <span className="text-xs text-gray-500">
                  Remains until the end of the offer
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border p-4 shadow-sm relative rounded-br-lg">
              <div className="flex gap-4">
                <div>
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
                    41%
                  </span>

                  <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
                    <FaRegHeart />
                  </button>

                  <img
                    src={paper}
                    alt="Orange Juice"
                    className=" object-contain mx-auto"
                  />
                </div>

                <div>
                  {/* Rating */}
                  <div className="flex   mt-1">
                    <RatingStars rating={4.5} />
                    <span className="text-sm text-gray-500 ml-1">(2)</span>
                  </div>
                  <h3 className="text-gray-800 font-medium   mt-2">
                    Angel Soft Toilet Paper, 9 Mega Rolls
                  </h3>

                  {/* Price */}
                  <div className="flex  gap-2 mt-1">
                    <span className="text-red-500 font-bold text-lg">
                      $2.45
                    </span>
                    <span className="line-through text-gray-400 text-sm">
                      $4.13
                    </span>
                  </div>

                  {/* Add to Cart */}
                  <button className="border border-purple-500 text-purple-500 rounded-full px-4 py-1 text-sm font-medium mt-2 hover:bg-purple-50 w-full">
                    Add to cart
                  </button>
                </div>
              </div>

              {/* Countdown */}
              <div className="flex items-center gap-2 justify-center mt-3">
                <div className="flex gap-1">
                  {["90", "04", "02", "45"].map((t, i) => (
                    <div
                      key={i}
                      className="bg-gray-100 px-2 py-1 rounded text-sm font-medium"
                    >
                      {t}
                    </div>
                  ))}
                </div>
                <span className="text-xs text-gray-500">
                  Remains until the end of the offer
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
