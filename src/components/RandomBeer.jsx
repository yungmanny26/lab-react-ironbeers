import axios from "axios";
import React from "react";

const RandomBeer = () => {
    const [random, setRandom] = React.useState('')
    React.useEffect(()=>{
        axios
        .get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then((response) => {
            console.log('Random Beer', response.data)
            setRandom(response.data)
        })
        .catch((error) => console.log(error))
    }, [])
  return (
    <div>
      <h2>{random.name}</h2>
      <img src={random.image_url} alt={random.name}/>
      <p>Tagline: {random.tagline}</p>
      <p>First Brewed: {random.first_brewed}</p>
      <p>Attenuation Level: {random.attenuation_level}</p>
      <p>Description:{random.description}</p>
      <p>Contributed By: {random.contributed_by}</p>

    </div>
  );
};

export default RandomBeer;