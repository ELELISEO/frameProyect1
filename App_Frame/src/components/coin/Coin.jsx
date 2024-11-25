import React from 'react'

const Coin = ({src}) => {
  /*return (
    <>
    <div className='h-24 w-24 rounded-full bg-color6 mx-6'>{monedas}</div>
    </>*/
      return (
        <>
            <div className='flex justify-center w-24 h-20 rounded-full mx-6'>
            <img
              src= {src}
              className="w-24 h-20 rounded-full mx-6"
            />
            </div>
        </>
    )

}

export default Coin

