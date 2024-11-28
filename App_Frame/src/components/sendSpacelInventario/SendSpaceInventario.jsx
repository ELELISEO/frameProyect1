import React, { useEffect, useState } from 'react'
import RowProductsInventario from '../rowProductsInventario/RowProductsInventario';

const SendSpaceInventario = () => {
    const [ventas, setVentas] = useState([])

  const getCarrito = async () => {
    const response = await fetch(`http://localhost:5000/inventario/inventario`, {
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
                STOCK
              </th>
              <th className="bg-color1 sticky top-0 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                VENTA
              </th>
              <th className="bg-color1 sticky top-0 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                ALMACEN
              </th>
              <th className="bg-color1 sticky top-0 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                TOTAL
              </th>
            </tr>
          </thead>
          <tbody>
            {ventas.map((venta, index) => (
              <RowProductsInventario key={index} id={venta.id} producto={venta.producto} stock={venta.stock} venta={venta.cantidad}
              almacen={venta.almacen_almacen} total={venta.precio}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SendSpaceInventario