import React from "react";
import "./App.css";
import DATA from "./Data/data";
import ProductList from "./components/ProductList";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: DATA,
    };
  }
  render() {
    return (
      <div>
        <h1>Products</h1>
        <ProductList datas={this.state.products} />
      </div>
    );
  }
}
export default App;
