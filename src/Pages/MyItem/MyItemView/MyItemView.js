import React from "react";

const MyItemView = ({ orders }) => {
  const { _id, email, service, address, phone } = orders;
  return (
    <div>
      <div className="col-md-4 col-sm-6">
      <div className="card my-2 p-3" style={{ width: "35rem" }}>
        <ul className="list-group list-group-flush">
          <h5 >Order given with : {email}</h5>
          <li className="list-group-item text-">Product id : <span className="text-secondary">{_id}</span></li>
          <li className="list-group-item"><b>Product ordered :</b> {service}</li>
          <li className="list-group-item">Location :  {address}</li>
          <li className="list-group-item">Phone Number :  {phone}</li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default MyItemView;
