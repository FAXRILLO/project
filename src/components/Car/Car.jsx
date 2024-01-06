import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

const Car = ({ car }) => {
  return (
    <div>
      {car ? (
        <div className=" col-12 col-md-4 col-lg-3 p-3 mx-auto m-mb-0 text-center">
          <h2 className="text-primary">{car?.title}</h2>
          <img
            style={{ objectFit: "cover" }}
            className="img-fuid"
            width={300}
            height={300}
            src={`https://avtoelon-production.up.railway.app/${car?.image}`}
            alt={car?.title}
          />
          <div className="text-center">
            <i className="fa-solid fa-user-tie"></i> {car?.author}
          </div>
          <i className="fa-solid fa-stopwatch"></i> {car?.createdAt}
          <div>
            <i className="fa-solid fa-comment"></i> {car?.comments?.length}
          </div>
        </div>
      ) : (
        <Loading />
      )}
      
    </div>
  );
};

export default Car;
