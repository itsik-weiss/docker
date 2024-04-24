import React from "react"
import PropTypes from "prop-types" // Import PropTypes

function User({ match }) {
  return (
    <div>
      <h1>User Component</h1>
      <p>User ID: {match.params.usr}</p>
    </div>
  )
}

// Add prop type validation
User.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      usr: PropTypes.string.isRequired, // Adjust the type as needed
    }).isRequired,
  }).isRequired,
}

export default User
