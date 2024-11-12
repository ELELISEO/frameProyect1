import React from 'react'

const SearchModal = ({ isOpen, onClose, }) => {
  if (!isOpen) return null
  return (
    <>
      <div onClick={onClose} className='h-full w-[78rem] bg-black opacity-50 absolute'></div>
      <div className='h-[3rem] w-[24rem] bg-white fixed z-20 ml-[41rem] mb-[29.5rem] rounded-bl-3xl'>
        SearchModal
      </div>

    </>
  )
}

export default SearchModal