import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";

const Category = ({ category }) => {
  return (
    <div className="d-flex">
      <Link to={`/cars/${category._id}`}>
      <div  class="card mb-3 text-center">
      <img
        style={{ objectFit: "cover" }}
        className="img-fuid"
        width={300}
        height={300}
        src={`https://avtoelon-production.up.railway.app/${category?.image}`}
        class="card-img-top"
        alt={category.title}
      />
      <div class="card-body">
        <h5 class="card-title">{category.title}</h5>
      </div>
    </div>
      </Link>
    </div>
  );
};

export default Category;
