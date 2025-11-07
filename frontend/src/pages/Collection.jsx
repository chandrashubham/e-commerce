import { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import { ShopContext } from "../context/ShopContext";

const Collection = () => {
  const { products,search,showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilters = () => {
    let productCopy = products.slice();
    if(showSearch && search){
      productCopy=productCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(productCopy);
  };

  const sortProducts = () => {
    let fpcopy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(fpcopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpcopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilters();
        break;
    }
  };

  const clearFilters = () => {
    setCategory([]);
    setSubCategory([]);
    setSortType("relevant");
    setFilterProducts(products);
  };

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  useEffect(() => {
    applyFilters();
  }, [category, subCategory,search,showSearch]);

  return (
    <div className="max-w-[95vw] mx-auto flex flex-col lg:flex-row mt-4 min-h-[80vh] px-2 sm:px-6">
      {/* Filter Sidebar */}
      <div
        className={`fixed lg:static top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform ${
          showFilter ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:translate-x-0`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <p className="text-gray-700 font-medium">FILTERS</p>
          <button
            className="lg:hidden text-gray-500"
            onClick={() => setShowFilter(false)}
          >
            ✕
          </button>
        </div>

        <div className="p-4">
          <button
            onClick={clearFilters}
            className="mb-4 text-sm border px-3 py-1 rounded hover:bg-gray-100"
          >
            Clear Filters
          </button>

          {/* Category */}
          <div className="mb-7 border-b border-gray-300 pb-3">
            <p className="text-sm text-gray-700 font-semibold">CATEGORIES</p>
            <div className="flex flex-col gap-1 text-sm text-gray-600 py-2">
              <label className="flex gap-3 items-center">
                <input
                  type="checkbox"
                  className="w-3"
                  checked={category.includes("Drawing")}
                  value={"Drawing"}
                  onChange={toggleCategory}
                />
                Drawing
              </label>
              <label className="flex gap-3 items-center">
                <input
                  type="checkbox"
                  className="w-3"
                  checked={category.includes("Original Paintings")}
                  value={"Original Paintings"}
                  onChange={toggleCategory}
                />
                Original Paintings
              </label>
              <label className="flex gap-3 items-center">
                <input
                  type="checkbox"
                  className="w-3"
                  checked={category.includes("Fine Art Prints")}
                  value={"Fine Art Prints"}
                  onChange={toggleCategory}
                />
                Fine Art Prints
              </label>
              <label className="flex gap-3 items-center">
                <input
                  type="checkbox"
                  className="w-3"
                  checked={category.includes("Digital Illustrations")}
                  value={"Digital Illustrations"}
                  onChange={toggleCategory}
                />
                Digital Illustrations
              </label>
            </div>
          </div>

          {/* Sub-category */}
          <div className="border-b border-gray-300 pb-3">
            <p className="text-sm text-gray-700 font-semibold">TYPE</p>
            <div className="flex flex-col gap-1 text-sm text-gray-600 py-2">
              <label className="flex gap-3 items-center">
                <input
                  type="checkbox"
                  className="w-3"
                  checked={subCategory.includes("Fantasy Creature")}
                  value={"Fantasy Creature"}
                  onChange={toggleSubCategory}
                />
               Fantasy Creature
              </label>
              <label className="flex gap-3 items-center">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Bottomwear"}
                  checked={subCategory.includes("Bottomwear")}
                  onChange={toggleSubCategory}
                />
                Bottom-Wear
              </label>
              <label className="flex gap-3 items-center">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Winterwear"}
                  checked={subCategory.includes("Winterwear")}
                  onChange={toggleSubCategory}
                />
                Winter-Wear
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Right side (Products + Controls) */}
      <div className="flex-1 lg:pl-6">
        {/* Top bar */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-base sm:text-xl mb-4 gap-4">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <Title text1={"ALL"} text2={"COLLECTIONS"} />
            <button
              onClick={() => setShowFilter(true)}
              className="lg:hidden text-sm border px-3 py-1 rounded ml-auto"
            >
              Filters
            </button>
          </div>

        <select
  value={sortType}
  onChange={(e) => setSortType(e.target.value)}
  className="text-sm border border-gray-300 rounded px-2 py-1 w-28 sm:w-40 md:w-auto"
>
  <option value="relevant">RELEVANT</option>
  <option value="low-high">LOW → HIGH</option>
  <option value="high-low">HIGH → LOW</option>
</select>

        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {filterProducts.map((item) => (
            <ProductItem
              key={item._id}
              name={item.name}
              id={item._id}
              price={item.price}
              images={item.images[0]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
