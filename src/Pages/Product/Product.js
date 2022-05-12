import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const {_id,  name, price, rating, description, image } = product;
//navigation to details
const navigate = useNavigate();

const navigateDetails = (id) => {
  navigate(`/inventory/${id}`);
};
const navigateCheckout = (serviceId) => {
  navigate(`/order/${serviceId}`);
};
    return (
        <div>
            <div className="col-sm-6 col-md-11">
        <div className="card mb-4">
          <img src={image} alt="im" />
          <div className="card-header fs-5">{name}</div>
          <div className="card-body">
            <h5>
              Price : <span style={{ color: "GrayText" }}>{price}</span>
            </h5>
            <p className="card-text">{description}</p>
            <p>Rating : {rating}</p>

            <>
              <button
                onClick={() => navigateCheckout(_id)}
                className="btn btn-outline-dark "
              >
                Add Now
              </button>
            </>
            <>
              <button
                onClick={() => navigateDetails(_id)}
                className="btn btn-outline-danger mx-2"
              >
                Update now
              </button>
            </>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Product;