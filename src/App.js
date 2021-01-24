import { Component } from "react";
import "./App.css";
import axios from "axios";
import CardList from "./Components/CardList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cart: [],
    };
  }

  componentDidMount() {
    const url = `http://localhost:3007/products`;
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        this.setState({ products: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  productsExists = (productId) => {
    return this.state.cart.some(function (el) {
      return el.id === productId;
    });
  };
  onAddToCart = (e, product, cartQty) => {
    e.preventDefault();
    console.log("cartQty::", cartQty);
    console.log("product::", product);

    if (cartQty <= 0) {
      alert("Quantity is zero");
      return;
    }
    let cart = this.state.cart;
    const productToAdd = { ...product, cartQty };
    console.log("cart::before", cart);
    console.log("productToAdd", productToAdd);

    if (this.productsExists(product.id)) {
      cart = this.state.cart.filter((x) => x.id !== product.id);
      cart = [...cart, productToAdd];
    } else {
      cart = [...this.state.cart, productToAdd];
    }

    this.setState({ cart });
  };

  render() {
    const products = this.state.products;
    return (
      <CardList
        products={products}
        addToCart={this.onAddToCart}
        cart={this.state.cart}
      />
    );
  }
}

export default App;
