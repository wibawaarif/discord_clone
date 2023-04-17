import * as React from "react";

function InboxLogo({ color, size }) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden='false'
    viewBox='0 0 24 24'
    className={color}
    width={size}
    height={size}
  >
    <path
      d='M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z'
    ></path>
  </svg>
  );
}

export default InboxLogo;
