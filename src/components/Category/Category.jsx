import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";

const Category = ({ category }) => {
  return (
   <div className="categories">
     <div className="col-4">
      <Link to={`/cars/${category._id}`}>
        <div className="card mb-3 text-center">
          <img
            style={{ objectFit: "cover" }}
            className="img-fuid card-img-top"
            width={300}
            height={300}
            src={`https://avtoelon-production.up.railway.app/${category?.image}`}
            alt={category.title}
          />
          <button className="btn btn-warning"><i class="fa-solid fa-pen"></i></button>
          <button className="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
          <div className="card-body">
            <h5 className="card-title">{category.title}</h5>
          </div>
        </div>
      </Link>
    </div>
   </div>
  );
};

export default Category;
