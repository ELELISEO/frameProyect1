import React, { useState } from 'react'
import Taskbar from '../components/taskbar/Taskbar'
import SearchModal from '../components/searchModal/SearchModal'
import { RiUserAddLine } from "react-icons/ri"; //Agregar
import { LiaEditSolid } from "react-icons/lia"; //Editar
import { RxCross2 } from "react-icons/rx"; //Eliminar
import { MdDone } from "react-icons/md"; //COBRAR
import { IoSearch } from "react-icons/io5"; //BUSQUEDA
import AgregarAlmacen from '../components/agregarAlmacen/AgregarAlamcen'
import EditarAlmacen from '../components/editarAlmacen/EditarAlmacen'
import SendSpaceAlmacen from '../components/sendSpaceAlmacen/SendSpaceAlmacen'
import EliminiarTAlmacen from '../components/eliminarTAlmacen/EliminiarTAlmacen';



const Storage = () => {
  const [modBusqueda, setModBusqueda] = useState(false)
  const [vaciar, setVaciar] = useState(false)
  const [agregar, setAgregar] = useState(false)
  const [editar, setEditar] = useState(false)
  let seccionT = ["PAGINA PRINCIPAL", "INVENTARIO", "ALMACEN", "EMPLEADOS", "SALIR"]

  const closeModEditar = () => {
    console.log("Cerrando modal de editar...");
    setEditar(false); // Cambia el estado a false
};


  const closeModAgregar = () => setAgregar(false)
  const handleAgregar = () => setAgregar(true)

  const handleEditar = () => setEditar(true)

  const openModBusqueda = () => setModBusqueda(true)
  const closeModBusqeuda = () => setModBusqueda(false)

  const handleVaciar = () => setVaciar(true)
  const handleCloseVaciar = () => setVaciar(false) 



  return (
    <>
      <main className='h-screen w-screen'>
        <section className='flex h-full w-full'>
          <div className='flex flex-col justify-center items-center bg-color1'>
            {seccionT.map((seccion, index) => (<Taskbar key={index} index={index} indexB={2} seccion={seccion} />))}
          </div>
          <div className='h-full w-full bg-color7 flex justify-center items-center flex-col'>
          
          <SearchModal isOpen={modBusqueda} onClose={closeModBusqeuda}/>
          <AgregarAlmacen isOpen={agregar} onClose={closeModAgregar}/>
            <form className='w-[65rem] flex justify-between'>
            <button onClick={handleAgregar} type='button' className='bg-color8 h-[3rem] w-[11rem] text-white font-bold text-lg flex items-center gap-4 justify-center'><RiUserAddLine />AGREGAR</button>
            <div className='relative w-[24rem]'> {/* Asegura que el contenedor sea relative */}
                <IoSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-color2 z-50" /> {/* Posiciona el ícono */}
                <input
                  placeholder='BUSQUEDA'
                  type='text'
                  name='busqueda'
                  onFocus={openModBusqueda}
                  className='bg-color6 h-[3rem] w-[24rem] rounded-br-none rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl focus:rounded-bl-none duration-75 text-end p-5 pl-12 outline-none z-40 relative'
                /> {/* Agrega padding-left para espacio del ícono */}
              </div>
            </form>
            <SendSpaceAlmacen />
            <EditarAlmacen isOpen={editar}  onClose={closeModEditar} />
            <EliminiarTAlmacen isOpen={vaciar} onClose={handleCloseVaciar}/>
            <div className='w-[65rem] h-[3rem] flex justify-end gap-10'> {/*DIV BOTONES*/}
              <button onClick={handleEditar} className='bg-color11 h-[3rem] w-[11rem] text-white font-bold text-lg flex items-center gap-4 justify-center'><LiaEditSolid />
              EDITAR</button>
              <button onClick={handleVaciar} className='bg-color9 h-[3rem] w-[11rem] text-white font-bold text-lg flex items-center gap-4 justify-center'><RxCross2 />
              ELIMINAR</button>
              <button className='bg-color10 h-[3rem] w-[11rem] text-white rounded-br-3xl font-bold text-lg flex items-center gap-4 justify-center'><MdDone />
              PEDIR</button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Storage