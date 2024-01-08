import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getOneCategory } from "../../api/categoryRequests";
import { useParams } from "react-router-dom";
import Car from "../../components/Car/Car";
import Loading from "../../components/Loading/Loading";

const Cars = () => {
  const categoryId = useParams().id;
  const [category, setCategory] = useState([]);

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
      {category.length > 0 ? (
        category?.map((cat) => {
          return (
            <main>
              <div>
                <div className="container">
                  <h1 className="text-center">
                    <h2 className="badge bg-primary">
                      Category title: {cat?.title} , Cars: {cat?.cars?.length}
                    </h2>{" "}
                  </h1>
                </div>

                <hr />
              </div>
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
