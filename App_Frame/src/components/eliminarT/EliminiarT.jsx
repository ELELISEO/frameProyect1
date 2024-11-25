import React from 'react'
import { IoReturnUpBackOutline } from "react-icons/io5";//REGRESAR
import { GrLinkNext } from "react-icons/gr";//CONTINUAR



const EliminiarT = ({ isOpen, onClose }) => {
    if (!isOpen) return null
    return (
        <>
            <div className='h-full w-[78rem] bg-black opacity-50 absolute z-50'></div>
            <div className='h-[18rem] w-[28rem] bg-white fixed z-50 rounded-br-none rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl text-color1 flex flex-col items-center justify-around'>
                SE ELIMINARAN TODOS LOS ARTICULOS
                <div className='w-[24rem] h-[4rem] flex items-center justify-around font-bold'>
                    <button onClick={onClose} className='flex justify-center items-center gap-4 bg-color9 text-white w-[10rem] h-[3rem]'> <IoReturnUpBackOutline /> {/*ICONO RETURN*/}REGRESAR</button>
                    <button className='flex justify-center items-center gap-4 bg-color10 w-[10rem] h-[3rem] text-white'><GrLinkNext />

                    CONTINUAR</button>
                </div>
            </div>
        </>
    )
}

export default EliminiarT