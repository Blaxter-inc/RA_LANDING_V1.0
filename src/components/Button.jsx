import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type="button" className={`py-4 px-6 bg-red-gradient 
    font-poppins font-medium text-[18px] text-white outline-none
    rounded-full ${styles}`}>
      Get Started
    </button>
  )
}

export default Button