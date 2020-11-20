import React from "react";
import "../components/styles/CyberPunkBody.css";
import "./styles/Home.css";
import StockList from "../components/StockList";
import "./styles/Effects.css";
import { ResponsiveEmbed } from "react-bootstrap";
import Moment from "moment/dist/moment";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      loading: true,
      key: 1,
      urlToScan: "",
      fechaInicial: "",
      data: [
        {
          name: "",
          stock: false,
          price: "0",
          fecha: "",
          url: "",
        },
      ],
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const url = document.getElementById("urlToGet").value;

    if (url.length > 0) {
      this.setState({
        fechaInicial: Moment(Date.now()).format("DD/MM/YYYY hh:mm:ss"),
      });
      document.getElementById("urlToGet").value = "";
      this.componentWillUnmount();
      this.fetchStock(url);
      this.intervalId = setInterval(this.fetchStock, 45000, url);
    }
  };
  componentDidMount() {
    var xhr = new XMLHttpRequest();
    // var http = require("http");

    setInterval(function () {
      // http.get("https://stock-scrapi.herokuapp.com/webscraper");

      xhr.open("GET", "https://stock-scrapi.herokuapp.com/webscraper");
      xhr.send();
    }, 300000); // every 5 minutes (300000)
  }
  //asdasdssasdasdss
  componentWillUnmount() {
    this.setState({ loading: true, data: [] });

    clearInterval(this.intervalId);
  }

  fetchStock = async (url) => {
    if (this.state.data.length === 15) {
      this.setState({ data: [] });
      console.log(url);
    }
    this.setState({ loading: false, error: false });

    // const urlToFech = `http://localhost:8080/http://localhost:29386/webscraper?url=${url}`;

    try {
      const urlToFech = `https://stock-scrapi.herokuapp.com/webscraper?url=${url}`;

      const response = await fetch(urlToFech);

      const json = await response.json();
      if (json.data.error) {
        this.componentWillUnmount();
        this.setState({ error: true });
      } else {
        this.setState({
          data: [].concat(this.state.data, json.data),
          key: this.state.key + 1,
          urlToScan: url,
        });
      }
    } catch (error) {
      this.componentWillUnmount();

      this.setState({ error: "Invalid URL", loading: false, urlToScan: "" });
    }
  };

  // addRow() {
  //   var nextState = this.state;
  //   nextState.rows.push("placeholder");
  //   this.setState(nextState);
  // }
  render() {
    const stockList = [...this.state.data].reverse();

    return (
      <React.Fragment>
        <div className='container justify-content-center text-center'>
          <div className='pt-4 col '>
            <form onSubmit={this.handleSubmit}>
              <div className='form-group form-inline justify-content-center'>
                <input
                  required={true}
                  id='urlToGet'
                  type='url'
                  minLength='5'
                  placeholder='Insert URL'
                  className='col-7 home_input  mr-3 rounded-0 '
                />
                {/* <button className='btn btn-sm rounded-0 btn-light home_button '>
                  SCAN_
                </button> */}
                <button class=' CyberPunkBody_btn'>
                  <span class='CyberPunkBody_btn__content'>SCAN_</span>

                  <span class='CyberPunkBody_btn__label'>2077</span>
                </button>
              </div>
              {this.state.urlToScan.length > 0 && (
                <div className='text-left  header-link'>
                  <span className='font-weight-bold text-light'>Fecha: </span>
                  {this.state.fechaInicial}
                  <p className='text-left truncate'>
                    <span className='font-weight-bold text-light'>URL: </span>
                    <a
                      className='link-url'
                      target='_blank'
                      href={this.state.urlToScan}>
                      {this.state.urlToScan}
                    </a>
                  </p>
                </div>
              )}
            </form>

            <div className='card rounded-0 CyberPunkBody_card  home_card bg-light mb-3'>
              <div className='card-body  home_card_body '>
                <div className='justify-content-center row text-center '>
                  {!this.state.error && !this.state.loading && (
                    <span className='anim-luminance '>SCANNING...</span>
                  )}
                </div>
                <div id='stockContainer' className=' container'>
                  {this.state.error && (
                    <h1 className='red'>{this.state.error}</h1>
                  )}

                  {!this.state.error &&
                    stockList &&
                    stockList.map(
                      (stock, i) =>
                        stock.name.length > 0 && (
                          <StockList key={i} data={stock} />
                        )
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
