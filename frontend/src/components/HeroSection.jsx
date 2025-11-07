import { Link } from "react-router-dom";
import { assets } from "../assets/assets.js";

const HeroSection = () => {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Left Side */}
      <div className="flex-1 text-center md:text-left">
  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-snug">
    Discover Unique <span className="text-green-600">Artworks</span> <br />
    from Talented Creators
  </h1>
  <p className="mt-4 text-gray-600 text-base sm:text-lg">
    Explore original paintings, digital art, and handmade crafts. Support artists,
    own one-of-a-kind pieces, and elevate your space with creative expression!
  </p>
  <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
    <Link to={'/collection'}>
      <button className="cursor-pointer px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition">
        Browse Artworks
      </button>
    </Link>
    <Link to={'/about'}>
      <button className="cursor-pointer px-6 py-3 border border-gray-300 rounded hover:bg-gray-100 transition">
        Learn About ArtifyHub
      </button>
    </Link>
  </div>
</div>


        {/* Right Side */}
        <div className="flex-1 flex justify-center">
          <img
            src={assets.hero_img}
            alt="Hero section"
            className="w-full max-w-md object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
