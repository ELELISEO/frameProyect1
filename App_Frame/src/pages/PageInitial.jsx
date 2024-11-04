import React from 'react'
import SendSpace from '../components/sendSpace/SendSpace'
import Taskbar from '../components/taskbar/Taskbar'
import SearchModal from '../components/searchModal/SearchModal'


const PageInitial = () => {
  let seccionT = ["PAGINA PRINCIPAL", "INVENTARIO", "ALMACEN", "SALIR"]
  return (
    <>
      <main className='h-screen w-screen'>
        <section className='flex h-full w-full'>
          <div className='flex flex-col justify-center bg-color1'>
            {seccionT.map((seccion, index) => (<Taskbar key={index} seccion={seccion} />))}
          </div>
          <div className='h-full w-full bg-[#d9d9d9] flex justify-center items-center flex-col'>
          <SearchModal/>
            <form className='w-[65rem] flex justify-end'>
              <input placeholder='BUSQUEDA' 
              className='bg-white rounded-full h-[3rem] w-[24rem] rounded-br-none text-end p-5 outline-none' />
            </form>
            <SendSpace />
            <div className='w-[65rem] h-[3rem] flex justify-end gap-10'>
              <button className='bg-color9 h-[3rem] w-[11rem] text-white'>ELIMINAR</button>
              <button className='bg-color10 h-[3rem] w-[11rem] text-white rounded-br-3xl'>COBRAR</button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default PageInitial