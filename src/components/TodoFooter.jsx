import React from 'react'

function TodoFooter({ onClick }) {
  return (
    <div className="footer-container" onClick={onClick}>
        <h3>Clear All</h3>
    </div>
  )
}

export default TodoFooter
