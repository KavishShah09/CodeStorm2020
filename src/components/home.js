import React from "react";
import "../App.css";
import { Image, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Items from "./Items";

function Home() {
  return (
    <div className="home-page">
      <Image className="background" src="images/background1.png" />
      <Router>
        <Switch>
          <Button
            href="/shop"
            className="shop-now btn "
            variant="outline-success"
          >
            SHOP NOW
          </Button>{" "}
          <Route exact path="/shop" component={Items} />
        </Switch>
      </Router>
      <h1 className="Environment">
        The Clothing sector represents around 3% <br /> of the world’s global
        production emissions of CO2
      </h1>
    </div>
  );
}

export default Home;
