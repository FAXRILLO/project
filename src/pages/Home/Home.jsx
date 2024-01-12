import React, { useEffect, useState } from "react";

import Category from "../../components/Category/Category";
import Loading from "../../components/Loading/Loading";
import { toast } from "react-toastify";
import { addCategory, getAllCategory } from "../../api/categoryRequests";
import { useInfoContext } from "../../context/Context";
import "./Home.css"
const Home = () => {
  const { category, setCategory } = useInfoContext();
  const [update, setUpdate] = useState(false);

  const addCat = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData(e.target);
      const res = await addCategory(data);
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
    const getCategorys = async () => {
      try {
        toast.loading("Downloading categories ...");
        const res = await getAllCategory();

        toast.dismiss();
        setCategory(res?.data?.category);
      } catch (error) {
        toast.dismiss();
        toast.error(error.response.data.message);
      }
    };

    getCategorys();
  }, [update]);

  const { logOut } = useInfoContext();

  return (
    <>
      <div className="box">
      <div className="container">
        <form className="add-form" onSubmit={addCat}>
          <input
            type="text"
            name="title"
            placeholder="Category title"
            required
          />
          <input type="file" name="image" required />
          <button className="btn btn-outline-success">Add</button>
        </form>
      </div>  
      </div>
      {category.length > 0 ? (
        category.map((cat) => {
          return <Category className='col-3' key={cat.id} category={cat} />;
        })
      ) : (
        <Loading />
      )}{" "}
    </>
  );
};

export default Home;
