import React, { useState } from 'react'
import Taskbar from '../components/taskbar/Taskbar'
import SearchModal from '../components/searchModal/SearchModal'
import EliminiarT from '../components/eliminarT/EliminiarT'
import { IoSearch } from "react-icons/io5"; //LUPA
import { RxCross2 } from "react-icons/rx"; //ELIMINAR
import { RiUserAddLine } from 'react-icons/ri'
import { LiaEditSolid } from 'react-icons/lia'
import AgregarEmpleado from '../components/agregarEmpleado/AgregarEmpleado'
import EditarEmpleado from '../components/editarEmpleado/EditarEmpleado'
import SendSpaceEmpleado from '../components/sendSpaceEmpleado/SendSpaceEmpleado'
import EliminiarTEmpleados from '../components/eliminarTEmpleados/EliminiarTEmpleados';


const Employees = () => {
  const [modBusqueda, setModBusqueda] = useState(false)
  const [vaciar, setVaciar] = useState(false)
  const [agregar, setAgregar] = useState(false)
  const [editar, setEditar] = useState(false)
  let seccionT = ["PAGINA PRINCIPAL", "INVENTARIO", "ALMACEN", "EMPLEADOS", "SALIR"]

  const openModBusqueda = () => setModBusqueda(true)
  const closeModBusqeuda = () => setModBusqueda(false)

  const closeModAgregar = () => setAgregar(false)
  const handleAgregar = () => setAgregar(true)

  const closeModEditar = () => setEditar(false)
  const handleEditar = () => setEditar(true)

  const handleVaciar = () => setVaciar(true)
  const handleCloseVaciar = () => setVaciar(false) 

  return (
    <>
      <main className='h-screen w-screen'>
        <section className='flex h-full w-full'>
          <div className='flex flex-col justify-center items-center bg-color1'>
            {seccionT.map((seccion, index) => (<Taskbar key={index} index={index} indexB={3} seccion={seccion} />))}
          </div>
          
          <div className='h-full w-full bg-color7 flex justify-center items-center flex-col'>
          <AgregarEmpleado isOpen={agregar} onClose={closeModAgregar} />
          <SearchModal isOpen={modBusqueda} onClose={closeModBusqeuda}/>
          <form className='w-[65rem] flex justify-between'>
            <button onClick={handleAgregar} type='button' className='bg-color8 h-[3rem] w-[11rem] text-white font-bold text-lg flex items-center gap-4 justify-center'><RiUserAddLine />AGREGAR</button>
            <form className='w-[65rem] flex justify-end'>
              <div className='relative w-[24rem]'> {/* Asegura que el contenedor sea relative */}
                <IoSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-color2 z-50" /> {/* Posiciona el ícono */}
                <input
                  placeholder='BUSQUEDA'
                  type='text'
                  name='busqueda'
                  autoComplete="off" 
                  onFocus={openModBusqueda}
                  className='bg-color6 h-[3rem] w-[24rem] rounded-br-none rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl focus:rounded-bl-none duration-75 text-end p-5 pl-12 outline-none z-40 relative'
                /> {/* Agrega padding-left para espacio del ícono */}
              </div>
            </form>
            </form>
            <SendSpaceEmpleado />
            <EditarEmpleado isOpen={editar} onClose={closeModEditar} />
            <EliminiarTEmpleados isOpen={vaciar} onClose={handleCloseVaciar}/>
            <div className='w-[65rem] h-[3rem] flex justify-end gap-10'>
            <button onClick={handleEditar} className='bg-color11 h-[3rem] w-[11rem] text-white font-bold text-lg flex items-center gap-4 justify-center'><LiaEditSolid />
            EDITAR</button>
              <button onClick={handleVaciar} className='bg-color9 h-[3rem] w-[11rem] text-white font-bold text-lg flex items-center gap-4 justify-center'><RxCross2 />ELIMINAR</button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Employees