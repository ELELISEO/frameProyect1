import React from 'react'

export const Bill = ({billete}) => { //Propiedad de bilete. SE DEFINE BILLETE
  return (
    <>
     <div className='bg-gray-400 h-32 w-80 m-5'>{billete}</div> {/*Manda a llamar billete*/}
    </>
   
  )
}
