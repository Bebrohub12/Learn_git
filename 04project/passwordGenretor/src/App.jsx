import React, { useState } from 'react'

function App() {

  const [password, setPassword] = useState("xyz")
  const [numAllow, setNumAllow] = useState(false)

  const genratePass = () => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numAllow){
      str+="0123456789"
    }
    for (let i = 1; i <= 5; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str[char]
    }

    setPassword(pass)
  }

  return (
    <div>
      <h2>{password}</h2>
      <input type="checkbox" value={numAllow} onClick={() => setNumAllow((prev) => !prev)} />
      <label htmlFor="">Number</label>
      <button onClick={genratePass}>genratePassword</button>
    </div>
  )
}

export default App