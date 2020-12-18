import React from "react";
import "./styles/StockList.css";
import Moment from "moment/dist/moment";
import sound from "../songs/stock.mp3";
import NumberFormat from "react-number-format";

function StockList(props) {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  /* $2,500.00 */
  console.log(formatter.format(props.data.price));

  return (
    <React.Fragment>
      <div className='row rowStock'>
        <span title={props.data.name} className='truncate col-5'>
          {props.data.name}
        </span>
        {/* <span className='col-2 truncate '>$ {props.data.price}</span> */}
        <NumberFormat
          value={props.data.price.replace(/^0+/, "")}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />

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
