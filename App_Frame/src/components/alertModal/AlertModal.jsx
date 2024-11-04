import React from 'react';

const AlertModal = ({ isVisible, onClose, title, message, }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}>
      </div>
      <div className="relative bg-white  p-6 z-10 w-[25rem] rounded-lg  flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4">{title || 'Alerta'}</h2>
        <p>{message || 'Este es un mensaje de alerta.'}</p>
        <div className="mt-4 flex justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-full rounded-br-none"
            onClick={onClose}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
