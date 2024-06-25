import axios from "axios";
import React, { useState } from "react";

// Use the IP address of your Ingress
const API_URL = 'http://104.197.99.174/api';

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

  const handleTest = async () => {
    try {
      const response = await axios.get(`${API_URL}/check`, {
        headers: {
          'Content-Type': 'application/json'
        },
      });
      console.log("Test Response:", response);
    } catch (error) {
      console.log("Test Error:", error);
    }
  };

  return (
    <div>
      <h1>Check</h1>
      <div>
        <input type="text" value={name} onChange={handleInputChange} />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleTest}>Test Backend</button>
      </div>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ul>
        {result.map((url, index) => (
          <li key={index}>{url}</li>
        ))}
      </ul>
    </div>
  );
}

export default Check;
