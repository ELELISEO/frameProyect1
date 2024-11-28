import React, { useEffect, useState } from 'react'
import { IoReturnUpBackOutline } from "react-icons/io5";//REGRESAR
import { GrLinkNext } from "react-icons/gr";//CONTINUAR



const EliminiarTEmpleados = ({ isOpen, onClose, clearInput}) => {
  const [idEliminar, setIdEliminar] = useState("")

    const handleEliminar = async () => {
      if (!idEliminar) {
        console.log("ID no proporcionado");
        return;
      }
      const id = parseInt(idEliminar, 10)
        const response = await fetch(`http://localhost:5000/empleado/deleteId/${id}`, {
          method: 'DELETE', // Indicamos que es una petición POST
          headers: {
            'Content-Type': 'application/json', // Definimos que estamos enviando JSON
          },
        });
        const data = await response.json();
        if (response.ok && data.status === 200) {
          console.log('Empleado eliminado con éxito');
          
        } else{
        console.log("Empleado al eliminar el proveedor");}
        onClose();
      }
      useEffect(() => {
        if (!isOpen) {
            setIdEliminar(""); // Reinicia el estado cuando el modal se cierra
        }
    }, [isOpen]);

    if (!isOpen) return null
    return (
        <>
            <div className='h-full w-[78rem] bg-black opacity-50 absolute z-50'></div>
            <div className='h-[18rem] w-[28rem] bg-white fixed z-50 rounded-br-none rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl text-color1 flex flex-col items-center justify-around'>
                <h1 className=' w-[20rem] text-2xl text-center'>INTRODUZCA EL ID DEL PROVEEDOR A ELIMINAR</h1>
                <form>
                  <input type='texto' placeholder='ID' value={idEliminar} onChange={(e) => setIdEliminar(e.target.value)} className='h-[3rem] w-[5rem] text-center outline-none border-color1 border-[1px] p-3'/>
                </form>
                <div className='w-[24rem] h-[4rem] flex items-center justify-around font-bold'>
                    <button onClick={onClose} className='flex justify-center items-center gap-4 bg-color9 text-white w-[10rem] h-[3rem]'> <IoReturnUpBackOutline /> {/*ICONO RETURN*/}REGRESAR</button>
                    <button onClick={handleEliminar} className='flex justify-center items-center gap-4 bg-color10 w-[10rem] h-[3rem] text-white'>
                        <GrLinkNext />
                        CONTINUAR
                    </button>
                </div>
            </div>
        </>
    )
}

export default EliminiarTEmpleados