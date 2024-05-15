import axios from "axios"
import React, { useState } from "react"

const HOST  = process.env.REACT_APP_CONTAINER_HOST;
console.log("HOST", `${HOST}`)
const API_URL = `${HOST}/api`

console.log(API_URL)

function Check() {
  const [name, setName] = useState("")
  const [result, setResult] = useState([])

  const handleInputChange = (event) => {
    setName(event.target.value)
  }

  const handleSearch = async () => {
    try {
        console.log("API:", `${API_URL}/check`)
      const response = await axios.post(`${API_URL}/check`, { nm: name })
      setResult(response.data.result)
    } catch (error) {
        if (error.code === 'ERR_NETWORK'){
            console.error("Error:", " post failed network")
        }
      console.error("Error:", error)
    }
  }

  return (
    <div>
      <h1>Check</h1>
      <div>
        <input type="text" value={name} onChange={handleInputChange} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul>
        {result.map((url, index) => (
          <li key={index}>{url}</li>
        ))}
      </ul>
    </div>
  )
}

export default Check
