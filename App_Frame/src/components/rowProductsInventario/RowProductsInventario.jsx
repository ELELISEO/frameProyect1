import React from 'react'

const RowProductsInventario = ({id, producto, stock, venta, almacen, total}) => {
  
    return (
        <>
            <tr className="hover:bg-gray-100">
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {id}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {producto}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {stock}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {venta}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {almacen}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {total}
                </td>
            </tr>
        </>
    )
}

export default RowProductsInventario