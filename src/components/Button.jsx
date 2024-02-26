import React from "react";

function Button(props) {
  return (
    <div>
      <button className="bg-tranparent border-2 border-red-500 text-white p-1 px-6 rounded-lg w-max">
        {props.children}
      </button>
    </div>
  );
}
export default Button;
