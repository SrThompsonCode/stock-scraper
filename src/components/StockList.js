import React from "react";
import "./styles/StockList.css";
import Moment from "moment/dist/moment";

function StockList(props) {
  return (
    <React.Fragment>
      <div className='row rowStock'>
        <a
          href={`${props.data.url}`}
          target='_blank'
          title={props.data.name}
          className='truncate col-5'>
          {props.data.name}
        </a>
        <span className='col-2'>$ {props.data.price}</span>
        <span className='col-3 text-center'>
          {Moment(props.data.fecha).format("DD/MM/YYYY hh:mm:ss")}
        </span>
        <span
          className={`col-2 font-weight-bold text-center ${
            props.data.stock ? "green" : "red"
          }`}>
          {props.data.stock ? "STOCK" : "NO HAY STOCK"}
        </span>
        {/* <hr></hr> */}
      </div>
    </React.Fragment>
  );
}

export default StockList;
