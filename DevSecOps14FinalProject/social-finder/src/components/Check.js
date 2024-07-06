import axios from "axios";
import React, { useState } from "react";
import './Check.css';

const API_URL = 'http://34.27.92.249:5001/api';

function Check() {
  const [name, setName] = useState("");
  const [result, setResult] = useState([]);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.post(`${API_URL}/check`, { nm: name }, {
        headers: {
          'Content-Type': 'application/json'
        },
      });
      console.log("Response:", response);
      setResult(response.data.result);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.log("Error:", error);
      if (error.response) {
        console.error("Error Response:", error.response.data);
      } else if (error.request) {
        console.error("Error Request:", error.request);
      } else {
        console.error("Error Message:", error.message);
      }

      if (error.code === 'ECONNABORTED') {
        console.error("Timeout Error: Post request took too long");
      } else if (error.code === 'ERR_NETWORK') {
        console.error("Network Error: Post failed");
      }

      setError(error.message);
    }
  };


  return (
    <div className="container">
      <h1 className="title">Social Media Search</h1>
      <p className="description">Enter a name to search for profiles on various social media platforms.</p>
      <div className="input-container">
        <input type="text" value={name} onChange={handleInputChange} className="input" placeholder="Enter name" />
        <button onClick={handleSearch} className="button">Search</button>
      </div>
      {error && <p className="error">Error: {error}</p>}
      <ul className="result-list">
        {result.map((url, index) => (
          <li key={index} className="result-item">{url}</li>
        ))}
      </ul>
    </div>
  );
}

export default Check;
