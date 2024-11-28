import React, { useEffect, useState } from 'react'
import RowProductsAlmacen from '../rowProductsAlmacen/RowProductsAlmacen';

const SendSpaceAlmacen = () => {
    const [almacen, setData] = useState([])



    const getProveedor = async () => {
      const response = await fetch(`http://localhost:5000/almacen/almacen/proveedores`, {
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
        const data = await getProveedor();
        setData(data); // Siempre será un array (vacío o con datos)
      };
      setInterval(function() {
        fetchProducto();
        console.log("Esta función se ejecuta cada 10 segundos");
    }, 100);    }, []);
    
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
                  CONTACTO
                </th>
                <th className="bg-color1 sticky top-0 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  PRODUCTO
                </th>
                <th className="bg-color1 sticky top-0 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  CANTIDAD
                </th>
                <th className="bg-color1 sticky top-0 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  PROVEEDOR
                </th>
                <th className="bg-color1 sticky top-0 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  PRECIO
                </th>
              </tr>
            </thead>
            <tbody>
            {almacen.map((almacen, index) => (
                <RowProductsAlmacen key={index} id={almacen.id} contacto={almacen.contacto} producto={almacen.producto} cantidad={almacen.cantidad}
                proveedor={almacen.proveedor} precio={almacen.precio}/>  ))}  
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default SendSpaceAlmacen