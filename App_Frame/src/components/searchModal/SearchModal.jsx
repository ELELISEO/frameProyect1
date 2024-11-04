import React from 'react'

const SearchModal = ({isVisible}) => {
  if(!isVisible) return null
  return (
    <>
    <div className='h-full w-[78rem] bg-black opacity-50 fixed'></div>
    <div className='h-[3rem] w-[24rem] bg-white absolute z-50 ml-[41rem] mb-[29.5rem]'>
        SearchModal
    </div>
    
    </>
  )
}

export default SearchModal