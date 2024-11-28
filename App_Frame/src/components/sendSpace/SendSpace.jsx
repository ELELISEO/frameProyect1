/*import React from 'react'
import RowProductos from '../rowProductos/RowProductos'
import { productos } from '../../data/productos'

const SendSpace = () => {
    const ventas = productos
  return (
    <>
      <div className='bg-white h-[30rem] w-[65rem] m-5 overflow-hidden'>
      <div className="full overflow-y-auto">
            <table className="table-auto w-full border-collapse">
                <thead className=''>
                    <tr className='bg-color1 text-white h-[3.2rem]'>
                        <th className=" sticky-top-1 px-6 py-3 border-b border-gray-200 text-left text-xs font-medium uppercase w-[5px]">
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200  text-left text-xs font-medium uppercase tracking-wider">
                            ID
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium uppercase tracking-wider">
                            PRODUCTO
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200  text-left text-xs font-medium uppercase tracking-wider">
                            CANTIDAD
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium uppercase tracking-wider">
                            PRECIO
                        </th>
                    </tr>
                </thead>
                <tbody className='overflow-y-auto'>
                    {ventas.map((venta,index) => <RowProductos key={index} id={venta.id} producto={venta.producto} cantidad={venta.cantidad} precio={venta.precio}/>)}
                </tbody>
            </table>
        </div>
      </div>
    </>  
  )
}

export default SendSpace


//el tbody va a ser un componente que s eitere varias

import React from 'react';
import RowProductos from '../rowProductos/RowProductos';
import { productos } from '../../data/productos';

const SendSpace = () => {
  const ventas = productos;
  return (
    <>
      <div className="bg-white h-[30rem] w-[65rem] m-5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-color1 text-white h-[3.2rem]">
                <th className="sticky top-0 px-6 py-3 border-b border-gray-200 text-left text-xs font-medium uppercase w-[5px]"></th>
                <th className="sticky top-0 px-6 py-3 border-b border-gray-200 text-left text-xs font-medium uppercase tracking-wider">
                  ID
                </th>
                <th className="sticky top-0 px-6 py-3 border-b border-gray-200 text-left text-xs font-medium uppercase tracking-wider">
                  PRODUCTO
                </th>
                <th className="sticky top-0 px-6 py-3 border-b border-gray-200 text-left text-xs font-medium uppercase tracking-wider">
                  CANTIDAD
                </th>
                <th className="sticky top-0 px-6 py-3 border-b border-gray-200 text-left text-xs font-medium uppercase tracking-wider">
                  PRECIO
                </th>
              </tr>
            </thead>
            <tbody className="block max-h-[40rem] overflow-y-auto">
              {ventas.map((venta, index) => (
                <RowProductos
                  key={index}
                  id={venta.id}
                  producto={venta.producto}
                  cantidad={venta.cantidad}
                  precio={venta.precio}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SendSpace;*/
import React, { useEffect, useState } from 'react';
import RowProductos from '../rowProductos/RowProductos';
import { productos } from '../../data/productos';

const SendSpace = () => {
  const [ventas, setVentas] = useState([])

  const getCarrito = async () => {
    const response = await fetch(`http://localhost:5000/carrito/`, {
      method: 'GET', // Indicamos que es una petición POST
      headers: {
        'Content-Type': 'application/json', // Definimos que estamos enviando JSON
      },
    });
    const data = await response.json();
    if (data.status === 200) {
      return data.mensaje
    } else
      return null
  }

  useEffect(() => {
    const fetchProducto = async () => {
        const data = await getCarrito();
        setVentas(data);
    };
    setInterval(function() {
      fetchProducto();
      // Tu función aquí
      console.log("Esta función se ejecuta cada 10 segundos");
  }, 100); // 10000 milisegundos = 10 segundos
  }, []);

  return (
    <div className="bg-white h-[30rem] w-[65rem] m-5 overflow-hidden">
      <div className="h-full overflow-y-auto ">
        <table className="table-auto w-full border-collapse">
          <thead className="bg-color1 text-white z-10">
            <tr>
              <th className="bg-color1 sticky top-0 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                ID
              </th>
              <th className="bg-color1 sticky top-0 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                PRODUCTO
              </th>
              <th className="bg-color1 sticky top-0 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                CANTIDAD
              </th>
              <th className="bg-color1 sticky top-0 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                SUBTOTAL
              </th>
            </tr>
          </thead>
          <tbody>
            {ventas.map((venta, index) => (
              <RowProductos key={index} id={venta.id} producto={venta.producto} cantidad={venta.cantidad} precio={venta.precio}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SendSpace;
