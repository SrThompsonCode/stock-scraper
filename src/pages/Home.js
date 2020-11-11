import React from "react";
import "../components/styles/CyberPunkBody.css";
import "./styles/Home.css";
import StockList from "../components/StockList";
import "./styles/Effects.css";
import { ResponsiveEmbed } from "react-bootstrap";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      loading: true,
      key: 1,
      urlToScan: "",
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
      document.getElementById("urlToGet").value = "";
      this.componentWillUnmount();
      this.fetchStock(url);
      this.intervalId = setInterval(this.fetchStock, 30000, url);
    }
  };
  //asdasdssasdasd
  componentWillUnmount() {
    this.setState({ loading: true, data: [] });

    clearInterval(this.intervalId);
  }

  fetchStock = async (url) => {
    if (this.state.data.length === 15) {
      this.setState({ data: [] });
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
        });
      }
    } catch (error) {
      this.setState({ error: "Invalid URL", loading: false });
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
                  className='col-7 btn-light form-control form-control-sm  mr-3 rounded-0 home_input'
                />
                <button className='btn btn-sm rounded-0 btn-light home_button '>
                  Scan
                </button>
              </div>
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
