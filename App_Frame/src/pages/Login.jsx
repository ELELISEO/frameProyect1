import React, { useState } from 'react'
import ModalValiCon from '../components/modalvalicon/ModalValiCon'
import ModalVali from '../components/modalvali/ModalVali'
import { useNavigate } from "react-router-dom";
import AlertModal from '../components/alertModal/AlertModal';

export const Login = () => {
  const [id, setId] = useState("")
  const [contraseña, setContraseña] = useState("")
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpen2, setModalOpen2] = useState(false);
  const [isAlert, setAlertOpen] = useState(false);
  const navigate = useNavigate()

  const handleModal = () => {
    setModalOpen(false)
  }
  const handleModal2 = () => {
    setModalOpen2(false)
  }
  const handleAlert = () => {
    setAlertOpen(false)
  }

  const handleLogin = async () => {
    if (id === "" && contraseña === "") {
      setModalOpen(true)
      setModalOpen2(true)
    }
    else if (id === "") {
      setModalOpen(true)
    } else if (contraseña === "") {
      setModalOpen2(true)

    } else {
      const response = await fetch('http://localhost:5000/api/mensaje', {
        method: 'POST', // Indicamos que es una petición POST
        headers: {
          'Content-Type': 'application/json', // Definimos que estamos enviando JSON
        },
        body: JSON.stringify({ id: id, CONTRASEÑA: contraseña }), // Convertimos las credenciales a JSON
      });
      const data = await response.json();
      console.log('Respuesta JSON:', data);
      if (data.status === 200) {
        navigate('/PageI')
      } else {
        setAlertOpen(true)
      }
    }

  }
  return (
    <>
      <main className="h-screen w-screen">
        <section className="w-full h-full bg-[#EDEDED] flex justify-center items-center">
          <div className="w-[35rem] h-[40rem] bg-color1 rounded-[15px] rounded-br-none justify-start 
      items-center flex flex-col "> {/*DIV PRINCIPAL*/}
            <div className="w-[27rem] h-[15rem] flex flex-col items-center justify-start border-b-2
         border-color6"> {/*DIV WRAP/LINE*/}
              <div className="w-[35rem] h-[16rem] flex rounded-[15px] rounded-b-none items-center justify-start
        p-[6rem] gap-14"> {/*DIV TITULO Y LOGO*/}
                <div className="bg-color2 w-32 h-32 rounded-full justify-start "> {/*LOGO*/}

                </div>
                <h2 className="text-white font-bold text-4xl flex text-right"> {/*TITULO*/}
                  Miscelanea <br />
                  Daniela
                </h2>
              </div>
            </div>
            <div className="w-[27rem] h-[20rem] items-center justify-center mt-3 flex flex-col"> {/*DIV DE DATOS*/}
              <input
                type="text"
                placeholder="USUARIO"
                onChange={e => setId(e.target.value)}
                className="w-72 h-[2.5rem] bg-color6 mb-5 p-4 rounded-full rounded-br-none font-bold text-black text-sm outline-none"
              />
              <ModalVali isOpen={isModalOpen} onClose={handleModal} />
              <input
                type="password"
                placeholder="CONTRASEÑA"
                onChange={e => setContraseña(e.target.value)}
                className="w-72 h-[2.5rem] bg-color6 mb-5 p-4 rounded-full rounded-br-none font-bold text-black text-sm outline-none"
              />
              <ModalValiCon isOpen={isModalOpen2} onClose={handleModal2} />
              <button onClick={handleLogin} className="w-48 h-12 bg-color8 rounded-full rounded-br-none font-bold text-white text-base p-3 mt-10"> {/*BOTON*/}
                LOG IN
              </button>
            </div>


          </div>

        </section>
        <AlertModal isVisible={isAlert} onClose={handleAlert} />
      </main>
    </>)
}

