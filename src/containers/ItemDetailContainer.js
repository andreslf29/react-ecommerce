import React, { useState, useEffect } from "react";
import getItemService from "./getItemService";
import ItemDetail from "./ItemDetail";
import Loader from "../components/Loader";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const {id} =  useParams();
  useEffect(() => {
    getItemService(id).then((data) => {
      setIsLoading(false);
      setItem(data);
    });
    return () => {};
  }, []);
  return (
    <>
      { isLoading ? <Loader /> : <ItemDetail data={item} />}
    </>

  );;
};

export default ItemDetailContainer;