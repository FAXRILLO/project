import React, { useEffect, useState } from 'react'

import Category from "../../components/Category/Category"
import Loading from "../../components/Loading/Loading"
import { toast } from 'react-toastify';
import { getAllCategory } from '../../api/categoryRequests';
const Home = () => {
  const [category, setCategory] = useState([]);
  
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
  }, []);

  return (
    <>
    {category.length > 0 ? (
      category.map((cat) => {
        return <Category key={cat.id} category={cat} />;
      })
    ) : (
      <Loading/>
    )}  </>
  )
}

export default Home