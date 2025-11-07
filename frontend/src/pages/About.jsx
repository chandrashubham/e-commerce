
import { assets } from "../assets/assets"; // optional if you have images/logos

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            We’re passionate about delivering quality products and exceptional
            service to our customers.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <img
              src={assets?.about_img || "https://via.placeholder.com/500x300"}
              alt="Our Mission"
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At <span className="font-bold">[Your Store Name]</span>, our
              mission is to provide top-quality products at affordable prices
              while ensuring a seamless shopping experience. We strive to make
              online shopping easy, secure, and enjoyable for everyone.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              We envision a world where every customer can access the best
              products without compromise. Our team works tirelessly to innovate
              and improve your shopping journey.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg text-center shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">Quality Products</h3>
              <p className="text-gray-600">
                We hand-select every item to ensure it meets our high standards
                of quality and durability.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg text-center shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-gray-600">
                We work with trusted logistics partners to deliver your order on
                time, every time.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg text-center shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">Customer Support</h3>
              <p className="text-gray-600">
                Our friendly team is always ready to assist you with any
                questions or concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Footer message */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">We’re Here for You</h2>
          <p className="text-gray-700">
            Thank you for choosing <span className="font-bold">[Your Store Name]</span>.
            We’re committed to making your shopping experience memorable and
            worthwhile.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
