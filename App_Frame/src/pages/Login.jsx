import React from 'react'

export const Login = () => {
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
                className="w-72 h-[2.5rem] bg-color6 mb-5 p-4 rounded-full rounded-br-none font-bold text-black text-sm"
      />
      <input
                type="password"
                placeholder="CONTRASEÑA"
                className="w-72 h-[2.5rem] bg-color6 mb-5 p-4 rounded-full rounded-br-none font-bold text-black text-sm"
      />
      <button className="w-48 h-12 bg-color8 rounded-full rounded-br-none font-bold text-white text-base p-3 mt-10"> {/*BOTON*/}
        LOG IN 

      </button>
      </div>
      
      
      </div>

    </section>

</main>
</>  )
}
