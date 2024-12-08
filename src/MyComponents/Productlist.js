import React from 'react'
import Product from './Product'

function Productlist(props) {
     
  return (
     props.pList.length > 0 ?
      props.pList.map((list,i) => {
          return  <Product list={list} key={i} incrmentQuantity = {props.incrmentQuantity} index ={i} decrementQuantity = {props.decrementQuantity} removeItem ={props.removeItem}/>
      }) 
      : <h1>No Product exsist in cart</h1>
     
  )
}

export default Productlist
