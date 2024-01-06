import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getOneCategory } from "../../api/categoryRequests";
import { useParams } from "react-router-dom";
import Car from "../../components/Car/Car";
import Loading from "../../components/Loading/Loading";

const Cars = () => {
  const categoryId = useParams().id;
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const getCategory = async () => {
      try {
        const res = await getOneCategory(categoryId);
        setCategory(res.data.category[0]);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    getCategory();
  }, [categoryId]);
  return (
    <div>
      <main>
        <div>
          {category ? (
            <>
              <div className="container">
                <h1 className="text-center">
                  Category title: {category?.title}, Cars:{" "}
                  {category?.cars?.length}{" "}
                </h1>
              </div>

              <hr />
            </>
          ) : (
            <Loading />
          )}
        </div>
        <div className="row my-3">
          {category?.cars?.map((car) => {
            return <Car key={car._id} car={car} />;
          })}
        </div>
      </main>
    </div>
  );
};

export default Cars;
