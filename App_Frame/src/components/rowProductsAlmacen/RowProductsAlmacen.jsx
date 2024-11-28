import React from 'react'

const RowProductsAlmacen = ({id, contacto, producto, cantidad,proveedor, precio}) => {
    return (
        <>
            <tr className="hover:bg-gray-100">
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700 text-center">
                    {id}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {contacto}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {producto}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {cantidad}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {proveedor}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {precio}
                </td>
            </tr>
        </>
    )
}

export default RowProductsAlmacen