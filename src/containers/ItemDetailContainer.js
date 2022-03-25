import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import Loader from "../components/Loader";
import { useParams } from "react-router";
import { db } from "../Firebase/index";
import { doc, getDoc } from "firebase/firestore/lite";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getDoc(doc(db, "phones", id)).then((querySnapshot) => {
      const auxProduct = { id: querySnapshot.id, ...querySnapshot.data() };
      setItem(auxProduct);
      console.log(auxProduct);
      setIsLoading(false);
    });
  }, [id]);
  return <>{isLoading ? <Loader /> : <ItemDetail data={item} />}</>;
};

export default ItemDetailContainer;
