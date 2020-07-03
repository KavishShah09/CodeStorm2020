import React, { useState } from "react";
import "../App.css";
import { Image, Button } from "react-bootstrap";

function Home() {
  const [imageURL, setImageURL] = useState("images/background1.png");

  return (
    <div className="home-page">
      <Image className="background mt-2" src={imageURL} />
      <Button
        href="/shop"
        className="shop-now btn "
        onMouseEnter={() => setImageURL("images/safeearth.png")}
        onMouseOut={() => setImageURL("images/background1.png")}
        variant="outline-success"
      >
        SHOP NOW
      </Button>{" "}
      <h1 className="Environment">
        The Clothing sector represents around 3% <br /> of the world’s global
        production emissions of CO2
      </h1>
    </div>
  );
}

export default Home;
