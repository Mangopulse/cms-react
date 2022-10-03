import React from 'react'

const handleClick=()=>{
    localStorage.clear();
    window.location.reload();
}
const Logout = () => {
  return (
    <div>
      <button onClick={handleClick}>Logout</button>
    </div>
  )
}

export default Logout
