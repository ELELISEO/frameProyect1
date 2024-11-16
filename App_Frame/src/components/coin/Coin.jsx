import React from 'react'

const Coin = ({monedas}) => {
  return (
    <>
    <div className='h-24 w-24 rounded-full bg-gray-500 mx-5'>{monedas}</div>
    </>
  )
}

export default Coin