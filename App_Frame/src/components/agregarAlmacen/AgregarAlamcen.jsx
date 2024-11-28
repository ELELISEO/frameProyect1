import React, { useState } from 'react'
import { GrLinkNext } from 'react-icons/gr'
import { IoReturnUpBackOutline } from 'react-icons/io5'

const AgregarAlmacen = ({ isOpen, onClose }) => {
    const [contacto, setContacto] = useState("")
    const [producto, setProducto] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [proveedor, setProveedor] = useState("")
    const [precio, setPrecio] = useState("")

    const agregarProveedor = async () => {
        
        const response = await fetch(`http://localhost:5000/almacen/almacen`, {
            
            method: 'POST', // Indicamos que es una petición POST
            headers: {
                'Content-Type': 'application/json', // Definimos que estamos enviando JSON
            },
            body: JSON.stringify({ contacto: contacto, producto: producto, proveedor: proveedor, precio: precio }),
        });
        const data = await response.json();
        if (data.status === 200) {
            return data.mensaje
        } else
            return null
        
    }

    const crearProveedor = () => {
        const flag = agregarProveedor()
        onClose()
    if (!flag) {
        return
      }
    } 
    
   
    

    if (!isOpen) return null
    return (
        <>
            <div className='h-full w-[78rem] bg-black opacity-50 absolute z-50'></div>
            <div className='h-[38rem] w-[48rem] bg-white fixed z-[55] rounded-br-none rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl text-color1 flex flex-col items-center justify-around'>
                <h1 className=' w-[48rem] text-2xl text-center'>LLENE LOS CAMPOS SOLICITADOS</h1>
                <div>
                    <form className='flex flex-col items-center justify-around h-[18rem]'>
                        <p className='text-left w-[35rem]'>CONTACTO</p>
                        <input value={contacto} onChange={(e) => setContacto(e.target.value)} placeholder='ESTE CAMPO ES NECESARIO' className='bg-color6 h-[3rem] w-[35rem] outline-none p-3' />
                        <p className='text-left w-[35rem]'>PRODUCTO</p>
                        <input value={producto} onChange={(e) => setProducto(e.target.value)} placeholder='ESTE CAMPO ES NECESARIO' className='bg-color6 h-[3rem] w-[35rem] outline-none p-3' />
                        <p className='text-left w-[35rem]'>PROVEEDOR</p>
                        <input value={proveedor} onChange={(e) => setProveedor(e.target.value)} placeholder='ESTE CAMPO ES NECESARIO' className='bg-color6 h-[3rem] w-[35rem] outline-none p-3' />
                        <div className='flex w-[35rem] justify-between'>
                            <form className='flex flex-col'>
                                <p className='text-left w-[15rem]'>PRECIO</p>
                                <input value={precio} onChange={(e) => setPrecio(e.target.value)} placeholder='ESTE CAMPO ES NECESARIO' className='bg-color6 h-[3rem] w-[15rem] outline-none p-3' />
                            </form>
                            <form className='flex flex-col'>
                                <p className='text-left w-[15rem]'>TIPO</p>
                                <select
                                    className='bg-color6 h-[3rem] w-[15rem] outline-none p-3'
                                    defaultValue="">
                                    <option value="" disabled>
                                        ESTE CAMPO ES NECESARIO
                                    </option>
                                    <option className='bg-white' value="Opción 1">Caja</option>
                                    <option className='bg-white' value="Opción 2">Costal</option>
                                    <option className='bg-white' value="Opción 3">Pieza</option>
                                </select>
                            </form>
                        </div>
                    </form>
                </div>
                <div className='w-[24rem] h-[4rem] flex items-center justify-around font-bold'>
                    <button onClick={onClose} className='flex justify-center items-center gap-4 bg-color9 text-white w-[10rem] h-[3rem]'> <IoReturnUpBackOutline /> {/*ICONO RETURN*/}REGRESAR</button>
                    <button onClick={crearProveedor} className='flex justify-center items-center gap-4 bg-color10 w-[10rem] h-[3rem] text-white'>
                        <GrLinkNext />
                        CONTINUAR
                    </button>
                </div>
            </div>
        </>
    )
}


export default AgregarAlmacen;