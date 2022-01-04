import React from "react";
import Card from "./components/Card";
import CardList from "./components/CardList";
import "./style.css";
import DATA from "./Data/data";
import ProductList from "./components/ProductList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // users: [],
      // searchFilter: "",
      products: DATA,
    };
  }

  // componentDidMount() {
  //   fetch(
  //     "https://jsonplaceholder.typicode.com/users?fbclid=IwAR3NqQybTN8XGhIvKceDoJ4iNsuq9FAtm11cVpgKJPbhtUYhS_ogQpsdYEY"
  //   )
  //     .then((response) => response.json())
  //     .then((user) => this.setState({ users: user }));
  // }

  render() {
    // const { users, searchFilter } = this.state;

    // const filteredUsers = users.filter((user) =>
    //   user.name.toLowerCase().includes(searchFilter.toLowerCase())
    // );

    return (
      <div>
        {/* <h1>List of Names</h1>
        <input
          type="search"
          placeholder="Search"
          onChange={(e) => {
            this.setState({ searchFilter: e.target.value });
          }}
        />
        
        <CardList datas={filteredUsers} />; */}
        <h1>products</h1>
        <ProductList datas={this.state.products} />
      </div>
    );
  }
}
export default App;
