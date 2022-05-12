
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageInventory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `https://serene-inlet-21098.herokuapp.com/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = "Are you sure you want to delete ?";
    if (proceed) {
      fetch(`https://serene-inlet-21098.herokuapp.com/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => data);
      const remaining = products.filter((product) => product._id !== id);
      setProducts(remaining);
    }
  };
  return (
    <div>
      <h1 className="text-center">Manage Inventory </h1>

      {products.map((product) => (
        <h4 className="mx-2" key={product._id}>

          <div className=" shadow p-3 mb-5 bg-body rounded">
            <img src={product.image} style={{ width: '120px', height: '100px' }} alt="" />
            {product.name}

            <button
              className="mx-2 px-2 btn btn-outline-warning"
              onClick={() => handleDelete(product._id)}
            >
              Delete
            </button>
          </div>
        </h4>

      ))}

      <Link to="/addproduct" className="my-2 btn btn-outline-danger mx-2">
        Add new item
      </Link>
    </div>
  );
};

export default ManageInventory;
