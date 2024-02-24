import React from 'react'
import Header from "../../components/Header/Header.js"
import Discover from "../../components/Discover/Discover.js"
import Explore from '../../components/Explore/Explore.js'
import History from "../../components/History/History.js"

const HomePage = () => {
  return (
    <div>
    <Header/>
    <Explore/>
    <Discover/>
    <History/>
    </div>
  )
}

export default HomePage
