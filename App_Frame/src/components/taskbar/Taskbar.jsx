import React from 'react'
import { useNavigate } from 'react-router-dom'

const Taskbar = ({ seccion, indexB, index }) => {
    const paginas = ["/PageI", "/Inventory","/Storage","/Employees"]
    const navigate = useNavigate()

   const handleTaskbar = () => {
        if (paginas[index]) {
            navigate(paginas[index])
        }else
        navigate("/Login")
    }
    console.log(index);
    

    return (
        <>
            <div className='w-[18rem] h-auto text-white text-2xl'>
                <div className={`flex items-center text-left h-[5rem] ${indexB === index ? "bg-color3 h-[5rem]" : ''}`}>
                    <button onClick={handleTaskbar} className={`h-[5rem] w-full flex justify-start items-center hover:border-r-4 border-colo3  transition duration-75`}>{seccion}</button>
                </div>
            </div>
        </>
    )
}

export default Taskbar