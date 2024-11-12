import React from 'react'

const SendSpace = () => {
  return (
    <>
      <div className='bg-white h-[30rem] w-[65rem] m-5'>
      <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Encabezado 1
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            ID
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            CANTIDAD
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            PRECIO
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover:bg-gray-100">
                        <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                            Celda 1
                        </td>
                        <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                            Celda 2
                        </td>
                        <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                            Celda 3
                        </td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                            Celda 4
                        </td>
                        <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                            Celda 5
                        </td>
                        <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                            Celda 6
                        </td>
                    </tr>
                    {/* Añade más filas según sea necesario */}
                </tbody>
            </table>
        </div>
      </div>
    </>  
  )
}

export default SendSpace