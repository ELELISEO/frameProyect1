import React from 'react'


export const Bill = ({src}) => { //Propiedad de bilete. SE DEFINE BILLETE
  {/*return (
    <>
     <div className='bg-color6 h-32 w-80 m-6'>{billete}</div> {/*Manda a llamar billete}
    </> */}
     return (
      <>
          <div className='bg-color11 w-80 h-32 mt-6'>
          <img
            src= {src}
            className="w-80 h-32"
          />
          </div>
      </>
  )
   
  
}
