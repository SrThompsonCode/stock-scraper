import React from "react";
import "./styles/Body.css";
import "../components/styles/CyberPunkBody.css";
import StockList from "./StockList";

function Body(props) {
  return (
    <React.Fragment>
      <div className='body align-items-center body'>
        <div className='container justify-content-center text-center'>
          <div className='col'>
            <h1 className='pt-4'>STOCK SCRAPER</h1>
            <div className='form-group form-inline justify-content-center'>
              <input
                type='text'
                placeholder='Give me that'
                className=' rounded-0 form-control btn-light form-control-sm mr-3 w-75 body_input '
              />
              <button className='btn btn-sm rounded-0 btn-light  body_button '>
                Search
              </button>
            </div>

            <div class='card rounded-0 CyberPunkBody_card  body_card bg-light mb-3'>
              <div class='card-body text-black-50'>
                <StockList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Body;
