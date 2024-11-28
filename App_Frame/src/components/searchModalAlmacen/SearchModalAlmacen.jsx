import React from 'react'


const SearchModalAlmacen = ({ isOpen, onClose, onCloseOnly,  presionado }) => {
  if (!isOpen) return null
  return (
    <>
      <div onClick={onCloseOnly} className='h-full w-[78rem] bg-black opacity-50 absolute z-40'></div>
      <div onClick={onClose} className='h-[3rem] w-[24rem] bg-white fixed z-50 ml-[41rem] mb-[29.5rem] rounded-bl-3xl'>
        {presionado}
        SearchModal
      </div>

    </>
  )
}

export default SearchModalAlmacen