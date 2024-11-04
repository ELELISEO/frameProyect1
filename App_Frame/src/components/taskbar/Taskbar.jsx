import React from 'react'

const Taskbar = ( {seccion} ) => {
    return (
        <>
            <div className='bg-black w-[18rem] h-auto text-white text-2xl'>
               <div className='flex items-center text-left pl-5 h-[5rem]'>
                {seccion}
                </div>
                
            </div>
        </>
    )
}

export default Taskbar