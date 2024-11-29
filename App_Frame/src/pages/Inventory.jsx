import React, { useState } from 'react'
import Taskbar from '../components/taskbar/Taskbar'
import SearchModal from '../components/searchModal/SearchModal'
import { IoSearch } from "react-icons/io5"; //LUPA
import { AiOutlineStock } from "react-icons/ai"; //GANANCIA
import Earning from '../components/earning/Earning';
import SendSpaceInventario from '../components/sendSpacelInventario/SendSpaceInventario';
import BusquedaInventario from '../components/busquedaInventario/BusquedaInventario';


const Inventory = () => {
  const [modBusqueda, setModBusqueda] = useState(false)
  const [ganancia, setGanancia] = useState(false)
  const [busqueda, setBusqueda] = useState("")
  const [producto, setProducto] = useState()
  const [agregarC, setAgregarC] = useState(false)
  const [vaciar, setVaciar] = useState(false)
  const [agregar, setAgregar] = useState(false)
  const [editar, setEditar] = useState(false)
  let seccionT = ["PAGINA PRINCIPAL", "INVENTARIO", "ALMACEN", "EMPLEADOS", "SALIR"]

  const openModBusqueda = () => setModBusqueda(true)
  const closeModBusqeuda = () => setModBusqueda(false)

  const closeModGanancia = () => setGanancia(false)

  
  const handleGanancia = () => setGanancia(true)

  return (
    <>
      <main className='h-screen w-screen'>
        <section className='flex h-full w-full'>
          <div className='flex flex-col justify-center items-center bg-color1'>
            {seccionT.map((seccion, index) => (<Taskbar key={index} index={index} indexB={1} seccion={seccion} />))}
          </div>
          <div className='h-full w-full bg-color7 flex justify-center items-center flex-col'>
          <SearchModal isOpen={modBusqueda} onClose={closeModBusqeuda}/>
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
            {producto && <BusquedaInventario onClose={setAgregarC} isOpen={agregarC} idProducto={busqueda} nameProduct={producto.producto} priceProduct={producto.precio} clearBusqueda={() => setBusqueda("")}/>}
            <SendSpaceInventario />
            <Earning isOpen={ganancia} onClose={closeModGanancia} />
            <div className='w-[65rem] h-[3rem] flex justify-end gap-10'>
              <button onClick={handleGanancia} className='bg-color8 h-[3rem] w-[11rem] text-white rounded-br-3xl font-bold text-lg flex items-center gap-4 justify-center'><AiOutlineStock />
              GANANCIA</button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Inventory