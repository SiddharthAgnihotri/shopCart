import React from "react";

function Product(props) {
  return (
    <div className="row mt-3">
      <div className="col-5">
        <h2>
          {props.list.name}
          <span class="badge text-bg-light">₹{props.list.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary" onClick={() => {props.decrementQuantity(props.index)}}>
            -
          </button>
          <button type="button" class="btn btn-secondary">
            {props.list.quantity}
          </button>
          <button type="button" class="btn btn-secondary" onClick={() => {props.incrmentQuantity(props.index)}}>
            +
          </button>
        </div>
      </div>
      <div className="col-2">
          {props.list.quantity*props.list.price}
      </div>
      <button className="col-2 btn btn-danger" onClick={() => {props.removeItem(props.index)}}>
          Remove
      </button>
    </div>
  );
}

export default Product;
