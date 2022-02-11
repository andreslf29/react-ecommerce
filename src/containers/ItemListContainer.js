import React, {useState, useEffect} from "react";
import "../styles/ItemListContainer.scss";
import ItemList from "./ItemList";
//import ItemCount from "../components/ItemCount";



  const productsDB = [
    {
      stock: "3",
      nombre: "Fantastic Fresh Towels",
      descripcion:
        "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      imagen: "http://placeimg.com/640/480/animals",
      precio: "879.00",
      id: "1",
    },
    {
      stock: "7",
      nombre: "Incredible Steel Soap",
      descripcion:
        "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
      imagen: "http://placeimg.com/640/480/animals",
      precio: "962.00",
      id: "2",
    },
    {
      stock: "9",
      nombre: "Handcrafted Concrete Sausages",
      descripcion:
        "The Football Is Good For Training And Recreational Purposes",
      imagen: "http://placeimg.com/640/480/abstract",
      precio: "159.00",
      id: "3",
    },
    {
      stock: "11",
      nombre: "Small Rubber Fish",
      descripcion:
        "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      imagen: "http://placeimg.com/640/480/food",
      precio: "516.00",
      id: "4",
    },
    {
      stock: "13",
      nombre: "Rustic Granite Hat",
      descripcion:
        "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
      imagen: "http://placeimg.com/640/480/abstract",
      precio: "823.00",
      id: "5",
    },
    {
      stock: "2",
      nombre: "Ergonomic Granite Gloves",
      descripcion:
        "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
      imagen: "http://placeimg.com/640/480/nightlife",
      precio: "747.00",
      id: "6",
    },
    {
      stock: "13",
      nombre: "Intelligent Frozen Chair",
      descripcion:
        "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
      imagen: "http://placeimg.com/640/480/technics",
      precio: "527.00",
      id: "7",
    },
    {
      stock: "8",
      nombre: "Refined Granite Chair",
      descripcion:
        "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      imagen: "http://placeimg.com/640/480/fashion",
      precio: "407.00",
      id: "8",
    },
    {
      stock: "6",
      nombre: "Small Fresh Salad",
      descripcion:
        "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
      imagen: "http://placeimg.com/640/480/business",
      precio: "894.00",
      id: "9",
    },
    {
      stock: "2",
      nombre: "Incredible Steel Shoes",
      descripcion:
        "The Football Is Good For Training And Recreational Purposes",
      imagen: "http://placeimg.com/640/480/sports",
      precio: "703.00",
      id: "10",
    },
    {
      stock: "4",
      nombre: "Generic Rubber Bacon",
      descripcion:
        "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
      imagen: "http://placeimg.com/640/480/abstract",
      precio: "493.00",
      id: "11",
    },
    {
      stock: "4",
      nombre: "Handcrafted Plastic Fish",
      descripcion:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      imagen: "http://placeimg.com/640/480/food",
      precio: "747.00",
      id: "12",
    },
    {
      stock: "5",
      nombre: "Sleek Rubber Cheese",
      descripcion:
        "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      imagen: "http://placeimg.com/640/480/fashion",
      precio: "776.00",
      id: "13",
    },
    {
      stock: "3",
      nombre: "Gorgeous Concrete Chips",
      descripcion:
        "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
      imagen: "http://placeimg.com/640/480/nature",
      precio: "834.00",
      id: "14",
    },
    {
      stock: "7",
      nombre: "Awesome Cotton Soap",
      descripcion:
        "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      imagen: "http://placeimg.com/640/480/cats",
      precio: "720.00",
      id: "15",
    },
  ];

  function obtenerDatosDB() {
    let error;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productsDB);
      }, 2000);
      if (error) {
        reject(new Error("Error obteniendo datos"));
      }
    });
  }


export default function ItemListContainer() {
  //Iniciar estado en array[]

  const [items, setItems] = useState([]);

  //encapsular el llamdo de la promesa en useEffect
  useEffect(() => {
    let requestDatos = obtenerDatosDB();

    //ejecuta then despues de la promesa. Guardar los satos recibidos en el estado
    requestDatos
      .then((itemsPromise) => {
        setItems(itemsPromise);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      })
      .finally(() => {
        console.log("Promesa terminada");
      });
  },[]);
  return (
    
    <section className="container-fluid row">
      <ItemList items={items} />
    </section>
    );
}
