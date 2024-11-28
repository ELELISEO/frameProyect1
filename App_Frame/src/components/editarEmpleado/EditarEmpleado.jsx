import React from 'react'
import { GrLinkNext } from 'react-icons/gr'
import { IoReturnUpBackOutline } from 'react-icons/io5'

const EditarEmpleado = ({isOpen, onClose}) => {
    if(!isOpen) return null
  return (
    <>
            <div className='h-full w-[78rem] bg-black opacity-50 absolute z-50'></div>
            <div className='h-[38rem] w-[48rem] bg-white fixed z-[55] rounded-br-none rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl text-color1 flex flex-col items-center justify-around'>
                <h1 className=' w-[48rem] text-2xl text-center'>EDITE LOS DATOS DEL USUARIO</h1>
                <div>
                    <form className='flex flex-col items-center justify-around h-[15rem]'>
                        <p className='text-left w-[35rem]'>NOMBRE</p>
                        <input placeholder='ESTE CAMPO ES NECESARIO' className='bg-color6 h-[3rem] w-[35rem] outline-none p-3' />
                        <p className='text-left w-[35rem]'>APELLIDOS</p>
                        <input placeholder='ESTE CAMPO ES NECESARIO' className='bg-color6 h-[3rem] w-[35rem] outline-none p-3' />
                        <p className='text-left w-[35rem]'>CONTRASEÑA</p>
                        <input type='password' placeholder='ESTE CAMPO ES NECESARIO' className='bg-color6 h-[3rem] w-[35rem] outline-none p-3' />
                    </form>
                </div>
                <div className='w-[24rem] h-[4rem] flex items-center justify-around font-bold'>
                    <button onClick={onClose} className='flex justify-center items-center gap-4 bg-color9 text-white w-[10rem] h-[3rem]'> <IoReturnUpBackOutline /> {/*ICONO RETURN*/}REGRESAR</button>
                    <button className='flex justify-center items-center gap-4 bg-color10 w-[10rem] h-[3rem] text-white'>
                        <GrLinkNext />
                        CONTINUAR
                    </button>
                </div>
            </div>
        </>
  )
}

export default EditarEmpleado