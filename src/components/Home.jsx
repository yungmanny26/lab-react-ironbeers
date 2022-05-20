import React from 'react'
import HomePageCard from './HomePageCard'
import beers from "../assets/beers.png"
import randomBeer from "../assets/random-beer.png"
import newBeer from "../assets/new-beer.png"


const Home = () => {
  return (
    <div>
        <HomePageCard image={beers} title="beers" route="/beers"/>
        <HomePageCard image= {randomBeer} title="Random Beer" route="/random-beer"/>
        <HomePageCard image= {newBeer} title="New beer" route="/new-beer"/>
    </div>
  )
}

export default Home