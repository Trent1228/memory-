import React from 'react'
import { Link } from 'react-router-dom'

const MainMenu = ({ className }) => (
  <div className={className}>
    <ul>
      <li>
      <Link to="/new-game">New game</Link>
      </li>
      <li>
      <Link to="/game">Resume game</Link>
      </li><br></br>
      <h2 style={{color: "Red"}}>Memory Game Rules:</h2>
      <p style={{color: "white"}}>The main board contains a bunch of cards, each of them contains some image. which are all hidden,
Each of the cards has one matching card equivalent on the board, with the same image.
You need to find all the matching cards. When you discover 2 cards that don't match, they will be hidden again.
The best thing to do is to try remember what cards you discovered and where. This will help you with finding the matching
pairs.</p>
    </ul>
  </div>
)

export default MainMenu
