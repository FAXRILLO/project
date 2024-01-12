import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getOneCategory } from "../../api/categoryRequests";
import { useParams } from "react-router-dom";
import Car from "../../components/Car/Car";
import Loading from "../../components/Loading/Loading";
import { addCars } from "../../api/carRequest";
import { useInfoContext } from "../../context/Context";
import "./Cars.css"

const Cars = () => {
  const categoryId = useParams().id;
  const [category, setCategory] = useState([]);
  const [update, setUpdate] = useState(false);
  const { logOut } = useInfoContext();


  const addCar = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData(e.target);
      const res = await addCars(data);
      toast.success(res?.data.message);
      setUpdate(!update);
    } catch (err) {
      if (err?.response?.data.message === "token is required") {
        logOut();
      }
      toast.error(err?.response?.data.message);
    }
  };

  useEffect(() => {
    const getCategory = async () => {
      try {
        const res = await getOneCategory(categoryId);
        setCategory(res.data.category);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    getCategory();
  }, [categoryId]);
  return (
    <div>
      <div className="box-last">
        <div className="container">
          <form  className="add-form" onSubmit={addCar}>
            <input
              type="text"
              name="title"
              placeholder="Car title"
              required
            />
            <input
              type="text"
              name="year"
              placeholder="Car year"
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              required
            />
            <input
              type="text"
              name="class"
              placeholder="Class"
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              required
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              required
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              required
            />
            <input type="file" name="image" required />
            <button className="btn btn-outline-success">Add</button>
          </form>
        </div>
      </div>
      {category.length > 0 ? (
        category?.map((cat) => {
          return (
            <main>
              <div className="row my-3">
                {cat?.cars?.map((car) => {
                  return <Car key={car._id} car={car} />;
                })}
              </div>
            </main>
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Cars;
