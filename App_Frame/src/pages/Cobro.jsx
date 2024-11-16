import React from 'react'
import SendSpace from '../components/sendSpace/SendSpace'
import { Bill } from '../components/bill/Bill'
import Coin from '../components/coin/Coin'
import { IoReturnUpBack } from "react-icons/io5";


export default function Cobro() {
  let billetes1 = [" "," "," "] //Arreglo vacio billetes
  let billetes2 = [" "," "," "]

  let monedas = [" "," ", " ", " "," "] //monedas
  return (
    <>
    <main className='h-screen w-screen'>
        <section className='h-full w-full flex'>
            <div className='bg-white h-full w-1/2 flex flex-col justify-between'> {/*DIV IZQUIERDA*/}
              <div className='h-1/2 w-[48rem] flex'>
              <SendSpace /> {/*TABLA COMOPONENTE*/}
              </div>

              <div className='h-24 w-full flex flex-col'> {/*DIV MAYOR*/}
              <div className='flex'>
              <div className='bg-teal-600 h-12 w-96 text-color1 text-center font-bold'> {/*DIV  TOTAL*/}
                TOTAL 
              </div>
              <div className='bg-pink-600 h-12 w-96  text-color1 text-center font-bold'> {/*DIV COBRO*/}
                COBRO
              </div>
              </div>
              <div>

              <div className='bg-red-600 h-12 w-[48rem] text-color1 text-center font-bold'> {/*DIV CAMBIO*/}
                CAMBIO
              </div>
              </div>
            
              </div>

            </div>

            
          

          <div className='bg-white flex flex-col h-full w-1/2'> {/*DERECHA*/}
          <div className='flex-col'> {/*MAYBEEEE*/}
          <div className='flex mb-2'> {/*DIV BILLETES*/}
            <div>
          {billetes1.map((billete,index) => (<Bill key={index} index={index} billete={billete}/>))} 
          {/*Llenas arreglo con propiedades billete e index con la funcion arrow de Bill asisgnando sus propiedadess de bill asi misma*/}
          </div>
          <div>
          {billetes2.map((billete,index) => (<Bill key={index} index={index} billete={billete}/>))}
          </div>
          </div>
          <div className='flex justify-center mt-3 mb-1'> {/*DIV MONEDAS*/}
            {monedas.map((monedas,index) => (<Coin key={index} index={index} monedas={monedas}/>))}

          </div>
          </div>
          <div>
          <div className=' flex justify-around items-center mt-20 '>
          <button className='w-56 h-16 bg-color9 text-white'> {/*BOTON REGRESAR*/}
         {/* <IoReturnUpBack /> NOOOTA: Jugar con propiedades (tamaño, color etc.) de texto*/}
            REGRESAR
            </button>
          <button className='w-56 h-16 bg-color10 text-white'> {/*BOTON FINALIZAR*/}
            FINALIZAR
          </button>
          </div>
          </div>

          </div>

        </section>

    </main>
    </>
  )
}
