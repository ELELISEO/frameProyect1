import React from 'react'

const RowProductos = ({id, producto, cantidad, precio}) => {
    return (
        <>
            <tr className="hover:bg-gray-100">
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700 w-[2rem]">
                    <input type="checkbox" />
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {id}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {producto}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {cantidad}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {precio}
                </td>
            </tr>
        </>
    )
}

export default RowProductos