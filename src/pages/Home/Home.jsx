import React from 'react'
import { useInfoContext } from '../../context/Context'

const Home = () => {
  const {logOut} = useInfoContext()
  return (
    <div>
      <h1>Home</h1>
      <button onClick={logOut}>Log out</button>
    </div>
  )
}

export default Home