import React, { useEffect, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { GrLinkNext } from 'react-icons/gr'
import { LiaMinusSolid } from 'react-icons/lia'


const Agregar = ({ isOpen, onClose, nameProduct, priceProduct, idProducto, clearBusqueda }) => {

  const [count, setCount] = useState(0);  const [subtotal, setSubtotal] = useState(0)


  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count > 0 ? count - 1 : 0);

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setCount(isNaN(value) ? 0 : Math.max(0, value));
  };

  useEffect(() => {

    if (priceProduct) {
      setSubtotal(parseFloat((count * priceProduct).toFixed(2)));
    }
    console.log(count);
    
  }, [count]);

  const sendVenta = async () =>{
    try{const response = await fetch(`http://localhost:5000/products/lista`, {
      method: 'POST', // Indicamos que es una petición POST
      headers: {
        'Content-Type': 'application/json', // Definimos que estamos enviando JSON
      },
      body: JSON.stringify({ id : idProducto, producto: nameProduct, cantidad : count, precio : subtotal}),
    });
    const data = await response.json();
    if (data.status === 201) {
      return true
      
    }else
    return false
    }catch(error){
      console.log(error);
    }
  }

  const crearVenta = () => {
    const flag = sendVenta()
    if (!flag) {
      return
    }
    setCount(0)
    clearBusqueda()
    setSubtotal(0)
    onClose()
  }


  if (!isOpen) return null


  return (
    <>
      <div onClick={onClose} className='h-full w-[78rem] bg-black opacity-50 absolute z-50'></div>
      <div className='h-[18rem] w-[28rem] bg-white fixed z-50 rounded-br-none rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl text-color1 flex flex-col items-center justify-around'>
        <h1 className='text-3xl uppercase'>{idProducto} {nameProduct}</h1>
        <form className='h-[4rem] w-[12rem] flex items-center justify-around'>
          <button type="button" onClick={handleDecrement} className='bg-color2 h-[3rem] w-[3rem] text-white flex items-center justify-center text-3xl'>
            <LiaMinusSolid />
          </button>
          <input onChange={handleInputChange} type='text' value={count} placeholder='cant.' className='h-[3rem] w-[4rem] outline-none text-center text-2xl' />
          <button type="button" onClick={handleIncrement} className='bg-color2 h-[3rem] w-[3rem] text-white flex items-center justify-center text-3xl'>
            <AiOutlinePlus />
          </button>

        </form>
        <div className='w-[15rem] h-[4rem] flex items-center justify-around'>
          <h1 className='text-2xl'>${subtotal}</h1>
          <button onClick={crearVenta} className='flex justify-center items-center gap-4 bg-color10 w-[3rem] h-[3rem] text-white'>
            <GrLinkNext className='text-2xl' />
          </button>
        </div>
      </div>
    </>
  )
}
export default Agregar