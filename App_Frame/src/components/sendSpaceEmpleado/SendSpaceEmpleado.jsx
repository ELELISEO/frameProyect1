import React, { useEffect, useState } from 'react'
import RowProductsEmpleados from '../rowProductsEmpleados/RowProductsEmpleados';

const SendSpaceEmpleado = () => {
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
                  NOMBRE
                </th>
                <th className="bg-color1 sticky top-0 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  APELLIDO
                </th>
              </tr>
            </thead>
            <tbody>
              {ventas.map((venta, index) => (
                <RowProductsEmpleados key={index} id={venta.id} producto={venta.producto} cantidad={venta.cantidad} precio={venta.precio}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default SendSpaceEmpleado