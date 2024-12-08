import "./App.css";
import Navbar from "./MyComponents/Navbar";
import Productlist from "./MyComponents/Productlist";
import Footer from "./MyComponents/Footer";
import React,{useState} from "react";
import Additem from "./MyComponents/Additem";

function App() {
  const initialList = [
    {
      name:"Chips",
      price:20,
      quantity:0,
    },
    {
      name:"Busicuits",
      price:50,
      quantity:0,
    },
    {
      name:"Choclate",
      price:5,
      quantity:0,
    },
    {
      name:"Cold Drink",
      price:20,
      quantity:0,
    }
  ]
  const [list, setList] = useState(initialList)
  const [totalAmount, setTotalAmount] = useState(0)

    const incrmentQuantity = (index) => {
    let newList = [...list]
    let newTotalAmount = totalAmount
    newList[index].quantity++
    newTotalAmount += newList[index].price
    setTotalAmount(newTotalAmount)
    setList(newList);
  }
    const decrementQuantity = (index) => {
    let newList = [...list]
    let newTotalAmount = totalAmount
    if(newList[index].quantity > 0) { 
      newList[index].quantity--
      newTotalAmount -= newList[index].price
     }
     setTotalAmount(newTotalAmount)
    setList(newList);
  }

  const resetQuantity = () => {
    let newList = [...list]
    newList.map((list) => {
      list.quantity = 0
    }) 
    setList(newList)
    setTotalAmount(0)
  }

  const removeItem = (index) =>{
    let newList = [...list]
    let newTotalAmount = totalAmount
    newTotalAmount -= newList[index].quantity * newList[index].price
    newList.splice(index,1)
    setList(newList)  
    setTotalAmount(newTotalAmount)
  }

  const addItem = (name,price) => {
    let newList = [...list]
    newList.push({price:price, name: name, quantity:0 })
    setList(newList)
  }

  return <div>
      <Navbar />
      <main className="container mt-5">
        <Additem addItem ={addItem} />
        <Productlist pList = {list} incrmentQuantity = {incrmentQuantity} decrementQuantity ={decrementQuantity} removeItem={removeItem}/>
      </main>
      <Footer totalAmount={totalAmount} resetQuantity ={resetQuantity}/>
  </div>
}

export default App;
