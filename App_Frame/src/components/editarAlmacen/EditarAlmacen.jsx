/*import React from 'react'
import { GrLinkNext } from 'react-icons/gr'
import { IoReturnUpBackOutline } from 'react-icons/io5'

const EditarAlmacen = ({ isOpen, onClose }) => {
    const [contacto, setContacto] = useState("");
    const [producto, setProducto] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [proveedor, setProveedor] = useState("");
    const [precio, setPrecio] = useState("");
    const editarProveedor = async () => {
        const response = await fetch(`http://localhost:5000/almacen/edit/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData), // Los nuevos datos a actualizar
        });
    }
    if (!isOpen) return null
    return (
        <>
            <div className='h-full w-[78rem] bg-black opacity-50 absolute z-50'></div>
            <div className='h-[38rem] w-[48rem] bg-white fixed z-[55] rounded-br-none rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl text-color1 flex flex-col items-center justify-around'>
                <h1 className=' w-[48rem] text-2xl text-center'>EDITE LOS CAMPOS SOLICITADOS</h1>
                <div>
                    <form className='flex flex-col items-center justify-around h-[25rem]'>
                        <p className='text-left w-[35rem]'>ID</p>
                        <input placeholder='ESTE CAMPO ES NECESARIO' className='bg-color6 h-[3rem] w-[35rem] outline-none p-3' />
                        <p className='text-left w-[35rem]'>CONTACTO</p>
                        <input placeholder='ESTE CAMPO ES NECESARIO' className='bg-color6 h-[3rem] w-[35rem] outline-none p-3' />
                        <p className='text-left w-[35rem]'>PRODUCTO</p>
                        <input placeholder='ESTE CAMPO ES NECESARIO' className='bg-color6 h-[3rem] w-[35rem] outline-none p-3' />
                        <p className='text-left w-[35rem]'>PROVEEDOR</p>
                        <input placeholder='ESTE CAMPO ES NECESARIO' className='bg-color6 h-[3rem] w-[35rem] outline-none p-3' />
                        <div className='flex w-[35rem] justify-between'>
                            <form className='flex flex-col'>
                                <p className='text-left w-[15rem]'>PRECIO</p>
                                <input placeholder='ESTE CAMPO ES NECESARIO' className='bg-color6 h-[3rem] w-[15rem] outline-none p-3' />
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
                    <button onClick={onClose} className='flex justify-center items-center gap-4 bg-color9 text-white w-[10rem] h-[3rem]'> <IoReturnUpBackOutline /> {/*ICONO RETURN}REGRESAR</button>
                    <button className='flex justify-center items-center gap-4 bg-color10 w-[10rem] h-[3rem] text-white'>
                        <GrLinkNext />
                        CONTINUAR
                    </button>
                </div>
            </div>
        </>
    )
}

export default EditarAlmacen*/
import React, { useState } from 'react';
import { GrLinkNext } from 'react-icons/gr';
import { IoReturnUpBackOutline } from 'react-icons/io5';

const EditarAlmacen = ({ isOpen, onClose }) => {
    const [id, setId] = useState(""); // Para almacenar el ID
    const [contacto, setContacto] = useState("");
    const [producto, setProducto] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [proveedor, setProveedor] = useState("");
    const [precio, setPrecio] = useState("");

    // Función para editar el proveedor
    const editarProveedor = async () => {
        const idparse = parseInt(id, 10)
        const precioNum = parseFloat(precio);
        const updatedData = { 
            contacto, 
            producto, 
            proveedor, 
            precio: precioNum, // Usa el valor de precio convertido
        };
        const response = await fetch(`http://localhost:5000/almacen/almacen/edit/${idparse}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        });

        if (response.ok) {
            console.log("Proveedor actualizado");
             // Cerrar el modal después de la actualización
        } else {
            console.error("Error al actualizar el proveedor");
        }
        onClose();
    };

    if (!isOpen) return null; // Si no está abierto el modal, no renderiza nada

    return (
        <>
            <div className="h-full w-[78rem] bg-black opacity-50 absolute z-50"></div>
            <div className="h-[38rem] w-[48rem] bg-white fixed z-[55] rounded-br-none rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl text-color1 flex flex-col items-center justify-around">
                <h1 className="w-[48rem] text-2xl text-center">EDITE LOS CAMPOS SOLICITADOS</h1>
                <div>
                    <form className="flex flex-col items-center justify-around h-[25rem]">
                        <p className="text-left w-[35rem]">ID</p>
                        <input
                            placeholder="ESTE CAMPO ES NECESARIO"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            className="bg-color6 h-[3rem] w-[35rem] outline-none p-3"
                        />
                        <p className="text-left w-[35rem]">CONTACTO</p>
                        <input
                            placeholder="ESTE CAMPO ES NECESARIO"
                            value={contacto}
                            onChange={(e) => setContacto(e.target.value)}
                            className="bg-color6 h-[3rem] w-[35rem] outline-none p-3"
                        />
                        <p className="text-left w-[35rem]">PRODUCTO</p>
                        <input
                            placeholder="ESTE CAMPO ES NECESARIO"
                            value={producto}
                            onChange={(e) => setProducto(e.target.value)}
                            className="bg-color6 h-[3rem] w-[35rem] outline-none p-3"
                        />
                        <p className="text-left w-[35rem]">PROVEEDOR</p>
                        <input
                            placeholder="ESTE CAMPO ES NECESARIO"
                            value={proveedor}
                            onChange={(e) => setProveedor(e.target.value)}
                            className="bg-color6 h-[3rem] w-[35rem] outline-none p-3"
                        />
                        <div className="flex w-[35rem] justify-between">
                            <form className="flex flex-col">
                                <p className="text-left w-[15rem]">PRECIO</p>
                                <input
                                    placeholder="ESTE CAMPO ES NECESARIO"
                                    value={precio}
                                    onChange={(e) => setPrecio(e.target.value)}
                                    className="bg-color6 h-[3rem] w-[15rem] outline-none p-3"
                                />
                            </form>
                            <form className="flex flex-col">
                                <p className="text-left w-[15rem]">TIPO</p>
                                <select
                                    className="bg-color6 h-[3rem] w-[15rem] outline-none p-3"
                                >
                                    <option value="" disabled>
                                        ESTE CAMPO ES NECESARIO
                                    </option>
                                    <option className="bg-white" value="Caja">Caja</option>
                                    <option className="bg-white" value="Costal">Costal</option>
                                    <option className="bg-white" value="Pieza">Pieza</option>
                                </select>
                            </form>
                        </div>
                    </form>
                </div>
                <div className="w-[24rem] h-[4rem] flex items-center justify-around font-bold">
                    <button onClick={onClose} className="flex justify-center items-center gap-4 bg-color9 text-white w-[10rem] h-[3rem]">
                        <IoReturnUpBackOutline /> {/*ICONO RETURN*/}REGRESAR
                    </button>
                    <button type={'button'} onClick={editarProveedor} className="flex justify-center items-center gap-4 bg-color10 w-[10rem] h-[3rem] text-white">
                        <GrLinkNext />
                        CONTINUAR
                    </button>
                </div>
            </div>
        </>
    );
};

export default EditarAlmacen;
