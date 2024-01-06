import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

const Car = ({ car }) => {
  return (
    <div>
      {car ? (
      <div className="d-felx">
          <div className="card w-20 p-3 mb-3 text-center">
          <img
            style={{ objectFit: "cover" }}
            className="img-fuid"
            height={300}
            width={370}
            src={`https://avtoelon-production.up.railway.app/${car?.image}`}
            alt={car?.title}
          />
          <h2 className="text-primary">{car?.title}</h2>

          <div className="text-center">
            <i className="fa-solid fa-user-tie"></i> {car?.author}
          </div>
          <i className="fa-solid fa-stopwatch"></i> CLASS: {car?.class}
          <div>
            <h3>{car.price}</h3>
            <i className="fa-solid fa-comment"></i> {car?.comments?.length}
          </div>
        </div>
      </div>
      ) : (
        <Loading />
      )}
      
    </div>
  );
};

export default Car;
