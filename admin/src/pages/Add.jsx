import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({token}) => {
  const [image, setImage] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("painting");
  const [subCategory, setSubCategory] = useState("abstract");
  const [bestSeller, setBestSeller] = useState(false);
  const onSubmitHandler = async(e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image1", image);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestSeller);
     const response = await axios.post(
  backendUrl + "/api/product/add",
  formData,
  { headers: { token } }
);
if(response.data.success){
  toast.success("Item added successfully");

}else{
  toast.error("Failed to add item");

}
    } catch (error) {
      console.log(error);
      toast.error("Failed to add item");
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <form onSubmit={onSubmitHandler} className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Add New Item
        </h2>

        <div className="space-y-5">
          {/* Upload Image */}
          <div>
            <p className="text-gray-700 font-medium mb-2">Upload Image</p>
            <label
              htmlFor="image"
              className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-indigo-400 hover:bg-indigo-50 transition"
            >
              {!image ? (
                <span className="text-gray-500 text-sm">
                  Click to upload image
                </span>
              ) : (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  className="h-full object-contain rounded-lg"
                />
              )}

              <input
              required
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                id="image"
                className="hidden"
              />
            </label>
          </div>

          {/* Name */}
          <label htmlFor="name" className="block">
            <p className="text-gray-700 font-medium mb-1">Name</p>
            <input
            required
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter name"
            />
          </label>

          {/* Description */}
          <label htmlFor="description" className="block">
            <p className="text-gray-700 font-medium mb-1">Description</p>
            <textarea
            required
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              id="description"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter description"
            />
          </label>

          {/* Price */}
          <label htmlFor="price" className="block">
            <p className="text-gray-700 font-medium mb-1">Price</p>
            <input
            required
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              type="number"
              id="price"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter price"
            />
          </label>

          {/* Category */}
          <label htmlFor="category" className="block">
            <p className="text-gray-700 font-medium mb-1">Category</p>
            <select
              onChange={(e) => setCategory(e.target.value)}
              id="category"
              className="cursor-pointer w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            >
              <option value="">Select Category</option>
              <option value="Painting">Painting</option>
              <option value="Sketch">Sketch</option>
              <option value="Digital Art">Digital Art</option>
              <option value="Craft">Craft</option>
            </select>
          </label>

          {/* Subcategory */}
          <label htmlFor="subcategory" className="block">
            <p className="text-gray-700 font-medium mb-1">Subcategory</p>
            <select
              onChange={(e) => setSubCategory(e.target.value)}
              id="subcategory"
              className="cursor-pointer w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            >
              <option value="">Select Subcategory</option>
              <option value="Abstract">Abstract</option>
              <option value="Portrait">Portrait</option>
              <option value="Nature">Nature</option>
              <option value="Modern">Modern</option>
              <option value="Realistic">Realistic</option>
            </select>
          </label>

      

          {/* Bestseller (radio buttons) */}
          <div className="block">
            <p className="text-gray-700 font-medium mb-2">Best-Seller</p>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="bestseller"
                  value="true"
                  checked={bestSeller === true}
                  onChange={() => setBestSeller(true)}
                  className="cursor-pointer w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <span className="text-gray-700">Yes</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="bestseller"
                  value="false"
                  checked={bestSeller === false}
                  onChange={() => setBestSeller(false)}
                  className=" cursor-pointer w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <span className="text-gray-700">No</span>
              </label>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="pt-4">
          <button
            type="submit"
            className=" cursor-pointer w-full bg-indigo-600 text-white font-medium py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
