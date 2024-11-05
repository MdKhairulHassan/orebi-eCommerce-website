import React from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";

const PrevArrow = (props) => {
const { className, style, onClick } = props;
  return (
    <div
      className={`bg-BorderColor rounded-full inline-block p-3 text-xl text-white absolute z-10 top-[40%] left-2 ${className}`}
      // style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    ><FaLongArrowAltLeft /></div>
  )
}

export default PrevArrow