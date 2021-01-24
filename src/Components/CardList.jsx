import { Component } from 'react';
import Card from './Card';
import Modal from './Model';

export default class CardList extends Component {
  constructor(props){
    super(props);
    this.state={
      isModalShow:false
    }
  }
  
  render() {
    let qty = 0
    let total = 0
    let addModalClose=()=>this.setState({isModalShow:false})
    if (this.props.cart.length > 0) {
      this.props.cart.forEach(el => {
        qty += el.cartQty
        total = (el.MRP - (el.MRP * el.discount / 100)) * qty
      });
    }
    return (
      <div>
      <div>
        <h3>Shopping Cart</h3>
        { this.props.products.map(product =>
          <Card key={product.id} product={product} addToCart={this.props.addToCart} />
        )}
        {/* <div className="check-container">
          <h2>Qty {qty}</h2>
          <h2>Total {total}
            <button className="checkout-button" onClick={()=>this.setState({isModalShow:true})}>Checkout</button>
            <Modal  show={this.state.isModalShow} total={total}  onHide={addModalClose}/>
          </h2>
        </div > */}
      </div >
      <div className="check-container">
          <h2>Qty {qty}</h2>
          <h2>Total {total}
            <button className="checkout-button" onClick={()=>this.setState({isModalShow:true})}>Checkout</button>
            <Modal  show={this.state.isModalShow} total={total}  onHide={addModalClose}/>
          </h2>
        </div >
      </div>
    )
  }
}