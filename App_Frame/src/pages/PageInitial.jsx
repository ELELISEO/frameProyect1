import React, { useState } from 'react'
import SendSpace from '../components/sendSpace/SendSpace'
import Taskbar from '../components/taskbar/Taskbar'
import SearchModal from '../components/searchModal/SearchModal'
import EliminiarT from '../components/eliminarT/EliminiarT'
import { IoSearch } from "react-icons/io5"; //LUPA
import { MdDone } from "react-icons/md"; //COBRAR
import { RxCross2 } from "react-icons/rx"; //ELIMINAR





const PageInitial = () => {
  const [modBusqueda, setModBusqueda] = useState(false)
  const [vaciar, setVaciar] = useState(false)
  let seccionT = ["PAGINA PRINCIPAL", "INVENTARIO", "ALMACEN", "EMPLEADOS", "SALIR"]

  const openModBusqueda = () => setModBusqueda(true)
  const closeModBusqeuda = () => setModBusqueda(false)

  const handleVaciar = () => setVaciar(true)
  const handleCloseVaciar = () => setVaciar(false) 

  return (
    <>
      <main className='h-screen w-screen'>
        <section className='flex h-full w-full'>
          <div className='flex flex-col justify-center items-center bg-color1'>
            {seccionT.map((seccion, index) => (<Taskbar key={index} index={index} indexB={0} seccion={seccion} />))}
          </div>
          <div className='h-full w-full bg-color7 flex justify-center items-center flex-col'>
          <SearchModal isOpen={modBusqueda} onClose={closeModBusqeuda}/>
          <form className='w-[65rem] flex justify-end'>
          <IoSearch />


              <input placeholder='BUSQUEDA' 
              type='text'
              name='busqueda'
              onFocus={openModBusqueda}
              className='bg-color6 h-[3rem] w-[24rem] rounded-br-none rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl focus:rounded-bl-none duration-75 text-end p-5 outline-none z-10'/>
            </form> 
            <SendSpace />
            <EliminiarT isOpen={vaciar} onClose={handleCloseVaciar}/>
            <div className='w-[65rem] h-[3rem] flex justify-end items-center p-6 gap-10 text-white font-bold text-lg'> {/* DIV BOTONES*/}
              <button onClick={handleVaciar} className='flex justify-center items-center bg-color9 h-[3rem] w-[11rem] text-white gap-4'><RxCross2 />
              ELIMINAR</button>
              <button className='flex justify-center items-center bg-color10 h-[3rem] w-[11rem] text-white rounded-br-3xl gap-4'>
              <MdDone />COBRAR</button>
            </div>
          </div>
        </section>        
      </main>
    </>
  )
}

export default PageInitial