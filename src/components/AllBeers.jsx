import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const AllBeers = () => {
  const [beers, setBeers] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((results) => setBeers(results.data))
      .catch((error) => console.log("Something went wrong".error.message));
  }, []);
  return (
    <div>
      <h2>AllBeers</h2>
      {beers.map((singleBeer) => {
        return (
          <div>
            <img
              src={singleBeer.image_url}
              alt="beer-pix"
              height="80"
              width="35"
            />
            <p>{singleBeer.name}</p>
            <p>{singleBeer.tagline}</p>
            <p>{singleBeer.description}</p>
            <p>{singleBeer.contributed_by}</p>
            <Link to={`/beers/${singleBeer._id}`}>See Details</Link>
          </div>
        );
      })}
    </div>
  );
};

export default AllBeers;