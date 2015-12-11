import React, { Component, PropTypes } from 'react'
import {Row, Col, Button, PageHeader, Jumbotron } from 'react-bootstrap'
import {Link} from 'react-router';

class Home extends Component {

  addToCart(id){
    console.log(id);
  }

  render() {
    const app = this.props.app;
    const products = app.products;
    return (
      <div style={{'paddingTop':'2em'}}>
        {products.map(product =>
            <ProductItem
              key={product.id}
              product={product}
              onAddToCartClicked={() => this.props.addToCart(product.id)} />
        )}
      </div>
    );
  }

}

class ProductItem extends Component {
  render() {
    const { product } = this.props

    return (
      <Col xs={12} md={6} >
        <div style={homeStyle.mainContainer}>
          <h2 style={homeStyle.headerPadding}> { product.title} </h2>
          <img style={{'width':'100%','borderRadius': '0.4em'}} src={ product.url } />
        </div>
        <Row className="show-grid" >
          <Col xs={8} >
            <h5 style={homeStyle.headerPadding}> { product.discription} </h5>
            <p style={homeStyle.headerPadding}> Rs. { product.price} </p>
          </Col>
          <Col xs={4} style={{'textAlign': 'right'}}>
            <Button bsStyle="primary"
              onClick={this.props.onAddToCartClicked}
              disabled={product.items > 0 ? false : true}>
              {product.items > 0 ? 'Add to cart' : 'Sold Out'}
            </Button>
          </Col>
        </Row>
      </Col>
    )
  }
}


const homeStyle = {
  mainContainer : { background:'white',paddingBottom:'0.8em' },
  headerPadding :{ paddingBottom:'1em' }
};

export default Home
