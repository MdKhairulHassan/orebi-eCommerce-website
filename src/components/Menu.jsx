import React from 'react'

const Menu = ({className, menuName}) => {
  return (
    <ul>
      <li className={`text-[14px] text-TextColor font-dms hover:font-bold hover:text-TextHColor px-5 ${className}`}>{menuName}</li>
    </ul>
  )
}

export default Menu