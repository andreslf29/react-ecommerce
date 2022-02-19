import React, { useState, useEffect } from "react";
import getItemService from "./getItemService";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const {id} =  useParams();
  useEffect(() => {
    getItemService(id).then((data) => {
      setItem(data);
    });
    return () => {};
  }, []);
  return <ItemDetail data={item} />;
};

export default ItemDetailContainer;