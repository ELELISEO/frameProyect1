import React, { useState } from 'react'
import { GrLinkNext } from 'react-icons/gr'
import { IoReturnUpBackOutline } from 'react-icons/io5'

const EditarEmpleado = ({isOpen, onClose}) => {
    const [id, setId] = useState(""); // Para almacenar el ID
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [contrasena, setContrasena] = useState("");


    const editarEmpleados = async () => {
        const idparse = parseInt(id, 10)
        const updatedData = { 
            nombre, 
            apellido, 
            contrasena, 
        };
        const response = await fetch(`http://localhost:5000/empleado/edit/${idparse}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        });

        if (response.ok) {
            console.log("empleado actualizado");
        } else {
            console.error("Error al actualizar el empleado");
        }
        onClose();
        setId("")
        setNombre("")
        setApellido("")
        setContrasena("")
    };

    const handleclean = () => {
        onClose();
        setId("")
        setNombre("")
        setApellido("")
        setContrasena("")
    }

    if(!isOpen) return null
  return (
    <>
            <div className='h-full w-[78rem] bg-black opacity-50 absolute z-50'></div>
            <div className='h-[38rem] w-[48rem] bg-white fixed z-[55] rounded-br-none rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl text-color1 flex flex-col items-center justify-around'>
                <h1 className=' w-[48rem] text-2xl text-center'>EDITE LOS DATOS DEL USUARIO</h1>
                <div>
                    <form className='flex flex-col items-center justify-around h-[18rem]'>
                    <p className='text-left w-[35rem]'>ID</p>
                    <input  value={id} onChange={(e) => setId(e.target.value)} placeholder="ESTE CAMPO ES NECESARIO" className="bg-color6 h-[3rem] w-[35rem] outline-none p-3"/>
                        <p className='text-left w-[35rem]'>NOMBRE</p>
                        <input value={nombre}  onChange={(e) => setNombre(e.target.value)}placeholder='ESTE CAMPO ES NECESARIO' className='bg-color6 h-[3rem] w-[35rem] outline-none p-3' />
                        <p className='text-left w-[35rem]'>APELLIDO</p>
                        <input value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder='ESTE CAMPO ES NECESARIO' className='bg-color6 h-[3rem] w-[35rem] outline-none p-3' />
                        <p className='text-left w-[35rem]'>CONTRASEÑA</p>
                        <input value={contrasena} onChange={(e) => setContrasena(e.target.value)} type='password' placeholder='ESTE CAMPO ES NECESARIO' className='bg-color6 h-[3rem] w-[35rem] outline-none p-3' />
                    </form>
                </div>
                <div className='w-[24rem] h-[4rem] flex items-center justify-around font-bold'>
                    <button onClick={handleclean} className='flex justify-center items-center gap-4 bg-color9 text-white w-[10rem] h-[3rem]'> <IoReturnUpBackOutline /> {/*ICONO RETURN*/}REGRESAR</button>
                    <button type={'button'} onClick={editarEmpleados} className='flex justify-center items-center gap-4 bg-color10 w-[10rem] h-[3rem] text-white'>
                        <GrLinkNext />
                        CONTINUAR
                    </button>
                </div>
            </div>
        </>
  )
}

export default EditarEmpleado