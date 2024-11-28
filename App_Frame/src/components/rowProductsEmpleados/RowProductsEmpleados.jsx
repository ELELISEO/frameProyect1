import React from 'react'

const RowProductsEmpleados = ({id, nombre, apellido}) => {
  return (
    <>
            <tr className="hover:bg-gray-100">
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {id}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {nombre}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {apellido}
                </td>
            </tr>
        </>
  )
}

export default RowProductsEmpleados