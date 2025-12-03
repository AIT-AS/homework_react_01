import { v4 } from "uuid";
import { useState } from "react";
import Button from "../../components/Button/Button";
import { buttonNames } from "./data";

import "./styles.css";

function Lesson_05() {
  let [orders, setOrders] = useState([]);

  const orderListItems = orders.map((value) => {
    return (
      <li key={v4()} className="order_item">
        {value}
      </li>
    );
  });

  const buttonsList = buttonNames.map((buttonName) => {
    return (
      <div key={v4()} className="button_control">
        <Button
          name={buttonName}
          onClick={() => {
            setOrders((prevValue) => {
              return [...prevValue, buttonName];
            });
          }}
        />
      </div>
    );
  });

  return (
    <div className="lesson_05_wrapper">
      <div className="menu_wrapper">
        <h1 className="menu">Menu:</h1>
        <div className="button_wrapper">{buttonsList}</div>
      </div>

      <div className="order_wrapper">
        <p className="order_title">Your Order:</p>
        <ol className="order_list">{orderListItems}</ol>
      </div>
    </div>
  );
}

export default Lesson_05;