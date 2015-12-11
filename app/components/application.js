import React, { Component, PropTypes } from 'react'
import {Grid, Row, Col, PageHeader, Nav } from 'react-bootstrap'
import {Link} from 'react-router';

class Application extends Component {
  render() {
    const app = this.props.app;
    return (
      <Grid >
        <Row className="show-grid">
          <Col xs={12} md={8} >
            <h1>Welcome to <Link to="/">yumist</Link>! <small> by praveen yadav</small></h1>
          </Col>
          <Col xs={12} md={4} >
            <Nav pullRight={true} bsStyle='pills'>
              {
                app.addedIds.length
                ? <li><Link to="/cart"> Cart( {app.addedIds.length} items) </Link></li>
                : <li> <Link to="/"> Cart( empty ) </Link></li>
              }
            </Nav>


            <div id="navbar">
                <ul className="nav navbar-nav navbar-right">

                </ul>
            </div>

          </Col>
        </Row>
        <Row className="show-grid" style={appStyle.mainContainer}>
          { this.props.children }
        </Row>
      </Grid>
    );
  }

}

const appStyle = {
  mainContainer : {
    paddingTop:'3em'
  }
};

export default Application
