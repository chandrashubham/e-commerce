import  { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const List = ({token}) => {
  const [products, setProducts] = useState([]);


  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      if (response.data.success) {
        setProducts(response.data.products);
      }else{
        toast.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  // Delete item (optional feature)
  const handleDelete = async (id) => {
    try {
     const response = await axios.post(`${backendUrl}/api/product/remove`,{id},{headers: {token}});
     if(response.data.success){
       toast.success("Product deleted successfully");
        fetchProducts();
     }else{
        toast.error("Failed to delete product");
     }
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Failed to delete product");
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);



  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        <div className="flex justify-between items-center border-b p-6">
          <h2 className="text-2xl font-semibold text-gray-800">Product List 🧾</h2>
          <button
            onClick={fetchProducts}
            className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Refresh
          </button>
        </div>

        {/* Product Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
              <tr>
                <th className="p-4 border-b">Image</th>
                <th className="p-4 border-b">Name</th>
                <th className="p-4 border-b">Category</th>
                <th className="p-4 border-b">Sub-Category</th>
                <th className="p-4 border-b">Price</th>
                <th className="p-4 border-b">Bestseller</th>
                <th className="p-4 border-b text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products.map((item) => (
                  <tr
                    key={item._id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-4">
                      <img
                        src={item.images?.[0]}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md border"
                      />
                    </td>
                    <td className="p-4 font-medium text-gray-800">{item.name}</td>
                    <td className="p-4 text-gray-600">{item.category}</td>
                    <td className="p-4 text-gray-600">{item.subCategory}</td>
                    <td className="p-4 text-gray-800 font-semibold">
                      ₹{item.price}
                    </td>
                   
                   
                    <td className="p-4">
                      {item.bestseller ? (
                        <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-700 rounded-full">
                          ⭐ Bestseller
                        </span>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="cursor-pointer text-red-600 hover:text-red-800 transition"
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center py-10 text-gray-500 font-medium"
                  >
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default List;
