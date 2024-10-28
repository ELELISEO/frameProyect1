
import React from 'react';

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null; // Si el modal no está abierto, no renderiza nada

  return (
    <>
      <div onClick={onClose} className='border-color9 fixed inset-0 border-2 rounded-full rounded-br-none w-72 h-[2.5rem] ml-[39rem] mt-[22.05rem] flex flex-col'>
      <div className='text-color9 mt-10 ml-4 text-[10px]'>
         Usuario necesario
      </div>
    </div>
    </>
  );
}

export default Modal;
