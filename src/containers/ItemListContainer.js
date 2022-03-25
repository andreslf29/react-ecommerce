import React, {useState, useEffect} from "react";
import "../styles/ItemListContainer.scss";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import Loader from "../components/Loader";
import { getAllPhones, getAllPhonesFrom } from "../Firebase";




export default function ItemListContainer() {
  //Iniciar estado en array[]
  let { categoryid } = useParams();
  //console.log({ categoryid });
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //encapsular el llamdo de la promesa en useEffect
  useEffect(() => {
    let requestDatos = categoryid ? getAllPhonesFrom(categoryid)  : getAllPhones();

    //ejecuta then despues de la promesa. Guardar los satos recibidos en el estado
    requestDatos
      .then((itemsPromise) => {
        setIsLoading(false);
        setItems(itemsPromise);
      })
  },[categoryid]);
  return (
    <section className="container-fluid row">
      {isLoading ? <Loader />  : <ItemList items={items} />}
    </section>
    );
}
