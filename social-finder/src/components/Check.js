import axios from "axios"
import React, { useState } from "react"

const API_URL = "http://localhost:5001/api"

function Check() {
  const [name, setName] = useState("")
  const [result, setResult] = useState([])

  const handleInputChange = (event) => {
    setName(event.target.value)
  }

  const handleSearch = async () => {
    try {
      const response = await axios.post(`${API_URL}/check`, { nm: name })
      setResult(response.data.result)
    } catch (error) {
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
