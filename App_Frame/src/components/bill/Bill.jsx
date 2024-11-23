import React from 'react'


export const Bill = ({src}) => { //Propiedad de bilete. SE DEFINE BILLETE
  {/*return (
    <>
     <div className='bg-color6 h-32 w-80 m-6'>{billete}</div> {/*Manda a llamar billete}
    </> */}
     return (
      <>
          <div className='w-72 h-24 mt-6 justify-center items-center'>
          <img
            src= {src}
            className="w-72 h-24"
          />
          </div>
      </>
  )
   
  
}
