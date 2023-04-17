import * as React from "react";

function InboxLogo({ color, size }) {
  return (
    <svg class={color} width={size} height={size} viewBox="0 0 24 24" id="notification" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg"><path id="secondary" d="M15,17H9a1,1,0,0,0-1,1,4,4,0,0,0,8,0A1,1,0,0,0,15,17Z"></path><path id="primary" d="M21,17H20V10A8,8,0,0,0,4,10v7H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"></path></svg>
    
  );
}

export default InboxLogo;
