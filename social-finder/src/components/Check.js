import axios from "axios";
import React, { useState, useEffect } from "react";

const getIPAddress = async () => {
  try {
    const response = await axios.get('http://169.254.169.254/latest/meta-data/public-ipv4');
    return response.data;
  } catch (error) {
    console.error("Error fetching IP address:", error);
    return null;
  }
};

function Check() {
  const [name, setName] = useState("");
  const [result, setResult] = useState([]);
  const [error, setError] = useState(null);
  const [apiURL, setApiURL] = useState("");

  useEffect(() => {
    const fetchIPAddress = async () => {
      const ip = await getIPAddress();
      if (ip) {
        setApiURL(`http://${ip}:5001/api`);
      }
    };
    fetchIPAddress();
  }, []);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSearch = async () => {
    try {
      if (!apiURL) {
        throw new Error("API URL is not set");
      }
      console.log("API POST:", `${apiURL}/check`);
      const response = await axios.post(`${apiURL}/check`, { nm: name }, {
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 5000  // Set timeout to 5000ms (5 seconds)
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
    <div>
      <h1>Check</h1>
      <div>
        <input type="text" value={name} onChange={handleInputChange} />
        <button onClick={handleSearch}>Search</button>
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
