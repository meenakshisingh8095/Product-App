import { Component } from "react";
import "../App.css";
import img from "./product_img.jpg";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartQty: 0,
    }
  }

  handleAddToCart = (product) => {

  }

  increaseQty = () => {
    if (this.state.cartQty < this.props.product.quantity) {
      this.setState({
        cartQty: this.state.cartQty + 1
      });
    }

  }
  decreaseQty = () => {
    if (this.state.cartQty > 0) {
      this.setState({
        cartQty: this.state.cartQty - 1
      });
    }

  }

  render() {
    const product = this.props.product;

    return (
      <div className="container">
        <div className="cart">
          <div className="cart-products">
            <div className="product">
              <img src={img} alt="NOT Found" />
              <div className="product-info">
                <h2 className="brand-name">{product.brand_name}</h2>
                <p>{product.product_name}</p>
                <p>Items Left : {product.quantity}</p>
                <p>{product.discount}% OFF</p>
                <p>MRP {product.MRP}</p>
                <h3 className="price">Rs. {product.MRP - (product.MRP * product.discount / 100)}</h3>
                <span>
                  <button className="button" onClick={(e) => this.props.addToCart(e, product, this.state.cartQty)} >ADD CART</button>
                  <button className="buttons button-add" onClick={this.increaseQty}>+</button>
                  <span className="span-size">{this.state.cartQty}</span>
                  <button className="buttons button-add" onClick={this.decreaseQty}>-</button>
                </span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
