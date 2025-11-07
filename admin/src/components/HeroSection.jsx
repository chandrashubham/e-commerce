import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className="w-full md:w-1/4 lg:w-1/5 min-h-screen p-6 flex flex-col items-center md:items-start space-y-6">
        <nav className="flex flex-col w-full space-y-3">
          <NavLink
            to="/add"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md transition-all duration-200 text-center md:text-left ${
                isActive
                  ? "bg-green-600 text-white shadow-md"
                  : "hover:bg-gray-700 hover:text-green-400"
              }`
            }
          >
            ➕ Add Items
          </NavLink>

          <NavLink
            to="/list"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md transition-all duration-200 text-center md:text-left ${
                isActive
                  ? "bg-green-600 text-white shadow-md"
                  : "hover:bg-gray-700 hover:text-green-400"
              }`
            }
          >
            📋 List Items
          </NavLink>

          <NavLink
            to="/orders"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md transition-all duration-200 text-center md:text-left ${
                isActive
                  ? "bg-green-600 text-white shadow-md"
                  : "hover:bg-gray-700 hover:text-green-400"
              }`
            }
          >
            🛒 Orders
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default HeroSection;
