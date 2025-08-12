import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";

const Banner = () => {
  return (
    <>
      <div class="relative w-full  ">
        <img
          src={banner1}
          alt="TeeChia Cereal"
          class="w-full h-full object-cover"
        />

        <div class="absolute inset-0 flex items-center px-6 md:px-16">
          <div class="space-y-4 p-4 rounded-lg">
            <div class="inline-block px-4 py-1 rounded-lg bg-gradient-to-r from-green-400 to-transparent text-green-800 font-semibold">
              Weekend Discount
            </div>

            <h2 class="text-2xl md:text-6xl font-bold text-purple-900">
              Shopping with us for
              <br />
              better quality and the
              <br />
              best price
            </h2>
            <p class="text-gray-700">
              We have prepared special discounts for you on grocery products.
              <br />
              Don't miss these opportunities...
            </p>
            <div class="flex items-center space-x-4">
              <a
                href="#shop"
                class="bg-purple-600 text-white px-5 py-3 rounded-md hover:bg-purple-700 transition"
              >
                Shop Now →
              </a>
              <div className="flex flex-col">
                <div class="flex items-baseline space-x-2">
                  <span class="text-2xl font-bold text-red-600">$21.67</span>
                  <span class="text-2xl line-through text-gray-500">
                    $26.07
                  </span>
                </div>
                <p class="text-sm text-gray-700">
                  Don't miss this limited offer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative w-full  ">
        <img
          src={banner2}
          alt="TeeChia Cereal"
          class="w-full h-full object-cover"
        />

        <div class="absolute inset-0 flex items-center px-6 md:px-16">
          <div class="space-y-4 p-4 rounded-lg">
            <div class="inline-block px-4 py-1 rounded-lg bg-gradient-to-r from-green-400 to-transparent text-green-800 font-semibold">
              Weekend Discount
            </div>

            <h2 class="text-2xl md:text-6xl font-bold text-purple-900">
              The one supermarket
              <br />
              That makes your life
              <br />
              easy and better
            </h2>
            <p class="text-gray-700">
              We have prepared special discounts for you on grocery products.
              <br />
              Don't miss these opportunities...
            </p>
            <div class="flex items-center space-x-4">
              <a
                href="#shop"
                class="bg-purple-600 text-white px-5 py-3 rounded-md hover:bg-purple-700 transition"
              >
                Shop Now →
              </a>
              <div className="flex flex-col">
                <div class="flex items-baseline space-x-2">
                  <span class="text-2xl font-bold text-red-600">$37.67</span>
                  <span class="text-2xl line-through text-gray-500">
                    $26.07
                  </span>
                </div>
                <p class="text-sm text-gray-700">
                  Don't miss this limited offer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
