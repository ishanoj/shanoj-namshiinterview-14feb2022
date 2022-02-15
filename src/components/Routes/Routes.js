import React from "react-dom";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import { Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import './Routes.css';

const Routes = ({productItems, cartItems}) => {
    return (
        <Container>
        <Row>
            <Col className="cat">
                <h4>Categories</h4>
                <ul>
                    <li>All Items</li>
                </ul>
            </Col>
            <Col className="pro">
                <img src="http://img.freepik.com/free-vector/animal-food-banner-template_23-2148787395.jpg"/>
                <Switch>
                    <Route path="/" exact>
                        <Products productItems={productItems}/>
                    </Route>
                </Switch>
            </Col>
            <Col className="car">
                <Switch>
                    <Cart cartItems={cartItems}/>
                </Switch>
            </Col>
        </Row>
      </Container>
    );
};

export default Routes;