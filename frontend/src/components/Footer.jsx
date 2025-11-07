import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand / About */}
        <div>
          <h1 className="text-3xl font-bold text-white">ShopEase</h1>
          <p className="mt-4 text-sm leading-6 text-gray-400">
            Your one-stop destination for quality fashion and lifestyle
            products. Trusted by thousands of customers worldwide.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Shop</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/collection" className="hover:text-white">
                New Arrivals
              </Link>
            </li>
            <li>
              <Link to="/collection" className="hover:text-white">
                Best Sellers
              </Link>
            </li>
            <li>
              <Link to="/offers" className="hover:text-white">
                Offers & Discounts
              </Link>
            </li>
            <li>
              <Link to="/categories" className="hover:text-white">
                Categories
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">
            Customer Support
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/faq" className="hover:text-white">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/orders" className="hover:text-white">
                Orders & Shipping
              </Link>
            </li>
            <li>
              <Link to="/returns" className="hover:text-white">
                Returns & Refunds
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-sm mb-3 text-gray-400">
            Subscribe to our newsletter for the latest deals & updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 w-full rounded-md text-gray-900 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-6 py-6 text-center">
        <div className="flex justify-center space-x-6 mb-4 text-xl">
          {/* Social Icons (replace with actual icons if available) */}
          <Link to="#" className="hover:text-white">
            🌐
          </Link>
          <Link to="#" className="hover:text-white">
            📘
          </Link>
          <Link to="#" className="hover:text-white">
            🐦
          </Link>
          <Link to="#" className="hover:text-white">
            📸
          </Link>
        </div>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
        </p>
        <div className="mt-3 flex justify-center space-x-4 text-xs text-gray-400">
          {/* Payment Methods */}
          <span>Razorpay</span>
          <span> Stripe</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
