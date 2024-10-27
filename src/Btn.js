import React from "react";

function Btn(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.handleClick(props.username);
        }}
        // className="btnColor"   ----> External CSS
        style={{ backgroundColor: "red" }}
      >
        {props.username} {/* Interpolation */}
      </button>
    </div>
  );
}

export default Btn;
