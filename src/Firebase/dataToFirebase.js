import { db } from './index';
import {collection, setDoc, doc} from 'firebase/firestore/lite';

const productsDB = [
    {
      "nombre": "Tasty Frozen Chicken",
      "descripcion": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      "imagen": "http://placeimg.com/640/480/nature",
      "precio": "142.00",
      "stock": 37,
      "marca": "realme",
      "id": "1"
     },
     {
      "nombre": "Refined Cotton Pizza",
      "descripcion": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
      "imagen": "http://placeimg.com/640/480/abstract",
      "precio": "152.00",
      "stock": 25,
      "marca": "xiaomi",
      "id": "2"
     },
     {
      "nombre": "Unbranded Frozen Bacon",
      "descripcion": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      "imagen": "http://placeimg.com/640/480/nightlife",
      "precio": "419.00",
      "stock": 48,
      "marca": "samsung",
      "id": "3"
     },
     {
      "nombre": "Refined Steel Keyboard",
      "descripcion": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      "imagen": "http://placeimg.com/640/480/city",
      "precio": "748.00",
      "stock": 0,
      "marca": "realme",
      "id": "4"
     },
     {
      "nombre": "Licensed Granite Pizza",
      "descripcion": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      "imagen": "http://placeimg.com/640/480/business",
      "precio": "128.00",
      "stock": 54,
      "marca": "xiaomi",
      "id": "5"
     },
     {
      "nombre": "Intelligent Steel Hat",
      "descripcion": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      "imagen": "http://placeimg.com/640/480/animals",
      "precio": "607.00",
      "stock": 6,
      "marca": "samsung",
      "id": "6"
     },
     {
      "nombre": "Handmade Steel Fish",
      "descripcion": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
      "imagen": "http://placeimg.com/640/480/abstract",
      "precio": "240.00",
      "stock": 90,
      "marca": "apple",
      "id": "7"
     },
     {
      "nombre": "Small Granite Cheese",
      "descripcion": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      "imagen": "http://placeimg.com/640/480/technics",
      "precio": "409.00",
      "stock": 94,
      "marca": "realme",
      "id": "8"
     },
     {
      "nombre": "Practical Steel Car",
      "descripcion": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      "imagen": "http://placeimg.com/640/480/business",
      "precio": "368.00",
      "stock": 67,
      "marca": "samsung",
      "id": "9"
     },
     {
      "nombre": "Intelligent Wooden Pants",
      "descripcion": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      "imagen": "http://placeimg.com/640/480/fashion",
      "precio": "884.00",
      "stock": 75,
      "marca": "apple",
      "id": "10"
     },
     {
      "nombre": "Fantastic Granite Mouse",
      "descripcion": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
      "imagen": "http://placeimg.com/640/480/fashion",
      "precio": "380.00",
      "stock": 42,
      "marca": "samsung",
      "id": "11"
     },
     {
      "nombre": "Handcrafted Steel Chicken",
      "descripcion": "The Football Is Good For Training And Recreational Purposes",
      "imagen": "http://placeimg.com/640/480/people",
      "precio": "526.00",
      "stock": 21,
      "marca": "apple",
      "id": "12"
     },
     {
      "nombre": "Fantastic Plastic Soap",
      "descripcion": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
      "imagen": "http://placeimg.com/640/480/sports",
      "precio": "905.00",
      "stock": 2,
      "marca": "realme",
      "id": "13"
     },
     {
      "nombre": "Incredible Steel Shirt",
      "descripcion": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      "imagen": "http://placeimg.com/640/480/city",
      "precio": "415.00",
      "stock": 21,
      "marca": "xiaomi",
      "id": "14"
     },
     {
      "nombre": "Licensed Wooden Chair",
      "descripcion": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      "imagen": "http://placeimg.com/640/480/animals",
      "precio": "114.00",
      "stock": 98,
      "marca": "xiaomi",
      "id": "15"
     }
  ];


  async function dataToFirebase(){
      productsDB.forEach((item)=>{
          const newItem = doc(collection(db,"phones"));

          setDoc(newItem,item).then(()=>{
              console.log("document ID", newItem.id)
          })
          .catch(err =>{
              console.log("error",err)
          })
      })
  }

export default dataToFirebase;