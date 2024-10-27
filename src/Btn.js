import React from 'react'

function Btn(props) {
    
  return (
    <div>
      <button>{props.username}</button>    {/* Interpolation */}
    </div>
  )
}

export default Btn
