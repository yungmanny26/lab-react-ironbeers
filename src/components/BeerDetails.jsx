import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const BeerDetails = () => {
  const [beer, setBeer] = React.useState({});

  React.useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
      .then((results) => setBeer(results.data))
      .catch((error) => console.log("Something went wrong", error.message));
  }, );

  const params = useParams();
  return (
    <div>
      <h2>BeerDetails</h2>
      <img src={beer.image_url} alt="beerpic" height="80" width="35" />
      <p>{beer.name}</p>
      <p>{beer.tagline}</p>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </div>
  );
};

export default BeerDetails;