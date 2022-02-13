import React, { useState, useEffect } from "react";
import getItemService from "./getItemService";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  useEffect(() => {
    getItemService().then((data) => {
      setItem(data);
    });
    return () => {};
  }, []);
  return <ItemDetail data={item} />;
};

export default ItemDetailContainer;