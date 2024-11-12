import React from 'react'

const EliminiarT = ({ isOpen, onClose }) => {
    if (!isOpen) return null
    return (
        <>
            <div className='h-full w-[78rem] bg-black opacity-50 absolute z-50'></div>
            <div className='h-[18rem] w-[28rem] bg-white fixed z-50 rounded-br-none rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl flex flex-col items-center justify-around'>
                SE ELIMINARAN TODOS LOS ARTICULOS
                <div className='w-[24rem] h-[4rem] flex items-center justify-around'>
                    <button onClick={onClose} className='bg-color9 text-white w-[10rem] h-[3rem]'>REGRESAR</button>
                    <button className='bg-color10 w-[10rem] h-[3rem] text-white'>CONTINUAR</button>
                </div>
            </div>
        </>
    )
}

export default EliminiarT