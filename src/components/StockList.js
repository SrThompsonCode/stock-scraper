import React from "react";
import "./styles/StockList.css";
import Moment from "moment/dist/moment";
import sound from "../songs/stock.mp3";

function StockList(props) {
  return (
    <React.Fragment>
      <div className='row rowStock'>
        <span title={props.data.name} className='truncate col-5'>
          {props.data.name}
        </span>
        <span className='col-2 truncate '>$ {props.data.price}</span>
        <span className='col-3 text-center truncate '>
          {Moment(props.data.fecha).format("DD/MM/YYYY hh:mm:ss")}
        </span>
        <span
          className={`truncate  col  font-weight-bold text-center ${
            props.data.stock ? "green" : "red"
          }`}>
          {props.data.stock ? "STOCK" : "NO HAY STOCK"}
          {props.data.stock ? <audio src={sound} autoPlay /> : ""}
        </span>
        {/* <hr></hr> */}
      </div>
    </React.Fragment>
  );
}

export default StockList;
