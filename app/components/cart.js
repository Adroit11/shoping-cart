import React, { Component, PropTypes } from 'react'
import {Col, PageHeader, Jumbotron, Form, Input, ButtonInput } from 'react-bootstrap'
import {Link} from 'react-router';

class Cart extends Component {
  constructor(props) {
		super(props);

		this.state = {
      name: '',
      email: '',
      phone:'',
      order:null

		};
	}

  // on changing email form value will update state
  nameHandleChange(e) {
    this.setState({
      name: this.refs.name.getValue()
    });
  }
  // on changing email form value will update state
  emailHandleChange(e) {
    this.setState({
      email: this.refs.email.getValue()
    });
  }

  // on changing phone form value will update state
  phoneHandleChange(e) {
    this.setState({
      phone: this.refs.phone.getValue()
    });
  }

  // dispatch action to reducer
  handleCheckout(e){
    // handel login request here
    e.preventDefault()
    if( (this.state.name == '') || (this.state.phone == '')){
      return;
    }else{
      this.setState({
        order : {
          name: this.state.name,
          phone: this.state.phone
        }
      })

      this.props.checkout({
        name: this.state.name,
        phone: this.state.phone
      })
      // reset value
      this.setState({
        name: '',
        email: '',
        phone:''
      })
    }
  }

  render() {
    const products = this.props.cartItems;
    let total = 0 ;
    return (
      <Col xs={12}>
        {
          this.state.order
          ? (<div style={homeStyle.mainContainer}>
              <Jumbotron style={homeStyle.mainContainer}>
                <h2 style={homeStyle.headerPadding}>Hello, {this.state.order.name}!</h2>
                <p>Thaks for using our services. Your order will be dispatched soon.</p>

              </Jumbotron>
            </div>
          )
          : (
            <div style={homeStyle.mainContainer}>
              <Col xs={12} md={6} >
                <div style={homeStyle.mainContainer}>
                  <h4 style={homeStyle.headerPadding}> Cart itmes </h4>
                  {products.map(product => {
                    let price = product.price;
                    total += price
                    return (<Product
                      title={product.title}
                      url={product.url}
                      price={product.price}
                      discription={product.discription}
                      key={product.id}/>)
                  })}
                </div>
                <div  style={{'paddingTop':'1em'}}>Total amount to pay is Rs. <span style={{'fontWeight':'bold'}}>{total}</span></div>
              </Col>
              <Col xs={12} md={6} >
                <div style={homeStyle.mainContainer}>
                  <h4 style={homeStyle.headerPadding}> Checkout now! </h4>
                </div>
                <form className="form-horizontal">
                  <Input type="text" label="Your name"
                    ref="name"
                    value={this.state.name}
                    onChange={this.nameHandleChange.bind(this)}
                    placeholder="Enter your name here"
                    />
                  <Input type="email" label="Email"
                    ref="email"
                    value={this.state.email}
                    onChange={this.emailHandleChange.bind(this)}
                    placeholder="Enter your email id" />
                  <Input type="phone" label="Phone no"
                    ref="phone"
                    value={this.state.phone}
                    onChange={this.phoneHandleChange.bind(this)}
                    placeholder="Enter your Phone no here" required={true} />
                  <ButtonInput  type="submit" bsStyle="success" value="Checkout now!" onClick={this.handleCheckout.bind(this)} />
                </form>
              </Col>

            </div>
          )
        }
      </Col>
    );
  }

}

class Product extends Component {
  render() {
    const { price, discription, title, url } = this.props
    return (
      <div style={{'paddingBottom':'0.5em'}}>
        <img style={{'width':'100px','borderRadius': '0.4em'}} src={ url } />
        <p> {discription} - Rs. {price} </p>
      </div>
    )
  }
}

const homeStyle = {
  mainContainer : { background:'white' },
  headerPadding :{ paddingBottom:'1em' }
};

export default Cart
